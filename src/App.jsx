import React, { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data 6 Kegiatan Karang Taruna
  const daftarKegiatan = [
    {
      id: 1,
      judul: "Futsal",
      deskripsi: "Dalam menyambut 17 Agustus Karang Taruna Unit 05, mengadakan lomba futsal yang diikuti oleh anak-anak dari umur 10-13 Tahun.",
      gambar: "/futsal.jpg",
      link: "#"
    },
    {
      id: 2,
      judul: "Santunan Anak Yatim dan Dhuafa",
      deskripsi: "Program kepedulian sosial Karang Taruna Unit 05 untuk berbagi kebahagiaan, tali kasih,serta mempererat silaturahmi bersama anak-anak yatim dan dhuafa di lingkungan sekitar.",
      gambar: "/santunan.jpeg",
      link: "#"
    },
    {
      id: 3,
      judul: "Gebyar Malam Puncak",
      deskripsi: "Acara puncak peringatan kemerdekaan Indonesia yang diisi dengan panggung seni, pembagian hadiah lomba, serta ajang merajut kebersamaan seluruh warga..",
      gambar: "/festara.jpg",
      link: "#"
    },
    {
      id: 4,
      judul: "E-Sport Tournament",
      deskripsi: "Wadah bagi para pemuda untuk menyalurkan bakat, strategi, dan kerja sama tim dalam meramaikan semarak HUT RI melalui kompetisi Mobile Legends.",
      gambar: "/emel.jpg",
      link: "#"
    },
    {
      id: 5,
      judul: "Badminton Ganda Putra",
      deskripsi: "Kompetisi bulu tangkis ganda putra yang digelar dalam rangka memeriahkan HUT RI sekaligus mempererat keakraban dan menjaga pola hidup sehat warga.",
      gambar: "/badminton.jpg",
      link: "#"
    },
    {
      id: 6,
      judul: "Latihan Kepemimpinan",
      deskripsi: "Program pengembangan potensi pemuda Karang Taruna Unit 05 melalui pelatihan kepemimpinan dan keterampilan sosial.",
      gambar: "/lkk.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-red-600 font-poppins antialiased text-white selection:bg-yellow-400 selection:text-red-900">
      
      {/* ================= 1. HERO SECTION ================= */}
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

        {/* ================= HERO CONTENT ================= */}
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

        <div className="relative z-10 w-full h-12 bg-gradient-to-b from-transparent to-red-600" />
      </div>

      {/* ================= 2. SECTION TENTANG KAMI & VISI MISI ================= */}
      <section id="tentang" className="bg-red-600 text-white pb-12 font-poppins">
        
        {/* Running Text Banner */}
        <div className="bg-red-900/95 border-y-2 border-yellow-400/80 py-4 overflow-hidden whitespace-nowrap mb-12 shadow-2xl">
          <div className="animate-marquee font-poppins font-extrabold text-sm sm:text-base tracking-widest uppercase text-yellow-300">
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
            <span className="mx-8">✦ PEMUDA PROGRESIF & KREATIF ✦ SEMANGAT GOTONG ROYONG ✦ EVENT SENI & OLAHRAGA</span>
          </div>
        </div>

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

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative p-3 bg-yellow-400 rounded-full shadow-2xl border-4 border-red-700">
                <img 
                  src="/logo-karang-taruna.png" 
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
                  src="/gambar 1.jpeg" 
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

          {/* VISI & MISI */}
          <div>
            <h2 className="font-bree text-3xl sm:text-4xl text-white tracking-wide mb-8">
              Visi - Misi
            </h2>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-800 shadow-2xl mb-8 border-t-4 border-yellow-400">
              <h3 className="font-bree text-2xl text-red-600 text-center mb-2 uppercase tracking-wider">
                Visi
              </h3>
              <p className="font-poppins text-sm sm:text-base text-slate-700 font-medium text-center leading-relaxed max-w-4xl mx-auto">
                Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.
              </p>
            </div>

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

      {/* ================= 3. SECTION KEGIATAN KAMI ================= */}
      <section id="kegiatan" className="bg-red-600 text-white pb-16 font-poppins">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <h2 className="font-bree text-3xl sm:text-4xl text-white tracking-wide mb-8">
            Kegiatan Kami
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {daftarKegiatan.map((item) => (
              <div 
                key={item.id} 
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-300/80 group h-80 cursor-pointer"
              >
                {/* Photo Background */}
                <img 
                  src={item.gambar} 
                  alt={item.judul} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 p-6 flex flex-col justify-end text-center transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:bg-black/75">
                  <h3 className="font-bree text-2xl text-white mb-2 tracking-wide transform group-hover:-translate-y-1 transition-transform duration-300">
                    {item.judul}
                  </h3>
                  
                  <p className="font-poppins text-xs text-slate-200 mb-5 leading-relaxed line-clamp-3">
                    {item.deskripsi}
                  </p>
                  
                  <a 
                    href={item.link}
                    className="inline-block px-5 py-2 rounded-xl bg-white/20 hover:bg-yellow-300 hover:text-slate-900 backdrop-blur-md text-white font-bold text-xs transition-all border border-white/40 shadow-lg mx-auto transform hover:scale-105 active:scale-95"
                  >
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full border-t border-dashed border-white/40 my-12" />

        </div>
      </section>

      {/* ================= 4. SECTION KONTAK KAMI & GOOGLE MAPS ================= */}
      <section id="kontak" className="bg-red-600 text-white font-poppins pt-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <h2 className="font-bree text-3xl sm:text-4xl text-white tracking-wide mb-8">
            Kontak Kami
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            
            {/* Info Alamat & Media Sosial (Kiri) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h3 className="font-bree text-2xl sm:text-3xl text-white mb-3">
                  Temukan Karang Taruna Unit 05
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
                  Kami berlokasikan di Jalan Nurul Amal 7 RT 14/RW 05, Cengkareng Timur. Jangan ragu untuk berkunjung langsung.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* Alamat */}
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 bg-red-700/80 border border-red-500/60 rounded-full shadow-lg text-white shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider mb-1">Alamat Organisasi</p>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md">
                      Jl. Nurul Amal 7 RT 14/RW 05, Cengkareng Timur, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-red-700/80 border border-red-500/60 rounded-full shadow-lg text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider mb-0.5">Email Resmi</p>
                    <a href="mailto:karangtaruna05cengtim@gmail.com" className="text-xs sm:text-sm text-white/90 hover:text-yellow-300 transition-colors font-medium">
                      karangtaruna05cengtim@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-red-700/80 border border-red-500/60 rounded-full shadow-lg text-white shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider mb-0.5">Media Sosial</p>
                    <a href="https://instagram.com/karangtaruna_05cengtim" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white/90 hover:text-yellow-300 transition-colors font-medium">
                      @karangtaruna_05cengtim
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Bingkai Tinggi Ala BEM FEB UI (Kanan) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl relative">
                <iframe
                  title="Google Maps Location Karang Taruna Unit 05"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.863339023194!2d106.7328903!3d-6.1490218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f826359b020b%3A0xc34b7f5ef9447432!2sJl.%20Nurul%20Amal%207%2C%20RT.7%2FRW.5%2C%20Cengkareng%20Tim.%2C%20Kecamatan%20Cengkareng%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011730!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

        {/* BANNER SPONSORSHIP FULL WIDTH SCREEN */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center my-12 overflow-hidden">
          <img 
            src="/kontakkami.jpeg" 
            alt="Sponsor Karang Taruna" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-60 contrast-105"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
            <h3 className="font-bree text-2xl sm:text-4xl md:text-5xl text-white leading-tight drop-shadow-lg">
              Ingin informasi lebih lanjut? atau ingin menjadi sponsor kami? hubungi kami!
            </h3>
            <div>
              <a
                href="mailto:karangtaruna05cengtim@gmail.com"
                className="inline-block px-8 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-sm sm:text-base shadow-2xl hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95"
              >
                Kontak Kami
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ================= FOOTER (CENTER ALIGNED ALA BEM FEB UI) ================= */}
      <footer className="bg-red-600 font-poppins pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Card Merah Gelap dengan Border Putih di Luar & Mentok ke Dasar */}
          <div className="bg-red-900 border-2 border-white border-b-0 rounded-t-3xl p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
              
              {/* Navigasi Kiri (Rata Tengah) */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="font-bree text-lg text-yellow-300 tracking-wide mb-1">
                  Akses Cepat
                </h4>
                <div className="flex flex-col space-y-1.5 text-xs sm:text-sm font-semibold text-white/90">
                  <a href="#beranda" className="hover:text-yellow-300 transition-colors">Beranda</a>
                  <a href="#tentang" className="hover:text-yellow-300 transition-colors">Tentang Kami</a>
                  <a href="#kegiatan" className="hover:text-yellow-300 transition-colors">Kegiatan Kami</a>
                  <a href="#kontak" className="hover:text-yellow-300 transition-colors">Kontak Kami</a>
                </div>
              </div>

              {/* Logo Tengah & Icon Sosmed Bulat */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <img 
                  src="/logo-karang-taruna.png" 
                  alt="Logo Karang Taruna RW 05" 
                  className="w-16 h-16 object-contain filter drop-shadow-xl"
                />
                
                {/* Deretan Icon Sosmed Bulat Ala BEM FEB UI */}
                <div className="flex items-center space-x-3 text-white">
                  <a 
                    href="https://instagram.com/karangtaruna_05cengtim" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-red-800 hover:bg-yellow-400 hover:text-red-900 border border-red-700 flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:karangtaruna05cengtim@gmail.com" 
                    className="w-9 h-9 rounded-full bg-red-800 hover:bg-yellow-400 hover:text-red-900 border border-red-700 flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                    aria-label="Email"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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

    </div>
  );
}