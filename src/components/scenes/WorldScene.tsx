import React from 'react';
import { motion } from 'framer-motion';

export const WorldScene: React.FC = () => {
  return (
    <section id="world" className="relative min-h-screen py-24 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg flex flex-col items-center justify-center">
      
      {/* BACKGROUND DEPTH LAYER (0.15x) */}
      <div data-depth="0.15" className="absolute inset-0 pointer-events-none flex justify-between px-12 pt-16 opacity-40">
        <span className="text-6xl animate-float">☁️</span>
        <span className="text-6xl animate-float" style={{ animationDelay: '1.5s' }}>☁️</span>
      </div>

      {/* MIDGROUND DEPTH LAYER (0.45x) */}
      <div data-depth="0.45" className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <div className="inline-block bg-[#E9B44C] text-[#800E13] font-handwriting text-2xl px-6 py-1.5 rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13] transform -rotate-1">
            ੴ Satgur Prasad
          </div>

          <h1 className="font-illustrated text-4xl sm:text-6xl text-[#800E13] font-bold tracking-tight leading-tight">
            WELCOME TO OUR ILLUSTRATED WEDDING WORLD 🌸
          </h1>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#2C5E3B] font-bold max-w-xl mx-auto leading-relaxed">
            “A story written in prayers, laughter, and the warmth of two families coming together.”
          </p>
        </motion.div>

        {/* Illustrated Gate Archway Backdrop */}
        <div className="p-8 sm:p-12 bg-[#FFF3E4] border-4 border-[#800E13] rounded-3xl shadow-[8px_10px_0px_#800E13] relative overflow-hidden my-8">
          <div className="flex justify-center gap-4 text-4xl mb-4">
            <span>🌿</span>
            <span>🌼</span>
            <span>🕊️</span>
            <span>🌼</span>
            <span>🌿</span>
          </div>

          <p className="font-handwriting text-2xl text-[#800E13] font-bold">
            Scroll down to journey through the scenes with the Bride &amp; Groom ➔
          </p>
        </div>

      </div>

      {/* FOREGROUND DEPTH LAYER (1.20x) */}
      <div data-depth="1.20" data-direction="horizontal" className="absolute bottom-6 left-0 right-0 pointer-events-none flex justify-between px-8 text-4xl">
        <span className="animate-float">🌸</span>
        <span className="animate-float" style={{ animationDelay: '0.8s' }}>🌼</span>
      </div>

    </section>
  );
};
