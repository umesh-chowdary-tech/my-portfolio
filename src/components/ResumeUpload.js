import React, { useState } from 'react';

function Section({ title, content }) {
  if (!content) return null;
  if (Array.isArray(content)) {
    return (
      <div className="mb-4">
        <h3 className="font-bold text-lg mt-4">{title}</h3>
        <ul className="list-disc ml-6">
          {content.map((item, i) => (
            <li key={i}>{typeof item === 'object' ? JSON.stringify(item) : item}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (typeof content === 'object') {
    return (
      <div className="mb-4">
        <h3 className="font-bold text-lg mt-4">{title}</h3>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(content, null, 2)}</pre>
      </div>
    );
  }
  return (
    <div className="mb-4">
      <h3 className="font-bold text-lg mt-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default function ResumeUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [parsed, setParsed] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
    setParsed(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file.');
      return;
    }
    setUploading(true);
    setMessage('');
    setParsed(null);
    try {
      const formData = new FormData();
      formData.append('resume', file);
      const res = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Resume uploaded and parsed successfully!');
        setParsed(data);
        if (onUpload) onUpload(data);
      } else {
        setMessage(data.error || 'Failed to parse resume.');
      }
    } catch (err) {
      setMessage('Error uploading resume.');
    }
    setUploading(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Your Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="block" />
        {file && <div className="text-sm text-gray-600">Selected: {file.name}</div>}
        <button type="submit" className="px-4 py-2 bg-[#FDB813] text-white rounded hover:bg-[#e0a800]" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload & Parse'}
        </button>
        {message && <div className="mt-2 text-sm text-red-600">{message}</div>}
      </form>
      {parsed && (
        <div className="mt-8 bg-white rounded shadow p-4">
          {Object.entries(parsed).map(([section, value]) => (
            <Section key={section} title={section.replace(/_/g, ' ')} content={value} />
          ))}
        </div>
      )}
    </div>
  );
} 