import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function TentangPage() {
  // Data Struktur Organisasi Karang Taruna dengan Foto
  const strukturOrganisasi = [
    {
      divisi: "Pembina",
      anggota: [
        { 
          nama: "Om Wawan", 
          jabatan: "Pembina",
          foto: "/public/image.png" // Tambahkan path foto
        }
      ]
    },
    {
      divisi: "Pengurus Inti",
      anggota: [
        { 
          nama: "Rendy Rasya Hermawan", 
          jabatan: "Ketua",
          foto: "/public/image.png"
        },
        { 
          nama: "Airin Nurhaliza", 
          jabatan: "Sekretaris",
          foto: "/public/image.png"
        },
        { 
          nama: "Chelsea Adistiya Rifai", 
          jabatan: "Bendahara",
          foto: "/public/image.png"
        }
      ]
    },
    {
      divisi: "Divisi PDD",
      anggota: [
        { 
          nama: "Rizky Revaldo", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Nahla Wirdasari", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Akmal Syahroni", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Yusuf Prihantoro", 
          jabatan: "Staff",
          foto: "/public/image.png"
        }
      ]
    },
    {
      divisi: "Divisi Humas",
      anggota: [
        { 
          nama: "Dava Kurniansyah", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Desti Yana", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Nifah Nur Aini", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Juan Nabil Pratama", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Meita Dewi", 
          jabatan: "Staff",
          foto: "/public/image.png"
        }
      ]
    },
    {
      divisi: "Divisi Olahraga",
      anggota: [
        { 
          nama: "Rafi Alfarizy", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Ridho Syafiq Kusuma", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Rangga Rizkiyansyah P", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Daffa Almer Dzaky", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Abdullah Firdaus Syagalih", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Rizal", 
          jabatan: "Staff",
          foto: "/public/image.png"
        }
      ]
    },
    {
      divisi: "Divisi Agama",
      anggota: [
        { 
          nama: "Fitriyanti", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Syafiqah Nirmala", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Junita Eka Rizky Yani", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Rafi Alfarizy", 
          jabatan: "Staff",
          foto: "/public/image.png"
        },
        { 
          nama: "Verlita Avrilya P", 
          jabatan: "Staff",
          foto: "/public/image.png"
        }
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

          {/* ================= SECTION: ANGGOTA KAMI (VERSION 2 - MODERN) ================= */}
          <div>
            <h2 className="font-bree text-2xl sm:text-3xl text-center text-white tracking-wide mb-12">
              Anggota Kami
            </h2>

            <div className="space-y-16">
              {strukturOrganisasi.map((item, index) => (
                <div key={index} className="w-full">
                  
                  {/* Judul Divisi dengan Garis Dekoratif */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/30" />
                    <h3 className="font-bree text-2xl sm:text-3xl text-white tracking-wide whitespace-nowrap">
                      {item.divisi}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/30" />
                  </div>

                  {/* Grid Kartu Anggota dengan Foto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {item.anggota.map((anggota, idx) => (
                      <div 
                        key={idx} 
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
                      >
                        {/* Foto dengan Aspect Ratio 4:3 */}
                        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-red-400 to-red-600 overflow-hidden">
                          <img 
                            src={anggota.foto || "/default-avatar.png"} 
                            alt={anggota.nama} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "/default-avatar.png"; // Fallback jika foto tidak ada
                            }}
                          />
                          
                          {/* Badge Jabatan di Pojok Kiri Bawah */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                              {anggota.jabatan}
                            </span>
                          </div>
                        </div>
                        
                        {/* Info Anggota */}
                        <div className="p-4 text-center">
                          <h4 className="font-bree text-slate-800 text-base sm:text-lg leading-tight">
                            {anggota.nama}
                          </h4>
                          <p className="font-poppins text-xs sm:text-sm text-slate-500 mt-1">
                            {anggota.jabatan}
                          </p>
                        </div>
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