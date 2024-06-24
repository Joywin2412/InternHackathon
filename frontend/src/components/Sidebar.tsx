import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`p-4 h-full transition-all duration-300 ${isOpen ? 'w-64 bg-gray-800' : 'w-0 overflow-hidden'}`}>
      {isOpen && (
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-20 w-20" />
            <span className="text-xl font-semibold">AbilitySync</span>
          </div>
          <button className="w-full py-2 mb-6 bg-blue-600 rounded-md">New Chat +</button>
          <div>
            <div className="mb-4">
              <button className="w-full text-left">Today</button>
            </div>
            <div className="mb-4">
              <button className="w-full text-left">Previous 7 days</button>
            </div>
            <div>
              <button className="w-full text-left">Previous 30 days</button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <div className="flex items-center">
              {/* <img src="/user-icon.png" alt="User Icon" className="h-6 mr-2" /> */}
              <FaRegCircleUser className='mr-2'/>
              <span>User 1</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
