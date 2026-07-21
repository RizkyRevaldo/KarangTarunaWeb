import React, { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-red-600 font-poppins antialiased text-white selection:bg-yellow-400 selection:text-red-900">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpeg"
            alt="Karang Taruna Unit 05 Cengkareng Timur"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/20 to-red-600" />
        </div>

        {/* ================= NAVBAR ================= */}
        <header className="relative z-20 bg-red-600/90 backdrop-blur-md shadow-md border-b border-red-700/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
            
            {/* Logo Brand Custom */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="/logo.png" 
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
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wider">
              <a href="#beranda" className="text-white border-b-2 border-white pb-1 transition-all">BERANDA</a>
              <a href="#tentang" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">TENTANG KAMI</a>
              <a href="#kegiatan" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">KEGIATAN</a>
              <a href="#kontak" className="text-white/90 hover:text-white hover:border-b-2 hover:border-white pb-1 transition-all">KONTAK KAMI</a>
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

        {/* ================= HERO CONTENT (DIBUAT LEBIH TINGGI & DIKEBAWAHKAN) ================= */}
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
              <a
                href="#kegiatan"
                className="font-poppins inline-block px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 border border-red-500/60 text-white font-extrabold text-base shadow-xl shadow-red-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Lihat Kegiatan Kami
              </a>
            </div>

            {/* REVISI BADGE STATISTIK HERO ALA BEM FEB UI:
                Ukurannya dibesarkan (min-w-[180px] sm:min-w-[210px], py-4, px-6), 
                dikebawahkan, dan memiliki icon/angka tebal yang menonjol */}
            <div className="flex flex-wrap items-center gap-5 font-poppins pt-4">
              
              {/* Badge 1: Anggota */}
              <div className="min-w-[180px] sm:min-w-[210px] bg-red-600/95 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-red-500/70 shadow-2xl flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-white">20+</span>
                <div className="flex flex-col items-end leading-tight ml-4">
                  <svg className="w-7 h-7 text-white/90 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-bold text-white/90">Anggota</span>
                </div>
              </div>

              {/* Badge 2: Periode (Ukuran Lebar & Tinggi Samain Presisi) */}
              <div className="min-w-[180px] sm:min-w-[210px] bg-red-600/95 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-red-500/70 shadow-2xl flex flex-col justify-center items-center leading-tight">
                <span className="text-xl sm:text-2xl font-black text-white">2025 – 2027</span>
                <span className="text-xs sm:text-sm font-bold text-white/90 mt-1">Periode</span>
              </div>

            </div>

          </div>
        </main>

        <div className="relative z-10 w-full h-12 bg-gradient-to-b from-transparent to-red-600" />
      </div>

      {/* ================= SECTION TENTANG KAMI & VISI MISI (MARGIN MELEBAR PAS BEM FEB UI) ================= */}
      <section id="tentang" className="bg-red-600 text-white pb-20 font-poppins">
        
        {/* RUNNING TEXT BANNER */}
        <div className="bg-red-900/95 border-y-2 border-yellow-400/80 py-4 overflow-hidden whitespace-nowrap mb-12 shadow-2xl">
          <div className="animate-marquee font-poppins font-extrabold text-sm sm:text-base tracking-widest uppercase text-yellow-300">
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
          </div>
        </div>

        {/* REVISI MARGIN PINGGIR: Menggunakan max-w-7xl dan px-6 sm:px-8 lg:px-12 agar melebar ke pinggir seperti BEM FEB UI */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <h2 className="font-bree text-3xl sm:text-4xl text-white tracking-wide mb-8">
            Tentang Kami
          </h2>

          {/* Apa itu Karang Taruna */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-14">
            <div className="md:col-span-8">
              <h3 className="font-bree text-2xl sm:text-3xl text-white tracking-wide mb-2">
                Apa itu Karang Taruna?
              </h3>
              <p className="font-poppins text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
                Karang Taruna adalah organisasi kepemudaan di Indonesia yang menjadi wadah pengembangan generasi muda. Organisasi ini tumbuh dan berkembang atas dasar kesadaran serta tanggung jawab sosial dari, oleh, dan untuk masyarakat, khususnya pemuda, di tingkat desa atau kelurahan hingga lingkup yang lebih besar.
              </p>
            </div>

            {/* Logo Karang Taruna */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative p-3 bg-yellow-400 rounded-full shadow-2xl border-4 border-red-700">
                <img 
                  src="/logo.png" 
                  alt="Logo Karang Taruna" 
                  className="w-44 h-44 sm:w-52 sm:h-52 object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Kenapa Karang Taruna Unit 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-14">
            <div className="md:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-300 shadow-2xl">
                <img 
                  src="/hero-bg.jpeg" 
                  alt="Kegiatan Karang Taruna" 
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-bree text-2xl sm:text-3xl text-white tracking-wide mb-2">
                Kenapa Karang Taruna Unit 05 ?
              </h3>
              <p className="font-poppins text-sm sm:text-base text-white/90 leading-relaxed mb-2">
                Karang Taruna RW 05 Cengkareng Timur bukan sekedar organisasi, melainkan rumah bagi pemuda untuk berkarya.
              </p>
              <p className="font-poppins text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                Kami berfokus pada pengembangan potensi pemuda, kegiatan sosial, dan menjaga kerukunan antar warga.
              </p>

              {/* 3 Stats Box Pas BEM FEB UI */}
              <div className="grid grid-cols-3 gap-3 font-poppins">
                <div className="bg-red-700 border border-red-500/60 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                  <div className="text-xl sm:text-2xl font-black text-white">20+</div>
                  <div className="text-xs text-white/80 font-medium">Anggota</div>
                </div>

                <div className="bg-red-700 border border-red-500/60 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                  <div className="text-sm sm:text-base font-black text-white mt-1">2025 - 2027</div>
                  <div className="text-xs text-white/80 font-medium">Periode</div>
                </div>

                <div className="bg-red-700 border border-red-500/60 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                  <div className="text-xl sm:text-2xl font-black text-white">6+</div>
                  <div className="text-xs text-white/80 font-medium">Kegiatan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-white/40 my-12" />

          {/* VISI & MISI (MELEBAR KE PINGGIR) */}
          <div>
            <h2 className="font-bree text-3xl sm:text-4xl text-white tracking-wide mb-8">
              Visi - Misi
            </h2>

            {/* Card Visi */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-2xl mb-8 border-t-4 border-yellow-400">
              <h3 className="font-bree text-2xl text-red-600 text-center mb-2 uppercase tracking-wider">
                Visi
              </h3>
              <p className="font-poppins text-sm sm:text-base text-slate-700 font-medium text-center leading-relaxed max-w-4xl mx-auto">
                Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-2xl border-t-4 border-yellow-400">
              <h3 className="font-bree text-2xl text-red-600 text-center mb-4 uppercase tracking-wider">
                Misi
              </h3>
              <ul className="font-poppins space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc pl-6 leading-relaxed">
                <li>
                  Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.
                </li>
                <li>
                  Menjadikan teknologi sebagai alat perubahan positif melalui edukasi literasi digital, pemanfaatan media sosial, dan inovasi berbasis teknologi.
                </li>
                <li>
                  Menguatkan solidaritas sosial dan kepedulian lingkungan dengan aksi sosial, kampanye peduli lingkungan, dan program pemberdayaan masyarakat.
                </li>
                <li>
                  Mewujudkan ruang kreatif bagi anak muda melalui event seni budaya, olahraga, dan komunitas hobi.
                </li>
                <li>
                  Meningkatkan partisipasi pemuda dalam pembangunan desa/kota dengan keterlibatan dalam program pemerintah dan inisiatif sosial berbasis komunitas.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-white/40 my-12" />

        </div>
      </section>
    </div>
  );
}