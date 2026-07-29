export const mockAnalysisData = {
  atsScore: 84,
  detectedRole: "Senior Frontend Engineer",
  resumeSummary: "Strong technical candidate with solid experience in modern JavaScript frameworks, state management, and responsive web development. Demonstrates clear project achievements but lacks quantified business metrics in certain bullet points.",
  strengths: [
    "Proficient in modern frontend tech stack (React, TypeScript, Next.js, Tailwind CSS)",
    "Clean section structure with standard professional headings",
    "Consistent formatting across work experience and project history",
    "Strong evidence of component architecture and state management experience"
  ],
  weaknesses: [
    "Several bullet points lack quantifiable impact metrics (e.g., %, $, user growth)",
    "Missing key cloud & CI/CD deployment keywords (AWS, Docker, GitHub Actions)",
    "Summary section is slightly generic and lacks target role focus",
    "No explicit mention of testing frameworks (Jest, Vitest, Cypress)"
  ],
  missingKeywords: [
    "TypeScript", "GraphQL", "Jest", "CI/CD", "AWS", "Web Performance", "Accessibility (a11y)", "State Management (Redux/Zustand)"
  ],
  matchedKeywords: [
    "React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "Git", "Webpack", "Responsive Design"
  ],
  recommendedKeywords: [
    "Next.js", "System Design", "Micro-frontends", "Lighthouse Optimization", "End-to-End Testing"
  ],
  skillsDetected: [
    "React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs", "Git", "Vite"
  ],
  suggestedSkills: [
    "TypeScript", "Jest/RTL", "Next.js", "Docker", "CI/CD Pipelines"
  ],
  sectionScores: {
    skills: 88,
    projects: 80,
    experience: 78,
    education: 92,
    keywords: 72,
    formatting: 90
  },
  experienceAnalysis: "Work history clearly shows career progression. Adding metrics like 'improved page speed by 40%' will significantly boost ATS keyword density and recruiter engagement.",
  educationAnalysis: "Degree and graduation timeline are well-formatted and parse cleanly for ATS scanners.",
  grammarSuggestions: [
    "Change passive phrase 'Was responsible for building components' to active 'Engineered modular React components'.",
    "Fix consistent verb tense: use past tense verbs for completed roles."
  ],
  formattingSuggestions: [
    "Ensure margins are uniform (0.5 to 1 inch).",
    "Use bullet points instead of long paragraph blocks in project descriptions."
  ],
  atsIssues: [
    "Avoid using table elements for multi-column layouts as legacy ATS parsers may misorder lines.",
    "Remove graphics/icons embedded within contact header text."
  ],
  sectionWiseFeedback: {
    summary: "Refine summary to explicitly mention 3+ years of React expertise and target engineering leadership roles.",
    experience: "Transform task descriptions into impact metrics using the Google XYZ formula (Accomplished [X] as measured by [Y], by doing [Z]).",
    education: "Looks great. Clean alignment.",
    skills: "Group skills into categorized buckets (Languages, Frameworks, Tools) for faster parsing.",
    projects: "Include live demo links or repository URLs where applicable."
  },
  improvedBulletPoints: [
    {
      original: "Built frontend application using React and Tailwind CSS for client.",
      improved: "Engineered responsive client portal using React and Tailwind CSS, reducing initial page load time by 35% and increasing user retention by 20%."
    },
    {
      original: "Responsible for fixing bugs and improving website performance.",
      improved: "Diagnosed and resolved 50+ critical frontend bugs, elevating application reliability score to 99.4% across 10,000+ monthly active users."
    },
    {
      original: "Worked with backend team to integrate REST APIs into the dashboard.",
      improved: "Collaborated with backend engineers to integrate 15+ REST API endpoints into React dashboard with custom caching, decreasing API latency by 45%."
    }
  ],
  finalRecommendation: "Your resume is in the top 20% for ATS readability! To push your score above 90, incorporate missing keywords (TypeScript, Jest, CI/CD) and rewrite experience bullets with measurable metrics."
};
