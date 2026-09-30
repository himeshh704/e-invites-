import React from 'react';

interface DholPlayerProps {
  className?: string;
  height?: number;
}

export const DholPlayer: React.FC<DholPlayerProps> = ({ className = '', height = 180 }) => {
  return (
    <svg
      width={height * 0.8}
      height={height}
      viewBox="0 0 180 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <ellipse cx="90" cy="230" rx="40" ry="7" fill="#4A2E2B" opacity="0.15" />

      {/* Kurta & Turban */}
      <path d="M 50 80 Q 90 85 130 80 L 135 180 Q 90 190 45 180 Z" fill="#E9B44C" stroke="#4A2E2B" strokeWidth="3" />
      <ellipse cx="90" cy="50" rx="20" ry="22" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="3" />
      <path d="M 65 42 Q 90 15 115 42 C 122 25 110 10 90 8 C 70 10 58 25 65 42 Z" fill="#E76F51" stroke="#4A2E2B" strokeWidth="2.5" />

      {/* Face & Moustache */}
      <ellipse cx="80" cy="46" rx="3" ry="3.5" fill="#4A2E2B" />
      <ellipse cx="100" cy="46" rx="3" ry="3.5" fill="#4A2E2B" />
      <path d="M 78 56 Q 90 62 102 56 Z" fill="#2C1A1D" />

      {/* Dhol Drum */}
      <g className="animate-pulse">
        <ellipse cx="90" cy="135" rx="45" ry="28" fill="#800E13" stroke="#4A2E2B" strokeWidth="3" />
        <ellipse cx="50" cy="135" rx="8" ry="28" fill="#E9B44C" stroke="#4A2E2B" strokeWidth="2" />
        <ellipse cx="130" cy="135" rx="8" ry="28" fill="#E9B44C" stroke="#4A2E2B" strokeWidth="2" />
        <line x1="58" y1="115" x2="122" y2="155" stroke="#E9B44C" strokeWidth="2" />
        <line x1="58" y1="155" x2="122" y2="115" stroke="#E9B44C" strokeWidth="2" />
      </g>

      {/* Dhol Sticks (Dagga & Tilli) */}
      <line x1="40" y1="120" x2="25" y2="90" stroke="#4A2E2B" strokeWidth="4" strokeLinecap="round" />
      <line x1="140" y1="120" x2="155" y2="90" stroke="#4A2E2B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};
