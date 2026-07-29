import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function TentangPage() {
  // Data Struktur Organisasi Karang Taruna
  const strukturOrganisasi = [
    {
      divisi: "Pembina",
      anggota: [
        { nama: "Om Wawan", jabatan: "Pembina" }
      ]
    },
    {
      divisi: "Pengurus Inti",
      anggota: [
        { nama: "Rendy Rasya Hermawan", jabatan: "Ketua" },
        { nama: "Airin Nurhaliza", jabatan: "Sekretaris" },
        { nama: "Chelsea Adistiya Rifai", jabatan: "Bendahara" }
      ]
    },
    {
      divisi: "Divisi PDD",
      anggota: [
        { nama: "Rizky Revaldo", jabatan: "Staff" },
        { nama: "Nahla Wirdasari", jabatan: "Staff" },
        { nama: "Akmal Syahroni", jabatan: "Staff" },
        { nama: "Yusuf Prihantoro", jabatan: "Staff" }
      ]
    },
    {
      divisi: "Divisi Humas",
      anggota: [
        { nama: "Dava Kurniansyah", jabatan: "Staff" },
        { nama: "Desti yana", jabatan: "Staff" },
        { nama: "Nifah nur aini", jabatan: "Staff" },
        { nama: "Juan Nabil Pratama", jabatan: "Staff" },
        { nama: "Meita Dewi", jabatan: "Staff" }
      ]
    },
    {
      divisi: "Divisi Olahraga",
      anggota: [
        { nama: "Rafi Alfarizy", jabatan: "Staff" },
        { nama: "Ridho syafiq kusuma", jabatan: "Staff" },
        { nama: "Rangga Rizkiyansyah p", jabatan: "Staff" },
        { nama: "Daffa Almer Dzaky", jabatan: "Staff" },
        { nama: "Abdullah Firdaus Syagalih", jabatan: "Staff" },
        { nama: "Rizal", jabatan: "Staff" }
      ]
    },
    {
      divisi: "Divisi Agama",
      anggota: [
        { nama: "Fitriyanti", jabatan: "Staff" },
        { nama: "Syafiqah nirmala", jabatan: "Staff" },
        { nama: "Junita eka rizky yani", jabatan: "Staff" },
        { nama: "Rafi Alfarizy", jabatan: "Staff" },
        { nama: "Verlita Avrilya. P", jabatan: "Staff" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-red-600 font-poppins text-white">
      <Navbar />

      <main className="flex-grow">
        
        {/* ================= BANNER HERO TENTANG KAMI ================= */}
        <div className="relative min-h-[70vh] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-bg.jpeg"
              alt="Karang Taruna Unit 05 Cengkareng Timur"
              className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/20 to-red-600" />
          </div>

          <div className="relative z-10 flex-grow flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl mx-auto">
              <h1 className="font-bree text-3xl sm:text-5xl text-white mb-3 sm:mb-4 drop-shadow-xl tracking-wide">
                Tentang Kami
              </h1>
              <p className="font-poppins text-sm sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-md">
                Kami ada untuk menjadi wadah pengembangan potensi dan pemuda RW 05 Cengkareng Timur
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full h-12 bg-gradient-to-b from-transparent to-red-600" />
        </div>

        {/* ================= KONTEN TENTANG KAMI ================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-20">
          
          {/* SECTION: KENAPA KARANG TARUNA UNIT 05? */}
          <div>
            <h2 className="font-bree text-2xl sm:text-3xl text-center text-white tracking-wide mb-10">
              Kenapa Karang Taruna Unit 05 ?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-2xl p-1 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500">
                  <img 
                    src="/gambar 1.jpeg" 
                    alt="Kegiatan Karang Taruna" 
                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="font-poppins text-sm sm:text-base text-white/95 leading-relaxed mb-4">
                  Karang Taruna RW 05 Cengkareng Timur bukan sekedar organisasi, melainkan rumah bagi pemuda untuk berkarya.
                </p>
                <p className="font-poppins text-sm sm:text-base text-white/95 leading-relaxed mb-8">
                  Kami berfokus pada pengembangan potensi pemuda, kegiatan sosial, dan menjaga kerukunan antar warga.
                </p>

                <div className="grid grid-cols-3 gap-3 font-poppins">
                  <div className="bg-red-500/80 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                    <div className="text-xl sm:text-2xl font-black text-white">20+</div>
                    <div className="text-xs sm:text-sm text-white/90 font-medium">Anggota</div>
                  </div>
                  <div className="bg-red-500/80 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                    <div className="text-sm sm:text-lg font-black text-white mt-0.5 sm:mt-1">2025 - 2027</div>
                    <div className="text-xs sm:text-sm text-white/90 font-medium">Periode</div>
                  </div>
                  <div className="bg-red-500/80 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 text-center shadow-lg">
                    <div className="text-xl sm:text-2xl font-black text-white">6+</div>
                    <div className="text-xs sm:text-sm text-white/90 font-medium">Kegiatan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-white/30" />

          {/* SECTION: VISI - MISI */}
          <div>
            <h2 className="font-bree text-2xl sm:text-3xl text-white tracking-wide mb-8">
              Visi - Misi
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Card Visi */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl">
                <h3 className="font-bree text-2xl text-red-600 text-center mb-3 tracking-wider">
                  Visi
                </h3>
                <p className="font-poppins text-sm sm:text-base text-slate-700 font-medium text-center leading-relaxed">
                  Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.
                </p>
              </div>

              {/* Card Misi */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl">
                <h3 className="font-bree text-2xl text-red-600 text-center mb-5 tracking-wider">
                  Misi
                </h3>
                <ul className="font-poppins space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc pl-5 leading-relaxed">
                  <li>Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.</li>
                  <li>Menjadikan teknologi sebagai alat perubahan positif melalui edukasi literasi digital, pemanfaatan media sosial, dan inovasi berbasis teknologi.</li>
                  <li>Menguatkan solidaritas sosial dan kepedulian lingkungan dengan aksi sosial, kampanye peduli lingkungan, dan program pemberdayaan masyarakat.</li>
                  <li>Mewujudkan ruang kreatif bagi anak muda melalui event seni budaya, olahraga, dan komunitas hobi.</li>
                  <li>Meningkatkan partisipasi pemuda dalam pembangunan desa/kota dengan keterlibatan dalam program pemerintah dan inisiatif sosial berbasis komunitas.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-white/30" />

          {/* SECTION: ANGGOTA KAMI (STRUKTUR KEPENGURUSAN) */}
          <div>
            <h2 className="font-bree text-2xl sm:text-3xl text-center text-white tracking-wide mb-12">
              Anggota Kami
            </h2>

            <div className="space-y-12">
              {strukturOrganisasi.map((item, index) => (
                <div key={index} className="w-full">
                  
                  {/* Judul Divisi dengan Bullet Putih */}
                  <div className="flex items-center space-x-3 mb-6 pl-2 sm:pl-4">
                    <span className="w-2 h-2 rounded-full bg-white shadow-sm"></span>
                    <h3 className="font-bree text-xl sm:text-2xl text-white tracking-wide">
                      {item.divisi}
                    </h3>
                  </div>

                  {/* Grid Kartu Anggota Rata Tengah */}
                  <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                    {item.anggota.map((anggota, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white rounded-[1.5rem] p-6 w-[260px] flex flex-col items-center justify-center text-center shadow-xl border-b-4 border-slate-200 transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
                      >
                        {/* Logo / Foto Anggota */}
                        <div className="w-20 h-20 mb-4 bg-slate-100 rounded-full p-2 shadow-inner flex items-center justify-center">
                          <img 
                            src="/logo-karang-taruna.png" 
                            alt={anggota.nama} 
                            className="w-full h-full object-contain filter drop-shadow-sm"
                          />
                        </div>
                        
                        {/* Nama */}
                        <h4 className="font-bree text-slate-800 text-lg leading-tight mb-1">
                          {anggota.nama}
                        </h4>
                        
                        {/* Jabatan */}
                        <p className="font-poppins text-xs sm:text-sm text-slate-500 font-medium">
                          {anggota.jabatan}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}