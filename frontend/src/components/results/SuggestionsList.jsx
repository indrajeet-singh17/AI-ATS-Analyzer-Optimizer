import React, { useState } from 'react';
import { Lightbulb, CheckSquare, Sparkles, AlertOctagon, HelpCircle, Layers } from 'lucide-react';

export default function SuggestionsList({
  grammar = [],
  formatting = [],
  atsIssues = [],
  sectionFeedback = {}
}) {
  const [activeTab, setActiveTab] = useState('section');

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-white font-bold text-lg">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <h3>Actionable Optimization Feedback</h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab('section')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'section' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Section Feedback
          </button>
          <button
            onClick={() => setActiveTab('grammar')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'grammar' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Grammar & Style ({grammar.length})
          </button>
          <button
            onClick={() => setActiveTab('formatting')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'formatting' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Formatting ({formatting.length})
          </button>
          <button
            onClick={() => setActiveTab('ats')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'ats' ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            ATS Blockers ({atsIssues.length})
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === 'section' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(sectionFeedback).map(([section, text]) => (
              text ? (
                <div key={section} className="glass-card p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    {section} Section
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                </div>
              ) : null
            ))}
          </div>
        )}

        {activeTab === 'grammar' && (
          <div className="space-y-3">
            {grammar.length > 0 ? (
              grammar.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-200 flex items-start space-x-3">
                  <CheckSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">No grammar issues detected.</p>
            )}
          </div>
        )}

        {activeTab === 'formatting' && (
          <div className="space-y-3">
            {formatting.length > 0 ? (
              formatting.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-200 flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">Formatting aligns with standard ATS guidelines.</p>
            )}
          </div>
        )}

        {activeTab === 'ats' && (
          <div className="space-y-3">
            {atsIssues.length > 0 ? (
              atsIssues.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-sm text-rose-200 flex items-start space-x-3">
                  <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-emerald-400 font-medium">No critical ATS parsing blockers found!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
