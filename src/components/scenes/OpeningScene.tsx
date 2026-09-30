import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';

interface OpeningSceneProps {
  onOpenComplete: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onOpenComplete }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleTapToOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpenComplete();
    }, 1600);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden select-none illustrated-paper-bg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
      >
        <div className="relative w-full max-w-md px-6 flex flex-col items-center justify-center min-h-screen text-center">
          
          {/* Top Marigold Garlands */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex gap-3 items-center"
          >
            <span className="text-3xl animate-float">🌼</span>
            <span className="text-4xl animate-float" style={{ animationDelay: '0.2s' }}>🌸</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.4s' }}>🌼</span>
          </motion.div>

          {/* Illustrated Invitation Envelope */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full bg-[#FFF3E4] border-4 border-[#800E13] rounded-2xl p-8 sm:p-10 shadow-[6px_10px_0px_#800E13] overflow-hidden"
          >
            {/* Scrapbook Tape Accents */}
            <div className="absolute -top-3 left-8 w-20 h-6 tape-accent" />
            <div className="absolute -top-3 right-8 w-20 h-6 tape-accent" />

            {/* Wax Seal */}
            <motion.div
              animate={isOpening ? { rotateX: 180, opacity: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-16 rounded-full bg-[#9E2A2B] border-2 border-[#E9B44C] mx-auto flex items-center justify-center text-[#FFF8F0] font-serif text-2xl mb-6 shadow-md"
            >
              ੴ
            </motion.div>

            <span className="font-handwriting text-2xl text-[#9E2A2B] block font-bold mb-1">
              You're Invited!
            </span>

            <h1 className="font-illustrated text-3xl sm:text-4xl text-[#800E13] font-bold leading-tight">
              {WEDDING_DATA.bride.firstName}
              <span className="text-[#E9B44C] text-2xl block my-1 font-handwriting">&amp;</span>
              {WEDDING_DATA.groom.firstName}
            </h1>

            <div className="my-4 w-20 h-[2px] bg-[#9E2A2B]/40 mx-auto" />

            <p className="font-sans text-xs tracking-widest uppercase font-semibold text-[#2C5E3B]">
              {WEDDING_DATA.formattedDate}
            </p>
            <p className="font-handwriting text-lg text-[#800E13] font-bold mt-1">
              {WEDDING_DATA.city}
            </p>
          </motion.div>

          {/* Tap to Open Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={handleTapToOpen}
              disabled={isOpening}
              className="px-8 py-4 bg-[#9E2A2B] hover:bg-[#800E13] text-[#FFF8F0] font-illustrated text-sm tracking-wider uppercase rounded-full border-2 border-[#800E13] shadow-[4px_4px_0px_#800E13] active:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{isOpening ? "ENTERING ILLUSTRATED WORLD..." : "TAP TO ENTER STORYBOOK 💌"}</span>
            </button>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
