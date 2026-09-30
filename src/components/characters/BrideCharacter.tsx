import React from 'react';

interface BrideCharacterProps {
  pose?: 'standing' | 'waving' | 'walking' | 'dancing' | 'sitting';
  className?: string;
  height?: number;
}

export const BrideCharacter: React.FC<BrideCharacterProps> = ({
  pose = 'standing',
  className = '',
  height = 220,
}) => {
  // Pose-based arm and body transform parameters
  const getRightArmTransform = () => {
    switch (pose) {
      case 'waving':
        return 'rotate(-35 150 110)';
      case 'dancing':
        return 'rotate(-60 150 110)';
      case 'walking':
        return 'rotate(15 150 110)';
      case 'sitting':
        return 'rotate(20 150 110)';
      default:
        return 'rotate(0 150 110)';
    }
  };

  const getLeftArmTransform = () => {
    switch (pose) {
      case 'dancing':
        return 'rotate(60 50 110)';
      case 'waving':
        return 'rotate(10 50 110)';
      case 'walking':
        return 'rotate(-15 50 110)';
      default:
        return 'rotate(0 50 110)';
    }
  };

  return (
    <svg
      width={(height * 0.8)}
      height={height}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      {/* Soft Drop Shadow Oval */}
      <ellipse cx="100" cy="270" rx="45" ry="8" fill="#4A2E2B" opacity="0.15" />

      {/* Decorative Chunni / Dupatta Backdrop */}
      <path
        d="M 45 90 C 20 130 15 200 30 250 C 70 260 130 260 170 250 C 185 200 180 130 155 90 Z"
        fill="#9E2A2B"
        opacity="0.85"
      />

      {/* Lehenga Skirt */}
      <path
        d="M 65 140 Q 100 130 135 140 L 165 260 Q 100 270 35 260 Z"
        fill="#800E13"
        stroke="#4A2E2B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Gold Border Motifs on Lehenga */}
      <path d="M 42 250 Q 100 260 158 250" stroke="#E9B44C" strokeWidth="6" strokeDasharray="4 4" />
      <path d="M 48 235 Q 100 245 152 235" stroke="#E9B44C" strokeWidth="2" />

      {/* Choli / Blouse */}
      <path
        d="M 70 100 Q 100 105 130 100 L 135 142 Q 100 148 65 142 Z"
        fill="#9E2A2B"
        stroke="#4A2E2B"
        strokeWidth="3"
      />
      {/* Embroidery pattern on blouse */}
      <circle cx="100" cy="120" r="6" fill="#E9B44C" />
      <path d="M 80 110 L 120 130" stroke="#E9B44C" strokeWidth="2" />

      {/* Left Arm & Kaleera */}
      <g transform={getLeftArmTransform()}>
        <path d="M 70 105 L 50 150" stroke="#FCE0D4" strokeWidth="12" strokeLinecap="round" />
        <path d="M 70 105 L 50 150" stroke="#4A2E2B" strokeWidth="3" strokeLinecap="round" />
        {/* Red Chooda Bangles */}
        <rect x="45" y="135" width="10" height="12" rx="2" fill="#800E13" />
        {/* Hanging Golden Kaleera */}
        <path d="M 50 150 L 50 170" stroke="#E9B44C" strokeWidth="2" />
        <circle cx="50" cy="172" r="5" fill="#E9B44C" />
      </g>

      {/* Right Arm & Waving Kaleera */}
      <g transform={getRightArmTransform()}>
        <path d="M 130 105 L 150 150" stroke="#FCE0D4" strokeWidth="12" strokeLinecap="round" />
        <path d="M 130 105 L 150 150" stroke="#4A2E2B" strokeWidth="3" strokeLinecap="round" />
        {/* Red Chooda Bangles */}
        <rect x="145" y="135" width="10" height="12" rx="2" fill="#800E13" />
        {/* Hanging Golden Kaleera */}
        <path d="M 150 150 L 150 170" stroke="#E9B44C" strokeWidth="2" />
        <circle cx="150" cy="172" r="5" fill="#E9B44C" />
      </g>

      {/* Neck & Polki Choker Necklace */}
      <path d="M 92 88 L 108 88 L 108 102 L 92 102 Z" fill="#FCE0D4" />
      <path d="M 85 98 Q 100 108 115 98" stroke="#E9B44C" strokeWidth="4" />
      <circle cx="100" cy="104" r="3" fill="#F4ACB7" />

      {/* Face & Features */}
      <ellipse cx="100" cy="72" rx="24" ry="26" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="3" />

      {/* Cheeks blush */}
      <circle cx="86" cy="78" r="5" fill="#F4ACB7" opacity="0.6" />
      <circle cx="114" cy="78" r="5" fill="#F4ACB7" opacity="0.6" />

      {/* Expressive Eyes & Eyelashes */}
      <ellipse cx="88" cy="70" rx="3.5" ry="4.5" fill="#4A2E2B" />
      <ellipse cx="112" cy="70" rx="3.5" ry="4.5" fill="#4A2E2B" />
      <circle cx="89" cy="69" r="1.5" fill="#FFFFFF" />
      <circle cx="113" cy="69" r="1.5" fill="#FFFFFF" />
      {/* Eyelashes */}
      <path d="M 83 66 Q 88 62 93 66" stroke="#4A2E2B" strokeWidth="1.5" fill="none" />
      <path d="M 107 66 Q 112 62 117 66" stroke="#4A2E2B" strokeWidth="1.5" fill="none" />

      {/* Warm Smile */}
      <path d="M 93 82 Q 100 88 107 82" stroke="#4A2E2B" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Nose ring (Nath) */}
      <circle cx="94" cy="76" r="3" fill="none" stroke="#E9B44C" strokeWidth="1.5" />

      {/* Hair & Maang Tikka */}
      <path d="M 76 60 Q 100 48 124 60 C 128 42 72 42 76 60 Z" fill="#2C1A1D" stroke="#4A2E2B" strokeWidth="2" />
      {/* Golden Maang Tikka */}
      <path d="M 100 48 L 100 58" stroke="#E9B44C" strokeWidth="2" />
      <circle cx="100" cy="60" r="3.5" fill="#E9B44C" />

      {/* Head Chunni Cover Drapery */}
      <path
        d="M 70 54 Q 100 38 130 54 C 145 65 148 110 144 140 C 120 135 80 135 56 140 C 52 110 55 65 70 54 Z"
        fill="#9E2A2B"
        opacity="0.9"
        stroke="#E9B44C"
        strokeWidth="2"
      />
    </svg>
  );
};
