import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { GroomCharacter } from '../characters/GroomCharacter';

export const GroomScene: React.FC = () => {
  return (
    <section id="groom" className="relative min-h-[85vh] py-20 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg flex items-center justify-center">
      
      {/* Background Depth Layer */}
      <div data-depth="0.2" className="absolute top-10 left-10 text-6xl opacity-30 pointer-events-none">
        🌿
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        
        {/* Groom Vector Character Focal Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center group"
          data-depth="0.8"
        >
          <div className="relative bg-[#FFF3E4] p-6 rounded-3xl border-3 border-[#800E13] shadow-[6px_8px_0px_#800E13] animate-character-sway">
            <GroomCharacter pose="waving" height={255} />
          </div>
        </motion.div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 text-center md:text-left max-w-md"
          data-depth="0.5"
        >
          <span className="bg-[#2C5E3B] text-[#FFF8F0] font-illustrated text-xs uppercase px-4 py-1 rounded-full font-bold inline-block">
            THE GROOM
          </span>

          <h2 className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
            {WEDDING_DATA.groom.fullName}
          </h2>

          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold leading-relaxed">
            “{WEDDING_DATA.groom.description}”
          </p>

          <div className="pt-2">
            <span className="font-handwriting text-xl text-[#2C5E3B] font-bold">
              Son of S. Balwinder Singh Dhillon &amp; Sardarni Harpreet Kaur
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
