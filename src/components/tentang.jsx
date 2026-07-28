import React from 'react';

export default function Tentang() {
  return (
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
              <li>Menjadi Komunitas Pemuda yang Progresif, Kreatif, dan Berdaya dalam Menghadapi Tantangan Zaman dengan semangat Gotong Royong dan Inovasi.</li>
              <li>Menjadikan teknologi sebagai alat perubahan positif melalui edukasi literasi digital, pemanfaatan media sosial, dan inovasi berbasis teknologi.</li>
              <li>Menguatkan solidaritas sosial dan kepedulian lingkungan dengan aksi sosial, kampanye peduli lingkungan, dan program pemberdayaan masyarakat.</li>
              <li>Mewujudkan ruang kreatif bagi anak muda melalui event seni budaya, olahraga, dan komunitas hobi.</li>
              <li>Meningkatkan partisipasi pemuda dalam pembangunan desa/kota dengan keterlibatan dalam program pemerintah dan inisiatif sosial berbasis komunitas.</li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-dashed border-white/40 my-12" />
      </div>
    </section>
  );
}