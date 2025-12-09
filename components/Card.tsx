import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', color = 'bg-white', title }) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute top-2 left-2 w-full h-full bg-black rounded-xl z-0 transition-transform duration-200`}></div>
      <div className={`relative z-10 ${color} border-4 border-black rounded-xl p-6 h-full hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-200`}>
        {title && (
          <h3 className="text-xl font-black mb-4 border-b-4 border-black pb-2 uppercase tracking-wider">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};