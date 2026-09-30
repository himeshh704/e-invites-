import React from 'react';

interface GroomCharacterProps {
  pose?: 'standing' | 'waving' | 'walking' | 'dancing' | 'sitting';
  className?: string;
  height?: number;
}

export const GroomCharacter: React.FC<GroomCharacterProps> = ({
  pose = 'standing',
  className = '',
  height = 235,
}) => {
  const getRightArmTransform = () => {
    switch (pose) {
      case 'waving':
        return 'rotate(-40 145 110)';
      case 'dancing':
        return 'rotate(-65 145 110)';
      case 'walking':
        return 'rotate(15 145 110)';
      default:
        return 'rotate(0 145 110)';
    }
  };

  const getLeftArmTransform = () => {
    switch (pose) {
      case 'dancing':
        return 'rotate(65 55 110)';
      case 'walking':
        return 'rotate(-15 55 110)';
      default:
        return 'rotate(0 55 110)';
    }
  };

  return (
    <svg
      width={(height * 0.75)}
      height={height}
      viewBox="0 0 200 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      {/* Soft Drop Shadow */}
      <ellipse cx="100" cy="280" rx="45" ry="8" fill="#4A2E2B" opacity="0.15" />

      {/* Churidar Pyjama / Trousers */}
      <path d="M 75 190 L 78 272 L 95 272 L 98 190 Z" fill="#FFF8F0" stroke="#4A2E2B" strokeWidth="2.5" />
      <path d="M 102 190 L 105 272 L 122 272 L 125 190 Z" fill="#FFF8F0" stroke="#4A2E2B" strokeWidth="2.5" />

      {/* Royal Mojari Shoes */}
      <path d="M 70 270 Q 88 266 98 270 L 98 278 Q 70 278 70 270 Z" fill="#800E13" stroke="#4A2E2B" strokeWidth="2" />
      <path d="M 102 270 Q 112 266 130 270 L 130 278 Q 102 278 102 270 Z" fill="#800E13" stroke="#4A2E2B" strokeWidth="2" />

      {/* Royal Ivory Sherwani Coat */}
      <path
        d="M 60 95 Q 100 98 140 95 L 145 205 Q 100 215 55 205 Z"
        fill="#FFF3E4"
        stroke="#4A2E2B"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Maroon & Gold Royal Stole / Palla */}
      <path
        d="M 68 95 C 60 130 55 180 70 230 L 85 230 C 75 180 75 130 80 95 Z"
        fill="#800E13"
        stroke="#E9B44C"
        strokeWidth="1.5"
      />

      {/* Golden Front Buttons & Pocket Square */}
      <line x1="100" y1="105" x2="100" y2="195" stroke="#4A2E2B" strokeWidth="2" />
      <circle cx="100" cy="115" r="3" fill="#E9B44C" />
      <circle cx="100" cy="135" r="3" fill="#E9B44C" />
      <circle cx="100" cy="155" r="3" fill="#E9B44C" />
      <circle cx="100" cy="175" r="3" fill="#E9B44C" />
      {/* Pocket Maroon Square */}
      <path d="M 115 115 L 130 115 L 130 125 L 115 125 Z" fill="#800E13" />

      {/* Left Arm */}
      <g transform={getLeftArmTransform()}>
        <path d="M 62 100 L 45 150" stroke="#FFF3E4" strokeWidth="16" strokeLinecap="round" />
        <path d="M 62 100 L 45 150" stroke="#4A2E2B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="45" cy="155" r="7" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="2" />
      </g>

      {/* Right Arm */}
      <g transform={getRightArmTransform()}>
        <path d="M 138 100 L 155 150" stroke="#FFF3E4" strokeWidth="16" strokeLinecap="round" />
        <path d="M 138 100 L 155 150" stroke="#4A2E2B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="155" cy="155" r="7" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="2" />
      </g>

      {/* Neck & Royal Collar */}
      <path d="M 90 82 L 110 82 L 110 95 L 90 95 Z" fill="#FCE0D4" />
      <path d="M 86 92 L 114 92 L 110 98 L 90 98 Z" fill="#800E13" stroke="#4A2E2B" strokeWidth="2" />

      {/* Face */}
      <ellipse cx="100" cy="68" rx="23" ry="25" fill="#FCE0D4" stroke="#4A2E2B" strokeWidth="3" />

      {/* Groom Beard & Moustache */}
      <path
        d="M 78 68 C 76 88 88 98 100 98 C 112 98 124 88 122 68 C 115 80 85 80 78 68 Z"
        fill="#2C1A1D"
      />
      {/* Styled Moustache */}
      <path d="M 86 76 Q 100 82 114 76 Q 100 74 86 76 Z" fill="#2C1A1D" stroke="#4A2E2B" strokeWidth="1" />

      {/* Cheeks blush */}
      <circle cx="85" cy="70" r="4" fill="#F4ACB7" opacity="0.5" />
      <circle cx="115" cy="70" r="4" fill="#F4ACB7" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="88" cy="64" rx="3.5" ry="4" fill="#4A2E2B" />
      <ellipse cx="112" cy="64" rx="3.5" ry="4" fill="#4A2E2B" />
      <circle cx="89" cy="63" r="1.5" fill="#FFFFFF" />
      <circle cx="113" cy="63" r="1.5" fill="#FFFFFF" />

      {/* Smile */}
      <path d="M 94 76 Q 100 80 106 76" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Royal Maroon Sikh Turban (Pagg) */}
      <path
        d="M 72 55 Q 100 20 128 55 C 138 35 125 15 100 12 C 75 15 62 35 72 55 Z"
        fill="#800E13"
        stroke="#4A2E2B"
        strokeWidth="3"
      />
      <path
        d="M 75 48 C 90 35 110 35 125 48 C 120 28 80 28 75 48 Z"
        fill="#9E2A2B"
      />
      {/* Turban Pin / Kalgi Accent */}
      <path d="M 100 14 L 100 26" stroke="#E9B44C" strokeWidth="2" />
      <circle cx="100" cy="12" r="3.5" fill="#E9B44C" />
    </svg>
  );
};
