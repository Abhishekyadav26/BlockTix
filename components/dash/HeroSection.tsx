import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Secure Event Tickets 
              <span className="text-blue-600"> on the Pharos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Say goodbye to ticket fraud and scalping. Our decentralized platform ensures authentic tickets, transparent pricing, and secure ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dash">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-medium">
                Get Started
              </button>
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Concert with audience"
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                    <div className="text-sm font-medium text-gray-500 mb-1">UPCOMING EVENT</div>
                    <div className="text-xl font-bold text-gray-900 mb-1">Global Music Festival</div>
                    <div className="text-blue-600 font-medium">Secure your tickets now!</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;