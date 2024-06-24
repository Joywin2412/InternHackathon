import React, { useState, useEffect } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import AttachMenu from "./AttachMenu";
import AttachmentPreview from "./AttachmentPreview";

interface PromptAreaProps {
  isSidebarOpen: boolean;
}

const PromptArea: React.FC<PromptAreaProps> = ({ isSidebarOpen }) => {
  const [isAttachMenuOpen, setIsAttachMenuOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (file: File) => {
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
    closeAttachMenu();
  };

  const handleVoiceSelect = (file: File) => {
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
    closeAttachMenu();
  };

  const handleVideoSelect = (file: File) => {
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
    closeAttachMenu();
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const toggleAttachMenu = () => {
    setIsAttachMenuOpen(!isAttachMenuOpen);
  };

  const closeAttachMenu = () => {
    setIsAttachMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".prompt-area") === null) {
        closeAttachMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 w-screen flex justify-center transition-all duration-300 ${
        isSidebarOpen ? "ml-0" : "ml-0"
      }`}
    >
      <div className="flex flex-col items-center bg-gray-800 rounded-lg px-4 py-2 shadow-lg relative w-full max-w-4xl prompt-area">
        <div className="flex flex-col w-full">
          {selectedFiles.map((file, index) => (
            <AttachmentPreview
              key={index}
              file={file}
              onRemove={() => handleRemoveFile(index)}
            />
          ))}
        </div>
        <div className="flex items-center w-full">
          <button className="mr-4" onClick={toggleAttachMenu}>
            <GrAttachment />
          </button>
          {isAttachMenuOpen && (
            <AttachMenu
              onFileSelect={handleFileSelect}
              onVoiceSelect={handleVoiceSelect}
              onVideoSelect={handleVideoSelect}
            />
          )}
          <input
            type="text"
            placeholder="How can AbilitySync help you today?"
            className="bg-gray-800 text-white placeholder-gray-500 focus:outline-none flex-grow px-2"
          />
          <button className="ml-4">
            <IoMdSend />
          </button>
          <button className="ml-2">
            <IoCheckmarkCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptArea;



