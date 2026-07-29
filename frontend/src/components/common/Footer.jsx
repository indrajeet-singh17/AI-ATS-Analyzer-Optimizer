import React from 'react';
import { Github, Heart, ShieldCheck, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Zap className="w-4 h-4 text-accent-blue" />
          <span>Stateless AI Resume Analyzer & ATS Optimizer</span>
        </div>

        <div className="flex items-center space-x-6 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> No Data Stored
          </span>
          <span>•</span>
          <span>Powered by OpenRouter & OpenAI SDK</span>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
