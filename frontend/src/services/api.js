import axios from 'axios';

// Normalize VITE_API_URL: strip trailing slashes if user included one
const rawApiUrl = import.meta.env.VITE_API_URL || '';
const API_BASE_URL = rawApiUrl.endsWith('/') ? rawApiUrl.slice(0, -1) : rawApiUrl;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
  timeout: 120000, // 2 minutes timeout to handle Render free-tier cold starts (sleeping servers take ~30s to boot)
});

/**
 * Analyzes resume file and optional job description
 * @param {File} resumeFile 
 * @param {string} jobDescription 
 * @returns {Promise<Object>} API Response data
 */
export const analyzeResume = async (resumeFile, jobDescription = '') => {
  const formData = new FormData();
  formData.append('resume', resumeFile);
  if (jobDescription && jobDescription.trim()) {
    formData.append('jobDescription', jobDescription.trim());
  }

  const response = await apiClient.post('/api/resume/analyze', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export default apiClient;
