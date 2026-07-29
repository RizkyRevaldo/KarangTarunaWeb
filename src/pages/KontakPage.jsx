import React from 'react';
import Navbar from '../components/navbar';
import Kontak from '../components/kontak';
import Footer from '../components/footer';

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-10">
        <Kontak />
      </div>
      <Footer />
    </div>
  );
}