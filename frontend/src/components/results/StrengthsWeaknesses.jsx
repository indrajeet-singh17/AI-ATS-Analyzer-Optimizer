import React from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, AlertCircle } from 'lucide-react';

export default function StrengthsWeaknesses({ strengths = [], weaknesses = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Strengths */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 space-y-4">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-lg">
          <ThumbsUp className="w-5 h-5" />
          <h3>Resume Strengths</h3>
        </div>
        <ul className="space-y-3">
          {strengths.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-sm text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 space-y-4">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-lg">
          <ThumbsDown className="w-5 h-5" />
          <h3>Areas to Improve</h3>
        </div>
        <ul className="space-y-3">
          {weaknesses.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-sm text-gray-200">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
