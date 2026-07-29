import React from 'react';
import { AlertCircle, X, RefreshCw } from 'lucide-react';

export default function Toast({ message, type = 'error', onClose, onRetry }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-slide-up">
      <div className="glass-card p-4 rounded-2xl border border-rose-500/30 bg-rose-950/80 backdrop-blur-xl shadow-2xl shadow-rose-950/50 flex items-start justify-between gap-3 text-rose-100">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Analysis Error</h4>
            <p className="text-xs text-rose-200 leading-relaxed">{message}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="mt-2 text-xs font-semibold px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Try Again</span>
              </button>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-rose-400 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
