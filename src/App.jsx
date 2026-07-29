import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Halaman (Pages)
import HomePage from './pages/HomePage';
import TentangPage from './pages/TentangPage';
import KegiatanPage from './pages/KegiatanPage';
import KontakPage from './pages/KontakPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-red-600 font-poppins antialiased text-white selection:bg-yellow-400 selection:text-red-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/kegiatan" element={<KegiatanPage />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Routes>
      </div>
    </Router>
  );
}