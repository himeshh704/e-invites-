import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../../data/wedding';

export const Scene07CelebrationsSangeet: React.FC = () => {
  return (
    <section id="events" className="relative py-20 sm:py-28 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C] illustrated-paper-bg">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-16"
        >
          <span className="font-handwriting text-2xl text-[#E76F51] font-bold block">
            Festivities, Music &amp; Color
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            THE WEDDING EVENTS &amp; CELEBRATIONS 🪘🎉
          </h2>
          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold max-w-xl mx-auto">
            “Join us as we sing, dance, and celebrate across five magical days.”
          </p>
        </motion.div>

        {/* Parallax Floating Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {WEDDING_DATA.events.map((event, index) => {
            return (
              <div
                key={event.id}
                className="parallax-card bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-6 sm:p-8 shadow-[5px_6px_0px_#800E13] space-y-4 relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300"
              >
                {/* Scrapbook Tape Accent */}
                <div className="absolute -top-3 left-6 w-20 h-5 tape-accent" />

                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2 bg-[#FEF9EB] border-2 border-[#800E13] rounded-xl shadow-sm">
                    {event.icon}
                  </span>
                  <span className="font-handwriting text-lg text-[#9E2A2B] font-bold">
                    Event 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                    {event.name}
                  </h3>
                  <p className="font-instrument italic text-xl text-[#2C5E3B]">
                    “{event.tagline}”
                  </p>
                </div>

                <div className="space-y-2 font-jost text-xs text-[#4A2E2B] pt-2 border-t-2 border-[#800E13]/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#800E13]" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#800E13]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#800E13]" />
                    <span>{event.venue} — {event.address}</span>
                  </div>
                </div>

                <p className="font-handwriting text-lg text-[#4A2E2B] leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-2">
                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9E2A2B] hover:bg-[#800E13] text-[#FFF8F0] font-jost text-xs tracking-wider uppercase font-bold rounded-full border-2 border-[#800E13] shadow-[2px_2px_0px_#800E13] transition-all"
                  >
                    <span>VIEW LOCATION</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
