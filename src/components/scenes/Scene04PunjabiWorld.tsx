import React from 'react';
import { motion } from 'framer-motion';
import { DholPlayer } from '../characters/DholPlayer';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';

export const Scene04PunjabiWorld: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C]">
      
      {/* Phulkari Pattern Top Accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-8 opacity-40 bg-repeat-x"
        style={{ backgroundImage: `url('/images/phulkari.png')`, backgroundSize: '200px 32px' }}
      />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-12"
        >
          <span className="font-handwriting text-2xl text-[#E76F51] font-bold block">
            Welcome to the Celebrations!
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            PUNJABI WEDDING VIBES &amp; BHANGRA 🪘
          </h2>
          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold max-w-lg mx-auto">
            “Dholki beats, flying Phulkari dupattas, sweet jalebis, and unforgettable dances!”
          </p>
        </motion.div>

        {/* Large Illustrated Punjabi Environment Scene */}
        <div className="relative bg-[#FFF3E4] border-3 border-[#800E13] rounded-3xl p-8 sm:p-12 shadow-[6px_8px_0px_#800E13] overflow-hidden min-h-[340px] flex items-center justify-center">
          
          {/* Background Marigold Garlands Hanging */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <span className="text-3xl animate-float">🌼</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.3s' }}>🌸</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🌼</span>
            <span className="text-3xl animate-float" style={{ animationDelay: '0.9s' }}>🌸</span>
          </div>

          <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-12 relative z-10 my-4">
            
            {/* Dhol Player Left */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <DholPlayer height={190} />
              <span className="font-handwriting text-base text-[#800E13] font-bold mt-1">
                Dholki Beats! 🪘
              </span>
            </motion.div>

            {/* Dancing Bride */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="animate-character-wave"
            >
              <BrideCharacter pose="dancing" height={210} />
            </motion.div>

            {/* Dancing Groom */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="animate-character-wave"
              style={{ animationDelay: '0.5s' }}
            >
              <GroomCharacter pose="dancing" height={220} />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
