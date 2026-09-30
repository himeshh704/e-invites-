import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { FamilyCharacter } from '../characters/FamilyCharacter';

export const Scene03TheFamilies: React.FC = () => {
  return (
    <section id="families" className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-16"
        >
          <span className="font-handwriting text-2xl text-[#2C5E3B] font-bold block">
            The Pillars of Love &amp; Wisdom
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            TWO FAMILIES, ONE BEAUTIFUL CELEBRATION 🌸
          </h2>
          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold max-w-xl mx-auto">
            “Surrounded by the laughter, blessings, and warm prayers of our parents and elders.”
          </p>
        </motion.div>

        {/* Two Family Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BRIDE'S FAMILY BOX */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-8 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[5px_5px_0px_#800E13] space-y-6"
          >
            <div className="inline-block bg-[#9E2A2B] text-[#FFF8F0] font-illustrated text-xs uppercase px-4 py-1 rounded-full font-bold">
              THE AHLUWALIA FAMILY (BRIDE)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {WEDDING_DATA.families
                .filter(m => m.side === 'bride')
                .map((member) => (
                  <FamilyCharacter key={member.id} member={member} height={150} />
                ))}
            </div>
          </motion.div>

          {/* GROOM'S FAMILY BOX */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-8 bg-[#E8F0EC] border-3 border-[#2C5E3B] rounded-2xl shadow-[5px_5px_0px_#2C5E3B] space-y-6"
          >
            <div className="inline-block bg-[#2C5E3B] text-[#FFF8F0] font-illustrated text-xs uppercase px-4 py-1 rounded-full font-bold">
              THE DHILLON FAMILY (GROOM)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {WEDDING_DATA.families
                .filter(m => m.side === 'groom')
                .map((member) => (
                  <FamilyCharacter key={member.id} member={member} height={150} />
                ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
