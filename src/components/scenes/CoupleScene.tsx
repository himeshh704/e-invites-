import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';

export const CoupleScene: React.FC = () => {
  return (
    <section id="couple-main" className="relative min-h-[90vh] py-20 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Destiny Brought Us Together
          </span>

          <h2 className="font-illustrated text-4xl sm:text-6xl text-[#800E13] font-bold tracking-tight">
            {WEDDING_DATA.bride.firstName.toUpperCase()} &amp; {WEDDING_DATA.groom.firstName.toUpperCase()}
          </h2>

          <div className="inline-block bg-[#9E2A2B] text-[#FFF8F0] font-handwriting text-2xl px-6 py-1.5 rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13]">
            THEIR STORY BEGINS HERE... ✨
          </div>
        </motion.div>

        {/* Bring Couple Together Centerpiece */}
        <div className="flex items-end justify-center gap-6 sm:gap-12 my-6">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            data-depth="0.8"
          >
            <BrideCharacter pose="waving" height={220} />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.4, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl animate-bounce mb-16"
          >
            💖
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            data-depth="0.8"
          >
            <GroomCharacter pose="waving" height={235} />
          </motion.div>
        </div>

        <p className="font-handwriting text-3xl text-[#800E13] font-bold max-w-xl mx-auto leading-relaxed">
          “Two souls bound in love, walking hand-in-hand toward a blessed new beginning.”
        </p>

      </div>
    </section>
  );
};
