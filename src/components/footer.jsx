import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-red-600 font-poppins pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-900 border-2 border-white border-b-0 rounded-t-3xl p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            
            {/* Navigasi Kiri (Rata Tengah) */}
            <div className="flex flex-col items-center space-y-2">
              <h4 className="font-bree text-lg text-yellow-300 tracking-wide mb-1">
                Akses Cepat
              </h4>
              <div className="flex flex-col space-y-1.5 text-xs sm:text-sm font-semibold text-white/90">
                <Link to="/" className="hover:text-yellow-300 transition-colors">Beranda</Link>
                <Link to="/tentang" className="hover:text-yellow-300 transition-colors">Tentang Kami</Link>
                <Link to="/kegiatan" className="hover:text-yellow-300 transition-colors">Kegiatan Kami</Link>
                <Link to="/kontak" className="hover:text-yellow-300 transition-colors">Kontak Kami</Link>
              </div>
            </div>

            {/* Logo Tengah & Icon Sosmed Bulat */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <img 
                src="/logo-karang-taruna.png" 
                alt="Logo Karang Taruna RW 05" 
                className="w-16 h-16 object-contain filter drop-shadow-xl"
              />
              
              <div className="flex items-center space-x-3 text-white">
                <a 
                  href="https://instagram.com/karangtaruna_05cengtim" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-red-800 hover:bg-yellow-400 hover:text-red-900 border border-red-700 flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="mailto:karangtaruna05cengtim@gmail.com" 
                  className="w-9 h-9 rounded-full bg-red-800 hover:bg-yellow-400 hover:text-red-900 border border-red-700 flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>

            {/* Kontak & Nama Organisasi Kanan (Rata Tengah) */}
            <div className="flex flex-col items-center space-y-1">
              <h4 className="font-bree text-lg text-white leading-tight">
                Karang Taruna Unit 05
              </h4>
              <p className="text-xs text-yellow-300 font-medium mb-2">
                Cengkareng Timur, Jakarta Barat
              </p>
              <p className="text-xs text-white/80 max-w-xs leading-relaxed">
                Jl. Nurul Amal 7, Cengkareng Timur
              </p>
            </div>

          </div>

          {/* Copyright Watermark di Dasar */}
          <div className="mt-6 pt-5 border-t border-white/20 text-center text-[11px] sm:text-xs text-white/80 font-medium">
            Created by Rizky Revaldo | Karang Taruna RW 05
          </div>
        </div>
      </div>
    </footer>
  );
}