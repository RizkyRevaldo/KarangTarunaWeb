import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <main id="beranda" className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-16 my-auto w-full flex flex-col justify-between">
      <div className="max-w-2xl">
        <h1 className="font-bree text-3xl sm:text-4xl md:text-5xl text-white mb-2 drop-shadow-md">
          Selamat Datang di Website
        </h1>
        
        <h2 className="font-poppins text-xl sm:text-2xl font-bold text-white/95 mb-1 drop-shadow-sm">
          Karang Taruna Unit 05
        </h2>

        <p className="font-poppins text-base sm:text-lg text-slate-100 font-medium mb-4 drop-shadow">
          Cengkareng Timur, Jakarta Barat
        </p>

        <div className="w-full max-w-lg h-[2px] bg-white/70 mb-8 shadow-sm" />

        <div className="mb-12">
          <Link
            to="/kegiatan"
            className="font-poppins inline-block px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 border border-red-500/60 text-white font-extrabold text-base shadow-xl shadow-red-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Lihat Kegiatan Kami
          </Link>
        </div>

        {/* Badges Statistik Hero Ala BEM FEB UI */}
        <div className="flex flex-wrap items-center gap-5 font-poppins pt-4">
          <div className="min-w-[180px] sm:min-w-[210px] bg-red-600/95 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-red-500/70 shadow-2xl flex items-center justify-between">
            <span className="text-3xl sm:text-4xl font-black text-white">20+</span>
            <div className="flex flex-col items-end leading-tight ml-4">
              <svg className="w-7 h-7 text-white/90 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold text-white/90">Anggota</span>
            </div>
          </div>

          <div className="min-w-[180px] sm:min-w-[210px] bg-red-600/95 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-red-500/70 shadow-2xl flex flex-col justify-center items-center leading-tight">
            <span className="text-xl sm:text-2xl font-black text-white">2025 – 2027</span>
            <span className="text-xs sm:text-sm font-bold text-white/90 mt-1">Periode</span>
          </div>
        </div>
      </div>
    </main>
  );
}