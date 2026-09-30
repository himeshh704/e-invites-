import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Scene10Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(WEDDING_DATA.weddingDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Counting Down the Moments! ⏳
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            ONLY {timeLeft.days} DAYS TO GO!
          </h2>
        </motion.div>

        {/* Illustrated Characters Waiting */}
        <div className="flex items-end justify-center gap-6 my-4">
          <BrideCharacter pose="waving" height={190} />
          <div className="text-3xl animate-bounce">⏳</div>
          <GroomCharacter pose="waving" height={200} />
        </div>

        {/* Ticking Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
            <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="font-sans text-xs tracking-wider uppercase text-[#2C5E3B] font-bold block mt-1">
              DAYS
            </span>
          </div>

          <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
            <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="font-sans text-xs tracking-wider uppercase text-[#2C5E3B] font-bold block mt-1">
              HOURS
            </span>
          </div>

          <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
            <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="font-sans text-xs tracking-wider uppercase text-[#2C5E3B] font-bold block mt-1">
              MINUTES
            </span>
          </div>

          <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
            <span className="font-illustrated text-4xl sm:text-5xl text-[#E76F51] font-bold animate-pulse">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="font-sans text-xs tracking-wider uppercase text-[#2C5E3B] font-bold block mt-1">
              SECONDS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
