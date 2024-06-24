import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PromptArea from "../components/PromptArea";
import ToggleButton from "../components/ToggleButton";
import { Vortex } from "../components/ui/vortex";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
          {/* <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold">HOW CAN I HELP YOU?</h1>
            <p className="mt-2 text-lg">
              Ask me a question to get started. My answers may be limited as I
              continue learning about{" "}
              <a href="#" className="text-blue-500">
                Cisco
              </a>
              , but I will do my best to assist you!
            </p>
          </div> */}
          <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
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
          <PromptArea isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default App;
