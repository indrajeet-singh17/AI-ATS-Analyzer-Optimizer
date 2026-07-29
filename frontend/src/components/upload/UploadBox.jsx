import React, { useRef, useState } from 'react';
import { UploadCloud, FileText, Trash2, CheckCircle, AlertCircle, FileCheck } from 'lucide-react';

export default function UploadBox({ file, onFileSelect, onFileRemove, error, setError }) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword'
  ];

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    setError('');
    const fileExt = selectedFile.name.split('.').pop().toLowerCase();
    
    // Type check
    if (!['pdf', 'docx', 'doc'].includes(fileExt)) {
      setError('Unsupported file type. Please upload a PDF or DOCX file.');
      return;
    }

    // Size check (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit. Please select a smaller file.');
      return;
    }

    onFileSelect(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-200">
        Resume Document <span className="text-rose-400">*</span>
      </label>

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`glass-card p-8 rounded-2xl border-2 border-dashed cursor-pointer text-center transition-all flex flex-col items-center justify-center space-y-4 ${
            isDragging
              ? 'border-blue-500 bg-blue-500/10 scale-[1.01]'
              : error
              ? 'border-rose-500/50 bg-rose-500/5'
              : 'border-white/15 hover:border-blue-400/50 hover:bg-white/5'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.doc"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <UploadCloud className="w-8 h-8 animate-pulse" />
          </div>
          <div>
            <p className="text-base font-semibold text-white">
              Drag & drop your resume here, or <span className="text-blue-400 underline">browse</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">Supports PDF & DOCX (Max 5MB)</p>
          </div>
        </div>
      ) : (
        <div className="glass-card p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between">
          <div className="flex items-center space-x-4 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div className="truncate">
              <h4 className="text-sm font-semibold text-white truncate">{file.name}</h4>
              <div className="flex items-center space-x-2 text-xs text-gray-400 mt-0.5">
                <span className="uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">
                  {file.name.split('.').pop()}
                </span>
                <span>•</span>
                <span>{formatFileSize(file.size)}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onFileRemove}
            className="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-colors ml-4 shrink-0"
            title="Remove File"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-center space-x-2 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
