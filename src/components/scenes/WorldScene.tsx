import React from 'react';
import { motion } from 'framer-motion';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';
import { WEDDING_DATA } from '../../data/wedding';

export const WorldScene: React.FC = () => {
  return (
    <section id="world" className="relative min-h-screen py-20 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg flex flex-col items-center justify-center">
      
      {/* Floating Parallax Floral Garlands Layer */}
      <div className="absolute top-10 left-0 right-0 pointer-events-none flex justify-between px-8 text-4xl">
        <span className="parallax-float text-4xl">🌼</span>
        <span className="parallax-float text-5xl" style={{ animationDelay: '0.4s' }}>🌸</span>
        <span className="parallax-float text-4xl" style={{ animationDelay: '0.8s' }}>🌼</span>
      </div>

      {/* Main Arch-Framed Illustrated Hero Card matching Artful Invites */}
      <div className="w-full max-w-3xl mx-auto text-center space-y-6 relative z-10 parallax-card">
        
        <div className="bg-[#FFF3E4] border-4 border-[#800E13] arch-frame p-8 sm:p-14 shadow-[8px_12px_0px_#800E13] relative overflow-hidden text-center space-y-6">
          
          {/* Top Ek Onkar Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 rounded-full bg-[#800E13] border-2 border-[#E9B44C] mx-auto flex items-center justify-center text-[#FFF8F0] font-serif text-3xl shadow-md"
          >
            ੴ
          </motion.div>

          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            With the blessings of the Guru &amp; Elders
          </span>

          {/* Couple Title */}
          <h1 className="font-illustrated text-4xl sm:text-6xl text-[#800E13] font-extrabold tracking-tight leading-none">
            {WEDDING_DATA.bride.firstName.toUpperCase()}
            <span className="font-instrument italic text-3xl sm:text-4xl text-[#E9B44C] block my-1">&amp;</span>
            {WEDDING_DATA.groom.firstName.toUpperCase()}
          </h1>

          <p className="font-jost text-xs tracking-[0.3em] uppercase text-[#2C5E3B] font-bold">
            ARE GETTING MARRIED! 💍
          </p>

          <div className="w-24 h-[2px] bg-[#800E13]/30 mx-auto my-2" />

          {/* Centerpiece Characters */}
          <div className="flex items-end justify-center gap-6 my-4">
            <BrideCharacter pose="waving" height={210} />
            <span className="text-4xl animate-bounce mb-10">💖</span>
            <GroomCharacter pose="waving" height={220} />
          </div>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#800E13] font-bold leading-relaxed max-w-lg mx-auto">
            “Join us as we take our sacred four rounds and celebrate the beginning of our new journey.”
          </p>

          <div className="pt-2">
            <div className="inline-block bg-[#E9B44C] text-[#800E13] font-jost text-xs tracking-widest uppercase font-bold px-6 py-2 rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13]">
              {WEDDING_DATA.formattedDate} — {WEDDING_DATA.city}
            </div>
          </div>

        </div>

      </div>

      {/* Floating Foreground Flowers */}
      <div className="absolute bottom-6 left-0 right-0 pointer-events-none flex justify-between px-12 text-3xl">
        <span className="parallax-float">🌸</span>
        <span className="parallax-float">🌼</span>
      </div>

    </section>
  );
};
