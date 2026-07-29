import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Zap, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-blue-500/5">
            <Cpu className="w-3.5 h-3.5" />
            <span>OpenRouter Multi-Model AI Engine v2.0</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Optimize Your Resume for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ATS Scanners & Recruiter AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed">
            Upload your resume and get an instant AI-powered breakdown: ATS match score, missing keywords, section analysis, and copyable rewritten bullet points.
          </p>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> No signup required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-400" /> 100% Stateless & Private
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/upload"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>Upload & Analyze Resume</span>
              <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Format Support Badges */}
          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-400" /> Accepts PDF & DOCX
            </span>
            <span>•</span>
            <span>Max 5MB File Size</span>
          </div>
        </div>
      </div>
    </section>
  );
}
