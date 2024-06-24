import React from 'react';
import { PiLessThanDuotone, PiGreaterThanDuotone } from "react-icons/pi";

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2  p-2 rounded-full focus:outline-none shadow-lg transition-all duration-300"
      style={{ left: isOpen ? '16rem' : '0' }}
    >
      {isOpen ? <PiLessThanDuotone /> : <PiGreaterThanDuotone />}
    </button>
  );
};

export default ToggleButton;
