import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';

export const Scene05GurdwaraAnandKaraj: React.FC = () => {
  const [activeLaav, setActiveLaav] = useState(0);

  const laavanDetails = [
    {
      number: "01",
      title: "FIRST LAAV — DHARAM",
      meaning: "Setting righteous duty, householder devotion, and virtue as the foundation of shared life.",
    },
    {
      number: "02",
      title: "SECOND LAAV — ANHAD",
      meaning: "Awakening of true spiritual love, meeting the Divine Teacher, and erasing fear and ego.",
    },
    {
      number: "03",
      title: "THIRD LAAV — VAIRAG",
      meaning: "Detachment from worldly vanity as the mind overflows with divine joy and sacred Sangat.",
    },
    {
      number: "04",
      title: "FOURTH LAAV — SEHAJ",
      meaning: "Attaining eternal poise and harmony—two souls bound as one in complete spiritual grace.",
    },
  ];

  return (
    <section id="anand-karaj" className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-12"
        >
          <div className="w-12 h-12 rounded-full bg-[#9E2A2B] border-2 border-[#E9B44C] flex items-center justify-center mx-auto text-[#FFF8F0] font-serif text-xl">
            ੴ
          </div>

          <span className="font-sans text-xs tracking-widest uppercase font-semibold text-[#2C5E3B]">
            THE SACRED SIKH CEREMONY
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            THE DAY WE BEGIN OUR JOURNEY — ANAND KARAJ 🕊️
          </h2>

          <p className="font-handwriting text-2xl text-[#800E13] font-bold">
            {WEDDING_DATA.gurdwara.name} — {WEDDING_DATA.formattedDate}
          </p>
        </motion.div>

        {/* Gurdwara Illustrated Backdrop Card */}
        <div className="relative bg-[#FFF3E4] border-3 border-[#800E13] rounded-3xl p-6 sm:p-12 shadow-[6px_8px_0px_#800E13] overflow-hidden mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Illustrated Gurdwara Artwork */}
            <div className="md:col-span-6 overflow-hidden rounded-2xl border-2 border-[#800E13] shadow-md aspect-[4/3]">
              <img
                src="/images/illustrated_gurdwara.png"
                alt="Gurdwara Sahib Illustration"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
            </div>

            {/* Respectful Ceremony Information */}
            <div className="md:col-span-6 space-y-4 text-left">
              <span className="bg-[#2C5E3B] text-[#FFF8F0] font-illustrated text-xs px-3 py-1 rounded-full font-bold uppercase inline-block">
                SANCTUARY OF PEACE
              </span>

              <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                {WEDDING_DATA.gurdwara.name}
              </h3>

              <p className="font-sans text-sm text-[#4A2E2B]/90 leading-relaxed">
                📍 {WEDDING_DATA.gurdwara.address}
              </p>
              <p className="font-sans text-xs font-semibold text-[#800E13]">
                ⏰ {WEDDING_DATA.gurdwara.time}
              </p>

              <div className="p-4 bg-[#FEF9EB] border-l-4 border-[#E9B44C] rounded-r-xl font-handwriting text-xl text-[#800E13] font-bold">
                “All guests are kindly requested to keep their heads covered and shoes removed inside the Darbar Sahib premises.”
              </div>
            </div>

          </div>

        </div>

        {/* Four Laavan Storybook Transitions */}
        <div className="space-y-6">
          <span className="font-handwriting text-2xl text-[#800E13] font-bold block">
            The Four Circumambulations (Laavan)
          </span>

          <div className="flex justify-center gap-3 flex-wrap">
            {laavanDetails.map((laav, idx) => (
              <button
                key={laav.number}
                onClick={() => setActiveLaav(idx)}
                className={`px-5 py-2 rounded-full font-illustrated text-xs uppercase font-bold transition-all border-2 cursor-pointer ${
                  activeLaav === idx
                    ? 'bg-[#800E13] text-[#FFF8F0] border-[#800E13] scale-105 shadow-[2px_3px_0px_#4A2E2B]'
                    : 'bg-[#FFF3E4] text-[#4A2E2B] border-[#800E13]/30 hover:border-[#800E13]'
                }`}
              >
                LAAV {laav.number}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLaav}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-[#FEF9EB] border-2 border-[#E9B44C] rounded-2xl shadow-[4px_4px_0px_#E9B44C] max-w-2xl mx-auto text-center space-y-2"
            >
              <h4 className="font-illustrated text-xl text-[#800E13] font-bold">
                {laavanDetails[activeLaav].title}
              </h4>
              <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold leading-relaxed">
                “{laavanDetails[activeLaav].meaning}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
