'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Cart, CartItem, CartContextType } from '@/types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    itemCount: 0,
  });

  const calculateTotal = useCallback((items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { total, itemCount };
  }, []);

  const addToCart = useCallback((productId: string, quantity: number = 1) => {
    setCart((prevCart) => {
      // In a real app, you'd fetch product details from an API
      // For now, this is a placeholder
      const existingItem = prevCart.items.find((item) => item.productId === productId);
      
      if (existingItem) {
        const updatedItems = prevCart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        const { total, itemCount } = calculateTotal(updatedItems);
        return { items: updatedItems, total, itemCount };
      }
      
      // Add new item (placeholder - would need product data)
      const newItems = [...prevCart.items];
      const { total, itemCount } = calculateTotal(newItems);
      return { items: newItems, total, itemCount };
    });
  }, [calculateTotal]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.productId !== productId);
      const { total, itemCount } = calculateTotal(updatedItems);
      return { items: updatedItems, total, itemCount };
    });
  }, [calculateTotal]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      const { total, itemCount } = calculateTotal(updatedItems);
      return { items: updatedItems, total, itemCount };
    });
  }, [removeFromCart, calculateTotal]);

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0, itemCount: 0 });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

