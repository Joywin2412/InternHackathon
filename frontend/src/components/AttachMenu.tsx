import React, { ChangeEvent } from 'react';

interface AttachMenuProps {
  onFileSelect: (file: File) => void;
  onVoiceSelect: (file: File) => void;
  onVideoSelect: (file: File) => void;
}

const AttachMenu: React.FC<AttachMenuProps> = ({ onFileSelect, onVoiceSelect, onVideoSelect }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileSelect(event.target.files[0]);
    }
  };

  const handleVoiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onVoiceSelect(event.target.files[0]);
    }
  };

  const handleVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onVideoSelect(event.target.files[0]);
    }
  };

  return (
    <div className="absolute left-0 bottom-14 bg-gray-800 border border-gray-700 rounded-md p-2 shadow-lg">
      <label className="w-full flex items-center text-gray-400 hover:text-white p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6M9 12V9a3 3 0 013-3h0a3 3 0 013 3v3M9 12v3a3 3 0 003 3h0a3 3 0 003-3v-3"
          />
        </svg>
        Voice
        <input type="file" accept="audio/*" className="hidden" onChange={handleVoiceChange} />
      </label>
      <label className="w-full flex items-center text-gray-400 hover:text-white p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12m-2.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0-6h5m-5 12h5"
          />
        </svg>
        Image
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
      <label className="w-full flex items-center text-gray-400 hover:text-white p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12m-2.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0-6h5m-5 12h5"
          />
        </svg>
        Video
        <input type="file" accept="video/*" className="hidden" onChange={handleVideoChange} />
      </label>
    </div>
  );
};

export default AttachMenu;
