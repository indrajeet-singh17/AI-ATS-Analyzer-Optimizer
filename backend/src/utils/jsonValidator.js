/**
 * Cleans markdown fences, parses JSON, and normalizes output schema.
 */
function clampScore(val, defaultVal = 70) {
  const num = parseInt(val, 10);
  if (isNaN(num)) return defaultVal;
  return Math.min(100, Math.max(0, num));
}

function ensureArray(val) {
  if (Array.isArray(val)) return val.map(item => String(item).trim()).filter(Boolean);
  if (typeof val === 'string' && val.trim()) return [val.trim()];
  return [];
}

function parseAndValidateAIResponse(rawText) {
  if (!rawText || typeof rawText !== 'string') {
    throw new Error('Empty response from AI model');
  }

  // Strip markdown code fences if present
  let cleaned = rawText.trim();
  cleaned = cleaned.replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();

  // Try parsing JSON
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    // Attempt extract substring between first { and last }
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      const extracted = cleaned.substring(firstBrace, lastBrace + 1);
      parsed = JSON.parse(extracted);
    } else {
      throw new Error(`JSON parse failure: ${err.message}`);
    }
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Parsed response is not an object');
  }

  // Normalize structure to strictly match API contract
  const normalized = {
    atsScore: clampScore(parsed.atsScore, 75),
    detectedRole: String(parsed.detectedRole || 'General Professional').trim(),
    resumeSummary: String(parsed.resumeSummary || '').trim(),
    strengths: ensureArray(parsed.strengths),
    weaknesses: ensureArray(parsed.weaknesses),
    missingKeywords: ensureArray(parsed.missingKeywords),
    matchedKeywords: ensureArray(parsed.matchedKeywords),
    recommendedKeywords: ensureArray(parsed.recommendedKeywords),
    skillsDetected: ensureArray(parsed.skillsDetected),
    suggestedSkills: ensureArray(parsed.suggestedSkills),
    sectionScores: {
      skills: clampScore(parsed.sectionScores?.skills, 70),
      projects: clampScore(parsed.sectionScores?.projects, 70),
      experience: clampScore(parsed.sectionScores?.experience, 70),
      education: clampScore(parsed.sectionScores?.education, 80),
      keywords: clampScore(parsed.sectionScores?.keywords, 65),
      formatting: clampScore(parsed.sectionScores?.formatting, 80)
    },
    experienceAnalysis: String(parsed.experienceAnalysis || '').trim(),
    educationAnalysis: String(parsed.educationAnalysis || '').trim(),
    grammarSuggestions: ensureArray(parsed.grammarSuggestions),
    formattingSuggestions: ensureArray(parsed.formattingSuggestions),
    atsIssues: ensureArray(parsed.atsIssues),
    sectionWiseFeedback: {
      summary: String(parsed.sectionWiseFeedback?.summary || '').trim(),
      experience: String(parsed.sectionWiseFeedback?.experience || '').trim(),
      education: String(parsed.sectionWiseFeedback?.education || '').trim(),
      skills: String(parsed.sectionWiseFeedback?.skills || '').trim(),
      projects: String(parsed.sectionWiseFeedback?.projects || '').trim()
    },
    improvedBulletPoints: Array.isArray(parsed.improvedBulletPoints)
      ? parsed.improvedBulletPoints.map(bp => ({
          original: String(bp?.original || '').trim(),
          improved: String(bp?.improved || '').trim()
        })).filter(bp => bp.original && bp.improved)
      : [],
    finalRecommendation: String(parsed.finalRecommendation || '').trim()
  };

  return normalized;
}

module.exports = {
  parseAndValidateAIResponse
};
