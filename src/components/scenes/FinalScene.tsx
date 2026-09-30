import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';
import { ArrowUp } from 'lucide-react';

export const FinalScene: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Top Marigold Garlands */}
        <div className="flex justify-center gap-3">
          <span className="text-3xl animate-float">🌼</span>
          <span className="text-3xl animate-float" style={{ animationDelay: '0.2s' }}>🌸</span>
          <span className="text-3xl animate-float" style={{ animationDelay: '0.4s' }}>✨</span>
          <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🌸</span>
          <span className="text-3xl animate-float" style={{ animationDelay: '0.8s' }}>🌼</span>
        </div>

        {/* Big Finale Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFF3E4] border-4 border-[#800E13] rounded-3xl p-8 sm:p-14 shadow-[8px_10px_0px_#800E13] space-y-6 relative overflow-hidden"
        >
          {/* Tape accents */}
          <div className="absolute -top-3 left-10 w-24 h-6 tape-accent" />
          <div className="absolute -top-3 right-10 w-24 h-6 tape-accent" />

          {/* Illustrated Couple Centerpiece */}
          <div className="flex items-end justify-center gap-6 my-2">
            <BrideCharacter pose="waving" height={210} />
            <div className="text-4xl animate-bounce mb-8">💖</div>
            <GroomCharacter pose="waving" height={220} />
          </div>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            {WEDDING_DATA.bride.firstName.toUpperCase()} &amp; {WEDDING_DATA.groom.firstName.toUpperCase()}
          </h2>

          <h3 className="font-handwriting text-3xl sm:text-4xl text-[#800E13] font-bold leading-tight">
            “WE CAN’T WAIT TO CELEBRATE WITH YOU!”
          </h3>

          <div className="w-24 h-[2px] bg-[#800E13]/40 mx-auto my-2" />

          <p className="font-sans text-xs tracking-widest uppercase font-bold text-[#2C5E3B]">
            {WEDDING_DATA.formattedDate} — {WEDDING_DATA.city}
          </p>

          <p className="font-handwriting text-2xl text-[#800E13] font-bold">
            With Love &amp; Blessings,<br />
            The Ahluwalia &amp; Dhillon Families
          </p>

          {/* Back to top button */}
          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E2A2B] hover:bg-[#800E13] text-[#FFF8F0] font-illustrated text-xs uppercase rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13] transition-all cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <p className="font-handwriting text-xl text-[#9E2A2B] font-bold">
          Made with ❤️ for Harleen &amp; Jaspreet's Anand Karaj
        </p>

      </div>
    </footer>
  );
};
