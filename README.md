# AI Resume Analyzer & ATS Optimizer (v2.0 - OpenRouter Edition)

A high-performance, stateless web application that analyzes PDF/DOCX resumes against target job descriptions using OpenRouter's multi-model AI fallback engine.

## 🚀 Key Features

- ⚡ **Zero Auth & Stateless**: Single-session tool (`Upload` → `Analyze` → `Results`). No database, no user accounts, zero data persistence.
- 🎯 **ATS Scoring & Section Breakdown**: Circular score gauge and animated horizontal progress bars across 6 key metrics (Skills, Projects, Experience, Education, Keywords, Formatting).
- 🔑 **Keyword Analysis**: Visual breakdown of matched, missing, and recommended keywords.
- 💡 **Actionable Suggestions**: Specific feedback categorized by **What**, **Why**, and **How**.
- ✏️ **AI Bullet Rewrites**: Side-by-side original vs. improved bullet cards with copy-to-clipboard functionality.
- 🛡️ **Resilient AI Engine**: Configurable sequential fallback across free & premium LLMs via OpenRouter and the official OpenAI SDK.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Axios, React Router DOM
- **Backend**: Node.js, Express, Multer (Memory Storage), `pdf-parse`, `mammoth`, OpenAI SDK

## 📦 Structure

```
ResumeOptimierAi/
├── frontend/     # Vite + React frontend app
└── backend/      # Express backend service
```
