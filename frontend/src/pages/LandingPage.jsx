import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}
