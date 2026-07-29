import React from 'react';
import { Code, FolderGit2, Briefcase, GraduationCap, KeyRound, LayoutTemplate } from 'lucide-react';

const categoryConfig = [
  { key: 'skills', label: 'Skills & Tech Stack', icon: Code, color: 'from-blue-500 to-indigo-500' },
  { key: 'projects', label: 'Project Impact', icon: FolderGit2, color: 'from-purple-500 to-pink-500' },
  { key: 'experience', label: 'Work Experience', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
  { key: 'education', label: 'Education & Certs', icon: GraduationCap, color: 'from-cyan-500 to-blue-500' },
  { key: 'keywords', label: 'Keyword Density', icon: KeyRound, color: 'from-amber-500 to-orange-500' },
  { key: 'formatting', label: 'ATS Format Compliance', icon: LayoutTemplate, color: 'from-rose-500 to-red-500' }
];

export default function SectionScores({ scores = {} }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">Category Score Breakdown</h3>
        <span className="text-xs text-gray-400 font-mono">Normalized ATS Scoring</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryConfig.map((item) => {
          const val = scores[item.key] ?? 70;
          const Icon = item.icon;

          return (
            <div key={item.key} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-gray-200 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-blue-400" />
                  {item.label}
                </span>
                <span className="font-mono font-bold text-white bg-white/5 px-2 py-0.5 rounded border border-white/10 text-xs">
                  {val}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${val}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
