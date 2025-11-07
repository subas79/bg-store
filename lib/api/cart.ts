// API client functions for cart
import { CartItem } from '@/types/cart';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function getCart(): Promise<CartItem[]> {
  const response = await fetch(`${API_BASE_URL}/cart`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
}

export async function addToCart(productId: string, quantity: number = 1): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }
}

export async function removeFromCart(productId: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove item from cart');
  }
}

export async function updateCartItem(productId: string, quantity: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  });
  if (!response.ok) {
    throw new Error('Failed to update cart item');
  }
}

export async function clearCart(): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to clear cart');
  }
}

