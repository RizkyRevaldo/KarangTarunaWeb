import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Tentang from './components/tentang';
import Kegiatan from './components/kegiatan';
import Kontak from './components/kontak';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-red-600 font-poppins antialiased text-white selection:bg-yellow-400 selection:text-red-900">
      
      {/* Background Image Overlay yang menaungi Navbar & Hero */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpeg"
            alt="Karang Taruna Unit 05 Cengkareng Timur"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/20 to-red-600" />
        </div>

        <Navbar />
        <Hero />
        
        <div className="relative z-10 w-full h-12 bg-gradient-to-b from-transparent to-red-600" />
      </div>

      <Tentang />
      <Kegiatan />
      <Kontak />
      <Footer />
      
    </div>
  );
}