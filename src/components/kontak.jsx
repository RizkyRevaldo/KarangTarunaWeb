import React from 'react';

export default function Kontak() {
  return (
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

          {/* Google Maps Bingkai Tinggi  */}
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
  );
}