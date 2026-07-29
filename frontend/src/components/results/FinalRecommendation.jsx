import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, RefreshCw, Cpu } from 'lucide-react';

export default function FinalRecommendation({ recommendation = '', meta = {}, onReset }) {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 via-background to-purple-950/20 space-y-6">
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-blue-400 font-bold text-lg">
          <Award className="w-5 h-5" />
          <h3>Final ATS Recruiter Recommendation</h3>
        </div>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
          {recommendation || "Your resume has been analyzed. Review the keyword gaps and improved bullet points above to maximize your interview callback rate."}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        {/* Meta Debug Badge */}
        <div className="text-xs text-gray-400 flex items-center space-x-2">
          {meta?.modelUsed && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-gray-400">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>Model: {meta.modelUsed}</span>
            </span>
          )}
          {meta?.processingTimeMs && (
            <span className="font-mono text-gray-500">({meta.processingTimeMs}ms)</span>
          )}
        </div>

        {/* Reset Action Button */}
        <Link
          to="/upload"
          onClick={onReset}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/15"
        >
          <RefreshCw className="w-4 h-4 text-blue-400" />
          <span>Analyze Another Resume</span>
        </Link>
      </div>
    </div>
  );
}
