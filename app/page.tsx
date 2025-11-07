'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { sampleProducts } from '@/lib/data/products';
import { GoogleReviews } from '@/components/reviews/GoogleReviews';

// Gallery images for store showcase
const galleryImages = [
  '/images/products/product-013.jpg',
  '/images/products/product-014.jpg',
  '/images/products/product-015.jpg',
  '/images/products/product-016.jpg',
  '/images/products/product-017.jpg',
  '/images/products/product-018.jpg',
  '/images/products/product-019.jpg',
  '/images/products/product-020.jpg',
];

// Hero section videos
const heroVideos = [
  '/videos/products/product-001.mp4',
  '/videos/products/product-002.mp4',
  '/videos/products/product-003.mp4',
  '/videos/products/product-004.mp4',
  '/videos/products/product-005.mp4',
];

// Sample Google Reviews data - In a real app, this would come from Google Places API
const googleReviews = {
  placeName: 'BGStore & Suppliers',
  overallRating: 4.7,
  totalReviews: 127,
  reviews: [
    {
      id: '1',
      authorName: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent store with great products! The quality is outstanding and the prices are very reasonable. Highly recommended for all your shopping needs.',
      time: '2024-01-15T10:30:00Z',
      relativeTime: '2 months ago',
    },
    {
      id: '2',
      authorName: 'Sita Shrestha',
      rating: 5,
      text: 'Amazing customer service and fast delivery. The products I ordered arrived in perfect condition. Will definitely shop here again!',
      time: '2024-01-10T14:20:00Z',
      relativeTime: '2 months ago',
    },
    {
      id: '3',
      authorName: 'Amit Thapa',
      rating: 4,
      text: 'Good variety of products and competitive prices. The store is well organized and the staff is helpful. Only minor issue was the wait time during peak hours.',
      time: '2024-01-05T09:15:00Z',
      relativeTime: '3 months ago',
    },
    {
      id: '4',
      authorName: 'Priya Maharjan',
      rating: 5,
      text: 'Best store in the area! Great selection, fair prices, and excellent service. I\'ve been shopping here for months and always satisfied.',
      time: '2023-12-28T16:45:00Z',
      relativeTime: '3 months ago',
    },
    {
      id: '5',
      authorName: 'Bikash Tamang',
      rating: 4,
      text: 'Very good store with quality products. The staff is knowledgeable and always ready to help. Prices are reasonable compared to other stores.',
      time: '2023-12-20T11:30:00Z',
      relativeTime: '3 months ago',
    },
    {
      id: '6',
      authorName: 'Anita Gurung',
      rating: 5,
      text: 'Love shopping here! Great products, excellent customer service, and they always have what I need. Highly recommend BGStore!',
      time: '2023-12-15T13:20:00Z',
      relativeTime: '4 months ago',
    },
  ],
};

export default function Home() {
  const { addToCart } = useCart();
  const [products] = useState<Product[]>(sampleProducts);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cycle through videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Play video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [currentVideoIndex]);

  const handleAddToCart = (productId: string) => {
    addToCart(productId, 1);
    // In a real app, you might want to show a toast notification here
    alert('Product added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Video Background - Multiple videos cycling */}
        <div className="absolute inset-0">
          {heroVideos.map((videoSrc, index) => (
            <video
              key={index}
              ref={index === currentVideoIndex ? videoRef : null}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ))}
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Video Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentVideoIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Welcome to BGStore
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200">
              Discover quality products at unbeatable prices
            </p>
            <a
              href="#products"
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Explore our collection of premium products
          </p>
        </div>
        
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      </section>

      {/* Gallery Section - Store Images */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
              Store Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Take a look at our store and products
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-gray-100 group cursor-pointer relative"
              >
                <Image
                  src={image}
                  alt={`Store image ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews
        placeName={googleReviews.placeName}
        overallRating={googleReviews.overallRating}
        totalReviews={googleReviews.totalReviews}
        reviews={googleReviews.reviews}
      />

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All products are carefully selected and quality tested</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted payment processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
