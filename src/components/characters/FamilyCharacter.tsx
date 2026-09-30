import React from 'react';
import type { FamilyMemberConfig } from '../../data/wedding';

interface FamilyCharacterProps {
  member: FamilyMemberConfig;
  height?: number;
  className?: string;
}

export const FamilyCharacter: React.FC<FamilyCharacterProps> = ({
  member,
  height = 160,
  className = '',
}) => {
  const isMale = member.relation.toLowerCase().includes('father') || member.relation.toLowerCase().includes('brother');

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg
        width={height * 0.75}
        height={height}
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="80" cy="210" rx="35" ry="6" fill="#4A2E2B" opacity="0.15" />

        {/* Outfit */}
        {isMale ? (
          /* Kurta / Sherwani */
          <g>
            <path d="M 45 75 Q 80 80 115 75 L 120 170 Q 80 180 40 170 Z" fill={member.clothingColor} stroke="#4A2E2B" strokeWidth="2.5" />
            <line x1="80" y1="80" x2="80" y2="170" stroke="#4A2E2B" strokeWidth="1.5" />
            {/* Turban */}
            <path d="M 55 40 Q 80 15 105 40 C 112 25 102 12 80 10 C 58 12 48 25 55 40 Z" fill={member.clothingColor} stroke="#4A2E2B" strokeWidth="2" />
          </g>
        ) : (
          /* Suit / Lehenga */
          <g>
            <path d="M 40 75 Q 80 80 120 75 L 135 185 Q 80 195 25 185 Z" fill={member.clothingColor} stroke="#4A2E2B" strokeWidth="2.5" />
            {/* Chunni */}
            <path d="M 42 75 C 30 110 30 150 45 185" stroke="#E9B44C" strokeWidth="4" />
          </g>
        )}

        {/* Head & Face */}
        <ellipse cx="80" cy="46" rx="20" ry="22" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="2.5" />

        {/* Eyes & Smile */}
        <circle cx="72" cy="42" r="3" fill="#4A2E2B" />
        <circle cx="88" cy="42" r="3" fill="#4A2E2B" />
        <circle cx="73" cy="41" r="1" fill="#FFFFFF" />
        <circle cx="89" cy="41" r="1" fill="#FFFFFF" />
        <path d="M 73 54 Q 80 58 87 54" stroke="#4A2E2B" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Cheeks */}
        <circle cx="68" cy="48" r="4" fill="#F4ACB7" opacity="0.6" />
        <circle cx="92" cy="48" r="4" fill="#F4ACB7" opacity="0.6" />

        {/* Hair / Beard for Male */}
        {isMale && (
          <path d="M 62 46 C 60 62 70 68 80 68 C 90 68 100 62 98 46 C 92 56 68 56 62 46 Z" fill="#2C1A1D" />
        )}
      </svg>

      <span className="font-illustrated text-xs text-[#4A2E2B] font-semibold mt-1 text-center">
        {member.name}
      </span>
      <span className="font-handwriting text-xs text-[#9E2A2B] font-semibold text-center">
        {member.relation}
      </span>
    </div>
  );
};
