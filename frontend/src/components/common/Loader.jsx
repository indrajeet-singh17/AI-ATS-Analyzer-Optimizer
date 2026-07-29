import React, { useEffect, useState } from 'react';
import { Cpu, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  "Parsing document structure & extracting plain text...",
  "Analyzing resume sections against ATS compliance rules...",
  "Initiating OpenRouter AI model (DeepSeek / Qwen / Llama)...",
  "Evaluating keyword density & technical skill match...",
  "Generating actionable bullet rewrites & recommendations..."
];

export default function Loader({ isVisible }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl animate-fade-in px-4">
      <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 text-center space-y-6 relative overflow-hidden">
        {/* Glowing orb behind spinner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Spinner icon */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 animate-spin">
            <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
              <Cpu className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
            <span>Analyzing Resume</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </h3>
          <p className="text-sm text-blue-300/90 font-medium min-h-[40px] flex items-center justify-center">
            {steps[currentStep]}
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentStep ? 'w-6 bg-blue-400' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>

        <p className="text-xs text-gray-500 pt-2 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          No data is saved or stored on our servers.
        </p>
      </div>
    </div>
  );
}
