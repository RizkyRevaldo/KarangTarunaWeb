import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-red-600/90 backdrop-blur-md shadow-md border-b border-red-700/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Brand Custom */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <img 
            src="/logo-karang-taruna.png" 
            alt="Logo Karang Taruna RW 05" 
            className="w-12 h-12 object-contain filter drop-shadow-md"
          />
          <div className="flex flex-col">
            <span className="font-black text-white text-base tracking-wider leading-none">
              KARANG TARUNA
            </span>
            <span className="text-[11px] text-yellow-300 font-semibold tracking-widest mt-0.5">
              UNIT 05 CENGKARENG TIMUR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wider">
          <Link to="/" className="text-white hover:border-b-2 hover:border-white pb-1 transition-all">BERANDA</Link>
          <Link to="/tentang" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">TENTANG KAMI</Link>
          <Link to="/kegiatan" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">KEGIATAN</Link>
          <Link to="/kontak" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">KONTAK KAMI</Link>
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
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-white py-1">BERANDA</Link>
          <Link to="/tentang" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 hover:text-white py-1">TENTANG KAMI</Link>
          <Link to="/kegiatan" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 hover:text-white py-1">KEGIATAN</Link>
          <Link to="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 hover:text-white py-1">KONTAK KAMI</Link>
        </div>
      )}
    </header>
  );
}