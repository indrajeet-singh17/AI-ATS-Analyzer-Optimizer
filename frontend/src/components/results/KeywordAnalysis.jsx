import React from 'react';
import { CheckCircle2, AlertTriangle, PlusCircle, KeyRound } from 'lucide-react';

export default function KeywordAnalysis({ matched = [], missing = [], recommended = [] }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-purple-400" />
          <span>Keyword Match & Density Analysis</span>
        </h3>
        <span className="text-xs text-gray-400 font-mono">
          {matched.length} Matched • {missing.length} Missing
        </span>
      </div>

      <div className="space-y-6">
        {/* Matched Keywords */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Matched Keywords ({matched.length})</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {matched.length > 0 ? (
              matched.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No matched keywords detected.</p>
            )}
          </div>
        </div>

        {/* Missing Keywords */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Missing Keywords ({missing.length})</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {missing.length > 0 ? (
              missing.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-rose-500/10 border border-rose-500/20 text-rose-300 flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3 h-3 text-rose-400" />
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-xs text-emerald-400 font-medium">Great job! No major missing keywords detected.</p>
            )}
          </div>
        </div>

        {/* Recommended Keywords */}
        {recommended.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <PlusCircle className="w-4 h-4" />
              <span>Recommended Industry Terms ({recommended.length})</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {recommended.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-1.5"
                >
                  <PlusCircle className="w-3 h-3 text-cyan-400" />
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
