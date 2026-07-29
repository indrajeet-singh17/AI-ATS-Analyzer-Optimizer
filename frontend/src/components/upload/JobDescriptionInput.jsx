import React from 'react';
import { FileText, XCircle, Sparkles } from 'lucide-react';

export default function JobDescriptionInput({ value, onChange, onClear }) {
  const maxLength = 5000;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-gray-200">
          Target Job Description <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <span className="text-xs text-gray-500 font-mono">
          {value.length} / {maxLength}
        </span>
      </div>

      <div className="relative">
        <textarea
          rows={6}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste the full job description or key responsibilities here... (If left empty, AI will automatically detect your target role from the resume)"
          className="w-full glass-card glass-input p-4 rounded-2xl text-sm text-gray-200 placeholder-gray-500 resize-none transition-all"
        />

        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute top-3 right-3 text-gray-400 hover:text-rose-400 transition-colors p-1"
            title="Clear Text"
          >
            <XCircle className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex items-center space-x-2 text-xs text-blue-400/80 bg-blue-500/5 border border-blue-500/10 p-2.5 rounded-xl">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>Pasting a job description enables precise target keyword comparison & tailor-fit recommendations.</span>
      </div>
    </div>
  );
}
