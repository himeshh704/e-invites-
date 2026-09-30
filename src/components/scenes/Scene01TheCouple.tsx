import React from 'react';
import { motion } from 'framer-motion';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';
import { WEDDING_DATA } from '../../data/wedding';

export const Scene01TheCouple: React.FC = () => {
  return (
    <section id="couple" className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Animated Banner Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-12"
        >
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            With the blessings of Almighty Guru &amp; Families
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold tracking-tight">
            THE STORY OF {WEDDING_DATA.bride.firstName.toUpperCase()} &amp; {WEDDING_DATA.groom.firstName.toUpperCase()}
          </h2>

          <div className="inline-block bg-[#E9B44C] text-[#800E13] font-handwriting text-2xl px-6 py-1 rounded-full border-2 border-[#800E13] transform -rotate-1 shadow-sm">
            BEGINS HERE... ✨
          </div>
        </motion.div>

        {/* Illustrated Couple Characters Entrance */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-12 my-8">
          
          {/* BRIDE CHARACTER - Animated Slide in */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative bg-[#FFF3E4] p-4 rounded-2xl border-3 border-[#800E13] shadow-[4px_6px_0px_#800E13] animate-character-sway">
              <BrideCharacter pose="waving" height={220} />
            </div>
            <span className="font-illustrated text-lg text-[#800E13] font-bold mt-3">
              {WEDDING_DATA.bride.fullName}
            </span>
            <span className="font-handwriting text-base text-[#2C5E3B] font-bold">
              The Bride
            </span>
          </motion.div>

          {/* Heart Accent in Middle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.3, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-6xl animate-bounce"
          >
            💖
          </motion.div>

          {/* GROOM CHARACTER - Animated Slide in */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative bg-[#FFF3E4] p-4 rounded-2xl border-3 border-[#800E13] shadow-[4px_6px_0px_#800E13] animate-character-sway" style={{ animationDelay: '0.4s' }}>
              <GroomCharacter pose="waving" height={235} />
            </div>
            <span className="font-illustrated text-lg text-[#800E13] font-bold mt-3">
              {WEDDING_DATA.groom.fullName}
            </span>
            <span className="font-handwriting text-base text-[#2C5E3B] font-bold">
              The Groom
            </span>
          </motion.div>

        </div>

        {/* Short Couple Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 p-6 sm:p-8 bg-[#FEF9EB] border-2 border-[#E9B44C] rounded-2xl shadow-[4px_4px_0px_#E9B44C] max-w-2xl mx-auto"
        >
          <p className="font-handwriting text-2xl text-[#4A2E2B] leading-relaxed font-bold">
            “Two hearts that found each other across distance, woven together by shared values, love, and the warmth of our families.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
