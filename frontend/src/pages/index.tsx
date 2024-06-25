import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import PromptArea from "../components/PromptArea";
import ToggleButton from "../components/ToggleButton";
import { Vortex } from "../components/ui/vortex";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo.png"; // Ensure logo.png is placed correctly in the assets folder

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<{ message: string; attachments: File[]; isUserMessage: boolean }[]>([]);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addMessage = (message: string, attachments: File[], isUserMessage: boolean) => {
    setMessages((prevMessages) => [...prevMessages, { message, attachments, isUserMessage }]);
    if (!hasStartedChat) setHasStartedChat(true);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen w-screen text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        <div className="flex-1 flex w-full items-center justify-center text-center">
          <ToggleButton isOpen={isSidebarOpen} onClick={handleToggleSidebar} />

          {hasStartedChat ? (
            <div ref={chatContainerRef} className="flex-1 p-4 h-[80vh] overflow-y-scroll">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex mb-4 ${msg.isUserMessage ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex items-start">
                    {msg.isUserMessage ? (
                      <FaRegCircleUser className="mr-2 h-10 w-10" />
                    ) : (
                      <img src='./logo.png' alt="AbilitySync Logo" className="w-12 h-12 mr-2" />
                    )}
                    <div className="bg-gray-700 p-4 rounded-lg max-w-md text-left">
                      {msg.message && <p>{msg.message}</p>}
                      {msg.attachments.length > 0 && (
                        <div className="mt-2">
                          {msg.attachments.map((file, fileIndex) => (
                            <div key={fileIndex} className="flex items-center space-x-2">
                              {file.type.startsWith("image/") && (
                                <img src={URL.createObjectURL(file)} alt={file.name} className="w-16 h-16 object-cover" />
                              )}
                              {file.type.startsWith("audio/") && <p>{file.name}</p>}
                              {file.type.startsWith("video/") && (
                                <video src={URL.createObjectURL(file)} controls className="w-16 h-16 object-cover" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
              <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
              >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                  AbilitySync
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                  Aiming towards #SocialMediaforEveryone. I will do my best to assist you!
                </p>
              </Vortex>
            </div>
          )}
          <PromptArea isSidebarOpen={isSidebarOpen} addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
