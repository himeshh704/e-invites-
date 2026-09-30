import React from 'react';
import { motion } from 'framer-motion';

export const Scene09Langar: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFF3E4] border-3 border-[#2C5E3B] rounded-3xl p-8 sm:p-12 shadow-[6px_8px_0px_#2C5E3B] space-y-6"
        >
          <div className="w-12 h-12 rounded-full bg-[#2C5E3B] border-2 border-[#E9B44C] flex items-center justify-center mx-auto text-[#FFF8F0] font-serif text-xl">
            🍲
          </div>

          <span className="font-sans text-xs tracking-widest uppercase font-bold text-[#2C5E3B]">
            THE SACRED COMMUNITY FEAST
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            GURU KA LANGAR
          </h2>

          <h3 className="font-handwriting text-3xl text-[#800E13] font-bold max-w-xl mx-auto leading-relaxed">
            “COME AS GUESTS. LEAVE AS FAMILY.”
          </h3>

          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold leading-relaxed max-w-2xl mx-auto">
            “Sitting together side-by-side as one Sangat on the carpeted floor, breaking bread with love, humility, and equality.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
