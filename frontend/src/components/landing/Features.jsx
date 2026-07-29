import React from 'react';
import { Gauge, KeyRound, Edit3, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    color: 'text-accent-blue',
    bg: 'bg-blue-500/10 border-blue-500/20',
    title: 'ATS Compatibility Score',
    description: 'Get an overall score out of 100 with granular section scores for Skills, Experience, Education, Formatting, and Keywords.'
  },
  {
    icon: KeyRound,
    color: 'text-accent-purple',
    bg: 'bg-purple-500/10 border-purple-500/20',
    title: 'Intelligent Keyword Match',
    description: 'Identify essential industry keywords matched in your resume and reveal missing high-impact terms needed to pass recruiter filters.'
  },
  {
    icon: Edit3,
    color: 'text-accent-emerald',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    title: 'AI Bullet Point Rewriter',
    description: 'Transform weak task descriptions into high-impact, metric-driven accomplishments with one-click copy functionality.'
  },
  {
    icon: ShieldAlert,
    color: 'text-accent-cyan',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Resilient Multi-Model AI',
    description: 'Powered by an OpenRouter priority fallback chain (DeepSeek, Qwen, Llama, Gemma) ensuring 99.9% uptime and instant answers.'
  }
];

export default function Features() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Engineered for Job Seekers & Tech Talent
          </h2>
          <p className="mt-3 text-gray-400">
            Everything you need to optimize your resume and beat automated screening systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg} mb-5`}>
                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
