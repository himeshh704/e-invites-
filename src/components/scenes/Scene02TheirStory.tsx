import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DATA, type StoryScene } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Scene02TheirStory: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene: StoryScene = WEDDING_DATA.storyScenes[activeSceneIndex];

  return (
    <section id="story" className="relative py-20 sm:py-28 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            The Interactive Storybook
          </span>
          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            HOW OUR STORY UNFOLDED 📖
          </h2>
          <p className="font-sans text-xs tracking-wider uppercase text-[#2C5E3B] font-semibold">
            TAP THROUGH THE CHAPTERS TO JOURNEY WITH US
          </p>
        </div>

        {/* Storybook Chapter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          {WEDDING_DATA.storyScenes.map((scene, index) => {
            const isActive = index === activeSceneIndex;

            return (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(index)}
                className={`px-4 py-2 rounded-full font-illustrated text-xs tracking-wider uppercase transition-all border-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#800E13] text-[#FFF8F0] border-[#800E13] shadow-[2px_3px_0px_#4A2E2B] scale-105'
                    : 'bg-[#FFF3E4] text-[#4A2E2B] border-[#800E13]/30 hover:border-[#800E13]'
                }`}
              >
                CHAPTER {scene.number}
              </button>
            );
          })}
        </div>

        {/* Storybook Page Container */}
        <div className="relative min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene.id}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-6 sm:p-12 shadow-[6px_8px_0px_#800E13] relative overflow-hidden text-left"
            >
              {/* Corner Paper Tape Accent */}
              <div className="absolute -top-3 left-8 w-24 h-6 tape-accent" />
              <div className="absolute -top-3 right-8 w-24 h-6 tape-accent" />

              <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* Illustrated Characters Scene Representation */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#FFF8F0] p-6 rounded-xl border-2 border-[#E9B44C] shadow-inner relative">
                  <div className="flex items-end justify-center gap-2">
                    <BrideCharacter pose={activeSceneIndex === 3 ? "dancing" : "walking"} height={170} />
                    <span className="text-2xl animate-bounce mb-12">❤️</span>
                    <GroomCharacter pose={activeSceneIndex === 3 ? "dancing" : "walking"} height={180} />
                  </div>
                </div>

                {/* Scene Description */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#E9B44C] text-[#800E13] font-illustrated text-xs px-3 py-1 rounded-full font-bold">
                      {activeScene.year}
                    </span>
                    <span className="font-handwriting text-xl text-[#9E2A2B] font-bold">
                      📍 {activeScene.location}
                    </span>
                  </div>

                  <h3 className="font-illustrated text-2xl sm:text-3xl text-[#800E13] font-bold">
                    {activeScene.title}
                  </h3>

                  <p className="font-handwriting text-2xl text-[#4A2E2B] leading-relaxed font-bold">
                    “{activeScene.caption}”
                  </p>
                </div>

              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t-2 border-[#800E13]/20">
                <button
                  onClick={() => setActiveSceneIndex(prev => Math.max(0, prev - 1))}
                  disabled={activeSceneIndex === 0}
                  className={`flex items-center gap-1 font-illustrated text-xs uppercase ${
                    activeSceneIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'text-[#800E13] hover:underline cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> PREV CHAPTER
                </button>

                <span className="font-handwriting text-lg text-[#800E13] font-bold">
                  Page {activeSceneIndex + 1} of {WEDDING_DATA.storyScenes.length}
                </span>

                <button
                  onClick={() => setActiveSceneIndex(prev => Math.min(WEDDING_DATA.storyScenes.length - 1, prev + 1))}
                  disabled={activeSceneIndex === WEDDING_DATA.storyScenes.length - 1}
                  className={`flex items-center gap-1 font-illustrated text-xs uppercase ${
                    activeSceneIndex === WEDDING_DATA.storyScenes.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-[#800E13] hover:underline cursor-pointer'
                  }`}
                >
                  NEXT CHAPTER <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
