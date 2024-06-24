import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

interface ChatMessageProps {
  message: string;
  attachments: File[];
  isUserMessage: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, attachments, isUserMessage }) => {
  return (
    <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUserMessage && <img src='/logo.png' alt="AbilitySync Logo" className="w-8 h-8 mr-2" />}
      <div className="flex flex-col max-w-lg p-4 bg-gray-800 rounded-lg shadow-md">
        {message && <p className="text-white mb-2">{message}</p>}
        {attachments.map((file, index) => (
          <div key={index} className="mt-2">
            {file.type.startsWith('image/') && (
              <img src={URL.createObjectURL(file)} alt={file.name} className="w-32 h-32 object-cover rounded" />
            )}
            {file.type.startsWith('video/') && (
              <video src={URL.createObjectURL(file)} className="w-32 h-32 object-cover rounded" controls />
            )}
            {file.type.startsWith('audio/') && (
              <p className="text-gray-400">{file.name}</p>
            )}
            {!file.type.startsWith('image/') && !file.type.startsWith('video/') && !file.type.startsWith('audio/') && (
              <p className="text-gray-400">{file.name}</p>
            )}
          </div>
        ))}
      </div>
      {isUserMessage && <FaRegCircleUser className='w-8 h-8 ml-2 text-gray-400' />}
    </div>
  );
};

export default ChatMessage;
