import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-35 py-5 rounded-button font-space-grotesk text-h4 transition-colors duration-200 text-center inline-block";
  
  const variants = {
    primary: "bg-positivus-dark text-positivus-white hover:bg-positivus-green hover:text-positivus-dark",
    outline: "bg-transparent border border-positivus-dark text-positivus-dark hover:bg-positivus-dark hover:text-positivus-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
