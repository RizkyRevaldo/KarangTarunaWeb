import React from 'react';

export default function Kegiatan() {
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
              <img 
                src={item.gambar} 
                alt={item.judul} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

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
  );
}