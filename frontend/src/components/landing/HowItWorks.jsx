import React from 'react';
import { UploadCloud, FileCode, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UploadCloud,
    title: 'Upload Your Resume',
    description: 'Drag and drop your PDF or DOCX resume. We parse your file instantly in memory — zero disk storage.'
  },
  {
    step: '02',
    icon: FileCode,
    title: 'Paste Job Description (Optional)',
    description: 'Add a target job description for customized keyword matching, or let our AI infer your optimal role automatically.'
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Get Instant ATS Breakdown',
    description: 'Review your score, missing keywords, section feedback, and copy AI-optimized bullet points directly to your resume.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">How It Works</h2>
          <p className="mt-3 text-gray-400">Three simple steps to transform your application strength</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                <div className="glass-card p-8 rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
