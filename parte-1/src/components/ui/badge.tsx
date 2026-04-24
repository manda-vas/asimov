import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'white';
  className?: string;
}

export const Badge = ({ children, variant = 'green', className = '' }: BadgeProps) => {
  const variantStyles = {
    green: 'bg-positivus-green',
    white: 'bg-positivus-white',
  };

  return (
    <span className={`inline-block px-7 rounded-badge font-space-grotesk font-medium text-positivus-black ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
