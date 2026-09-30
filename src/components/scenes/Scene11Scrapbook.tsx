import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';

export const Scene11Scrapbook: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-16"
        >
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Memory Album &amp; Polaroids
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            OUR SCRAPBOOK OF MEMORIES 📸
          </h2>
          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold max-w-xl mx-auto">
            “Moments etched in laughter, travels, and sweet anticipation.”
          </p>
        </motion.div>

        {/* Parallax Tilt Shift Polaroid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {WEDDING_DATA.scrapbook.map((item) => (
            <div
              key={item.id}
              className="parallax-tilt bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-4 pb-6 shadow-[6px_8px_0px_#800E13] relative transition-transform"
            >
              {/* Colored Tape Accent */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 opacity-80"
                style={{ backgroundColor: item.tapeColor, transform: 'rotate(-2deg)' }}
              />

              <div className="overflow-hidden rounded-xl border-2 border-[#800E13] aspect-[4/3] mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
              </div>

              <p className="font-handwriting text-2xl text-[#800E13] font-bold text-center leading-snug">
                {item.title}
              </p>
              <span className="font-jost text-[10px] tracking-widest text-[#2C5E3B] uppercase font-bold block text-center mt-1">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
