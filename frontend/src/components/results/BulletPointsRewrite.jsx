import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

export default function BulletPointsRewrite({ bulletPoints = [] }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  if (!bulletPoints || bulletPoints.length === 0) return null;

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span>AI-Rewritten Experience Bullet Points</span>
        </h3>
        <span className="text-xs text-gray-400 font-mono">Metric-Driven & Action Verb Focused</span>
      </div>

      <div className="space-y-4">
        {bulletPoints.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-blue-500/30 transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Original */}
              <div className="space-y-1.5 p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Original Bullet</span>
                <p className="text-sm text-gray-300 leading-relaxed font-mono text-xs">{item.original}</p>
              </div>

              {/* Improved */}
              <div className="space-y-1.5 p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    AI-Optimized Bullet
                  </span>
                  <button
                    onClick={() => handleCopy(item.improved, idx)}
                    className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-white font-medium leading-relaxed pr-12">{item.improved}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
