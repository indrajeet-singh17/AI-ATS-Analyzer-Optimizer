import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileSearch, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <FileSearch className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                ResumeAI <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">v2.0</span>
              </span>
              <span className="text-xs text-gray-400 hidden sm:inline">ATS Optimizer & Analyzer</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/upload"
              className={`text-sm font-medium px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                location.pathname === '/upload'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Analyze Resume</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
