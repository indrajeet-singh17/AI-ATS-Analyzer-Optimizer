import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import ScoreOverview from '../components/results/ScoreOverview';
import SectionScores from '../components/results/SectionScores';
import KeywordAnalysis from '../components/results/KeywordAnalysis';
import StrengthsWeaknesses from '../components/results/StrengthsWeaknesses';
import SuggestionsList from '../components/results/SuggestionsList';
import BulletPointsRewrite from '../components/results/BulletPointsRewrite';
import FinalRecommendation from '../components/results/FinalRecommendation';
import { ArrowLeft } from 'lucide-react';

export default function ResultsPage({ analysisResult }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract analysis data from route state or props
  const data = location.state?.data || analysisResult;

  // If no session analysis exists, redirect user back to /upload (PRD Section 18)
  if (!data) {
    return <Navigate to="/upload" replace />;
  }

  const handleReset = () => {
    navigate('/upload');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 animate-fade-in">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4 text-blue-400" />
          <span>Upload New Resume</span>
        </button>

        <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-mono">
          Analysis Complete
        </span>
      </div>

      {/* 1. Score Overview & Role */}
      <ScoreOverview
        score={data.atsScore}
        role={data.detectedRole}
        summary={data.resumeSummary}
      />

      {/* 2. Section Scores & Keyword Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <SectionScores scores={data.sectionScores} />
        </div>
        <div className="lg:col-span-6">
          <KeywordAnalysis
            matched={data.matchedKeywords}
            missing={data.missingKeywords}
            recommended={data.recommendedKeywords}
          />
        </div>
      </div>

      {/* 3. Strengths & Weaknesses */}
      <StrengthsWeaknesses
        strengths={data.strengths}
        weaknesses={data.weaknesses}
      />

      {/* 4. Actionable Suggestions */}
      <SuggestionsList
        grammar={data.grammarSuggestions}
        formatting={data.formattingSuggestions}
        atsIssues={data.atsIssues}
        sectionFeedback={data.sectionWiseFeedback}
      />

      {/* 5. Bullet Points Rewrite */}
      <BulletPointsRewrite bulletPoints={data.improvedBulletPoints} />

      {/* 6. Final Recommendation */}
      <FinalRecommendation
        recommendation={data.finalRecommendation}
        meta={data.meta}
        onReset={handleReset}
      />
    </div>
  );
}
