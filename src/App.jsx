import React, { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 font-sans antialiased text-white selection:bg-red-500 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpeg"
            alt="Karang Taruna Unit 05 Cengkareng Timur"
            className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.05]"
          />
          {/* Subtle gradient overlay to enhance text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        {/* ================= NAVBAR ================= */}
        <header className="relative z-20 bg-red-600/95 backdrop-blur-md shadow-lg border-b border-red-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo Brand Custom */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="/logo-karang-taruna.png" 
                alt="Logo Karang Taruna RW 05" 
                className="w-12 h-12 object-contain drop-shadow-md rounded-full border border-yellow-300/30"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg tracking-wider leading-none">
                  KARANG TARUNA
                </span>
                <span className="text-xs text-yellow-300 font-medium tracking-widest mt-0.5">
                  UNIT 05 CENGKARENG TIMUR
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wider">
              <a href="#beranda" className="text-white border-b-2 border-white pb-1 transition-all">BERANDA</a>
              <a href="#tentang" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white/70 pb-1 transition-all">TENTANG KAMI</a>
              <a href="#kegiatan" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white/70 pb-1 transition-all">KEGIATAN</a>
              <a href="#kontak" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white/70 pb-1 transition-all">KONTAK KAMI</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:bg-red-700 rounded-lg focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-red-700 border-t border-red-800 px-6 py-4 space-y-3 font-semibold text-sm">
              <a href="#beranda" className="block text-white py-1">BERANDA</a>
              <a href="#tentang" className="block text-white/90 hover:text-white py-1">TENTANG KAMI</a>
              <a href="#kegiatan" className="block text-white/90 hover:text-white py-1">KEGIATAN</a>
              <a href="#kontak" className="block text-white/90 hover:text-white py-1">KONTAK KAMI</a>
            </div>
          )}
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-16 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 drop-shadow-md">
              Selamat Datang di Website
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/95 mb-1 drop-shadow-sm">
              Karang Taruna Unit 05
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-medium mb-4 drop-shadow">
              Cengkareng Timur, Jakarta Barat
            </p>

            <div className="w-full max-w-lg h-[2px] bg-white/70 mb-8 shadow-sm" />

            <div className="mb-10">
              <a
                href="#kegiatan"
                className="inline-block px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Lihat Kegiatan Kami
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Card 1: Anggota */}
              <div className="flex items-center space-x-3 bg-red-600/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-red-500/50 shadow-xl min-w-[160px]">
                <div className="text-2xl font-black text-white">20+</div>
                <div className="flex flex-col">
                  <svg className="w-5 h-5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
                  </svg>
                  <span className="text-xs font-semibold text-white/90">Anggota</span>
                </div>
              </div>

              {/* Card 2: Periode */}
              <div className="flex flex-col bg-red-600/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-red-500/50 shadow-xl min-w-[150px]">
                <div className="text-lg font-black text-white">2025 - 2027</div>
                <span className="text-xs font-semibold text-white/90">Periode</span>
              </div>
            </div>

          </div>
        </main>

        <div className="relative z-10 w-full h-3 bg-red-600" />
      </div>
    </div>
  );
}