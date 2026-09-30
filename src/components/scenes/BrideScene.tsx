import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';

export const BrideScene: React.FC = () => {
  return (
    <section id="bride" className="relative min-h-[85vh] py-20 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-t-2 border-[#E9B44C] flex items-center justify-center">
      
      {/* Background Depth Layer */}
      <div data-depth="0.2" className="absolute top-10 right-10 text-6xl opacity-30 pointer-events-none">
        🌸
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Bride Vector Character Focal Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center group"
          data-depth="0.8"
        >
          <div className="relative bg-[#FFF3E4] p-6 rounded-3xl border-3 border-[#800E13] shadow-[6px_8px_0px_#800E13] animate-character-sway">
            <BrideCharacter pose="waving" height={240} />
          </div>
        </motion.div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4 text-center md:text-left max-w-md"
          data-depth="0.5"
        >
          <span className="bg-[#9E2A2B] text-[#FFF8F0] font-illustrated text-xs uppercase px-4 py-1 rounded-full font-bold inline-block">
            THE BRIDE
          </span>

          <h2 className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
            {WEDDING_DATA.bride.fullName}
          </h2>

          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold leading-relaxed">
            “{WEDDING_DATA.bride.description}”
          </p>

          <div className="pt-2">
            <span className="font-handwriting text-xl text-[#2C5E3B] font-bold">
              Daughter of S. Gurdev Singh Ahluwalia &amp; Sardarni Manjeet Kaur
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
