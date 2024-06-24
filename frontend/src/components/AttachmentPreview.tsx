import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';

interface AttachmentPreviewProps {
  file: File;
  onRemove: () => void;
}

const AttachmentPreview: React.FC<AttachmentPreviewProps> = ({ file, onRemove }) => {
  const fileUrl = URL.createObjectURL(file);
  const fileType = file.type.split('/')[0];

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg shadow-md relative">
      {fileType === 'image' && (
        <img src={fileUrl} alt={file.name} className="w-12 h-12 object-cover rounded" />
      )}
      {fileType === 'video' && (
        <video src={fileUrl} className="w-12 h-12 object-cover rounded" controls />
      )}
      <span className="text-gray-300">{file.name}</span>
      <button onClick={onRemove} className="text-gray-400 hover:text-red-500">
        <IoCloseCircle size={20} />
      </button>
    </div>
  );
};

export default AttachmentPreview;
