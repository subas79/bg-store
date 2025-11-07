import Image from 'next/image';

export const metadata = {
  title: 'About Us - BGStore',
  description: 'Learn more about BGStore & Suppliers',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">About BGStore</h1>
          <p className="text-lg sm:text-xl text-gray-300">Your trusted partner for quality products</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
                Welcome to BGStore & Suppliers, your premier destination for quality products in Nepal. 
                We are committed to providing our customers with the best products at competitive prices, 
                backed by exceptional customer service.
              </p>
              <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
                With years of experience in the retail industry, we have built a reputation for reliability, 
                quality, and customer satisfaction. Our team is dedicated to sourcing the finest products 
                and ensuring they meet our high standards before reaching you.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                At BGStore, we believe in building lasting relationships with our customers through 
                transparency, quality, and value. Whether you're shopping for everyday essentials or 
                special items, we're here to serve you.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality</h3>
                <p className="text-sm sm:text-base text-gray-600">We ensure all products meet our high quality standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-sm sm:text-base text-gray-600">Your satisfaction is our top priority</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Trust</h3>
                <p className="text-sm sm:text-base text-gray-600">Building trust through transparency and reliability</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">Why Choose BGStore?</h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">Wide selection of quality products</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">Competitive prices in Nepali Rupees</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">Fast and reliable delivery</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">Excellent customer service</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">Secure payment options</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

