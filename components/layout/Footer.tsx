export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-bold text-black mb-4">BGStore</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for quality products.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/products" className="hover:text-black transition-colors">All Products</a></li>
              <li><a href="/products?category=new" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="/products?category=sale" className="hover:text-black transition-colors">On Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/contact" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="/about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="/shipping" className="hover:text-black transition-colors">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} BGStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

