import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition-colors text-sm font-medium ${
        active
          ? "bg-black text-white border-black"
          : "bg-white text-black border-gray-300 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
