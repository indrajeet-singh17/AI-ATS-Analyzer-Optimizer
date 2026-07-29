import React from 'react';
import { Target, Award, Briefcase, FileText } from 'lucide-react';

export default function ScoreOverview({ score = 0, role = '', summary = '' }) {
  // SVG gauge calculations
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreBadge = (s) => {
    if (s >= 80) return { label: 'Excellent ATS Match', bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' };
    if (s >= 65) return { label: 'Good Match - Minor Tweaks', bg: 'bg-blue-500/10 border-blue-500/30 text-blue-400' };
    if (s >= 50) return { label: 'Needs Optimization', bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400' };
    return { label: 'Low Compatibility', bg: 'bg-rose-500/10 border-rose-500/30 text-rose-400' };
  };

  const scoreBadge = getScoreBadge(score);

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Score Gauge (4 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="text-white/10"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="text-accent-blue transition-all duration-1000 ease-out"
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="url(#scoreGradient)"
                fill="transparent"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Score Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-white tracking-tight">{score}</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">/ 100</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${scoreBadge.bg}`}>
              {scoreBadge.label}
            </span>
          </div>
        </div>

        {/* Right: Role & Summary (7 cols) */}
        <div className="lg:col-span-7 space-y-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Target Role Analysis</span>
            </div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span>{role || 'General Industry Role'}</span>
            </h2>
          </div>

          {summary && (
            <div className="glass-card p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-semibold text-gray-400 mb-1.5">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>Executive Resume Summary</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
