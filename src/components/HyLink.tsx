"use client";

interface HyLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function HyLink({ children, href = "#", onClick, className = "" }: HyLinkProps) {
  return (
    <div 
      className={`cursor-pointer hover:text-[#22BABB] transition-colors ${className}`}
      onClick={onClick}
    >
      <a href={href}>
        {children}
      </a>
    </div>
  );
}