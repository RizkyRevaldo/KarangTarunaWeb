import React from 'react';
import Navbar from '../components/navbar';
import Kegiatan from '../components/kegiatan';
import Footer from '../components/footer';

export default function KegiatanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-10">
        <Kegiatan />
      </div>
      <Footer />
    </div>
  );
}