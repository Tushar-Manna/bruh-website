"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button 
      className={`h-[40px] px-4 bg-primary hover:bg-primaryDark hover:drop-shadow-xl text-white transition-colors duration-200 rounded-full flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}