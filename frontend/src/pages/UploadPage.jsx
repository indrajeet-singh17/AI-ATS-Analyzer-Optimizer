import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadBox from '../components/upload/UploadBox';
import JobDescriptionInput from '../components/upload/JobDescriptionInput';
import Loader from '../components/common/Loader';
import Toast from '../components/common/Toast';
import { analyzeResume } from '../services/api';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function UploadPage({ setAnalysisResult }) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [fileError, setFileError] = useState('');
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      setFileError('Please select a PDF or DOCX resume to analyze.');
      return;
    }

    setFileError('');
    setApiError('');
    setLoading(true);

    try {
      const response = await analyzeResume(file, jobDescription);

      if (response && response.success && response.data) {
        const fullData = {
          ...response.data,
          meta: response.meta || {}
        };

        if (setAnalysisResult) {
          setAnalysisResult(fullData);
        }

        navigate('/results', { state: { data: fullData } });
      } else {
        const msg = response?.error?.message || 'Failed to complete analysis. Please try again.';
        setApiError(msg);
      }
    } catch (err) {
      console.error('API Error during resume analysis:', err);
      let errorMsg = 'An unexpected error occurred. Please check your network connection and try again.';
      
      if (err.response && err.response.data && err.response.data.error) {
        errorMsg = err.response.data.error.message;
      } else if (err.message) {
        errorMsg = err.message;
      }

      setApiError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <Loader isVisible={loading} />
      
      <Toast
        message={apiError}
        onClose={() => setApiError('')}
        onRetry={handleAnalyze}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Analyze Your Resume
        </h1>
        <p className="text-sm sm:text-base text-gray-400">
          Upload your resume in PDF or DOCX format. Optionally paste the target job description to get tailored keyword & section scoring.
        </p>
      </div>

      {/* Two-Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
          <UploadBox
            file={file}
            onFileSelect={(selectedFile) => setFile(selectedFile)}
            onFileRemove={() => {
              setFile(null);
              setFileError('');
            }}
            error={fileError}
            setError={setFileError}
          />
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
          <JobDescriptionInput
            value={jobDescription}
            onChange={(val) => setJobDescription(val)}
            onClear={() => setJobDescription('')}
          />
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center space-y-4">
        <button
          type="button"
          onClick={handleAnalyze}
          disabled={!file || loading}
          className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-base shadow-xl transition-all flex items-center justify-center gap-3 mx-auto ${
            !file || loading
              ? 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
              : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]'
          }`}
        >
          <Sparkles className="w-5 h-5 text-blue-200" />
          <span>{loading ? 'Analyzing Resume...' : 'Analyze Resume Now'}</span>
          <ArrowRight className="w-5 h-5 opacity-80" />
        </button>

        <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Stateless execution: files are parsed in memory and discarded instantly.
        </p>
      </div>
    </div>
  );
}
