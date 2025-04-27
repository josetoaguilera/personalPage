import React from 'react';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';

function HomePage() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 flex flex-col min-h-screen" >
        <Hero />
        <Footer />
      </div>

    </>
  );
}

export default HomePage;