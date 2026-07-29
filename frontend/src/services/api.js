import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
  timeout: 120000, // 2 minutes max timeout for analysis pipeline
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
