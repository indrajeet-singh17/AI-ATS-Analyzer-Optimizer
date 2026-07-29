import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import UploadPage from './pages/UploadPage';
import ResultsPage from './pages/ResultsPage';

export default function App() {
  const [analysisResult, setAnalysisResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-gray-100 relative overflow-x-hidden">
      {/* Dynamic Background Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple/10 blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upload" element={<UploadPage setAnalysisResult={setAnalysisResult} />} />
            <Route path="/results" element={<ResultsPage analysisResult={analysisResult} />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}
