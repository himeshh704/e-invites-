import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';

export const VenueScene: React.FC = () => {
  return (
    <section id="venue" className="relative py-20 sm:py-28 px-6 bg-[#FFF8F0] text-[#4A2E2B] overflow-hidden illustrated-paper-bg">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="font-sans text-xs tracking-widest uppercase font-bold text-[#2C5E3B]">
            VENUES &amp; MAP DIRECTIONS
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            HOW TO GET THERE 📍
          </h2>
        </motion.div>

        {/* Illustrated Venue Card */}
        <div className="bg-[#FFF3E4] border-4 border-[#800E13] rounded-3xl p-8 sm:p-12 shadow-[8px_10px_0px_#800E13] max-w-2xl mx-auto space-y-6 text-left relative overflow-hidden">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl">🕌</span>
            <div>
              <span className="font-handwriting text-xl text-[#9E2A2B] font-bold">
                Main Ceremony Location
              </span>
              <h3 className="font-illustrated text-2xl sm:text-3xl text-[#800E13] font-bold">
                {WEDDING_DATA.gurdwara.name}
              </h3>
            </div>
          </div>

          <div className="space-y-3 font-sans text-sm text-[#4A2E2B] pt-4 border-t-2 border-[#800E13]/20">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#800E13] shrink-0 mt-0.5" />
              <span>{WEDDING_DATA.gurdwara.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#800E13] shrink-0" />
              <span>{WEDDING_DATA.gurdwara.time} — {WEDDING_DATA.formattedDate}</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={WEDDING_DATA.gurdwara.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#800E13] hover:bg-[#9E2A2B] text-[#FFF8F0] font-illustrated text-xs uppercase rounded-full border-2 border-[#800E13] shadow-[4px_4px_0px_#4A2E2B] transition-all cursor-pointer font-bold"
            >
              <span>GET DIRECTIONS →</span>
              <ExternalLink className="w-4 h-4 text-[#E9B44C]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
