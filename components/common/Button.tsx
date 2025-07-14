import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded text-white';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-600 hover:bg-gray-700',
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
