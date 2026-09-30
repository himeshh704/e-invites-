import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../../data/wedding';
import { BrideCharacter } from '../characters/BrideCharacter';
import { GroomCharacter } from '../characters/GroomCharacter';
import { Send, Heart } from 'lucide-react';

export const Scene13Rsvp: React.FC = () => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E9B44C', '#800E13', '#2C5E3B'],
    });
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const status = attending === 'yes' ? "Joyfully Attending! ❤️" : "Regretfully Declining";
    const msg = `*RSVP for Harleen %26 Jaspreet's Wedding*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Status:* ${encodeURIComponent(status)}%0A*Guests:* ${guestCount}%0A*Phone:* ${encodeURIComponent(phone)}`;
    return `https://wa.me/${WEDDING_DATA.rsvp.whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-6 bg-[#FEF9EB] text-[#4A2E2B] overflow-hidden border-y-2 border-[#E9B44C]">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3 mb-10"
        >
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Kindly Respond by {WEDDING_DATA.rsvp.deadline}
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            WILL YOU JOIN US? 💌
          </h2>
          <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold max-w-md mx-auto">
            “Your presence and warm blessings will make our celebrations complete!”
          </p>
        </motion.div>

        {/* Illustrated Characters Holding Heart */}
        <div className="flex items-end justify-center gap-4 my-6">
          <BrideCharacter pose="waving" height={180} />
          <div className="text-4xl animate-bounce">💌</div>
          <GroomCharacter pose="waving" height={190} />
        </div>

        {/* RSVP Form Box */}
        <div className="bg-[#FFF3E4] border-3 border-[#800E13] rounded-3xl p-6 sm:p-10 shadow-[6px_8px_0px_#800E13] text-left relative overflow-hidden">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="text-5xl">🎉</div>
              <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                THANK YOU FOR YOUR RSVP!
              </h3>
              <p className="font-handwriting text-2xl text-[#2C5E3B] font-bold">
                {attending === 'yes'
                  ? "We can't wait to see you in Amritsar! ❤️"
                  : "We carry your warm blessings in our hearts!"}
              </p>

              <div className="pt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C5E3B] hover:bg-[#1E4229] text-[#FFF8F0] font-illustrated text-xs uppercase rounded-full border-2 border-[#2C5E3B] shadow-[2px_3px_0px_#4A2E2B]"
                >
                  <span>SEND VIA WHATSAPP ALSO</span>
                  <Heart className="w-4 h-4 fill-current text-[#FFF8F0]" />
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Attendance Toggle */}
              <div className="space-y-3 text-center">
                <span className="font-illustrated text-xs tracking-wider uppercase text-[#800E13] font-bold">
                  SELECT YOUR RESPONSE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttending('yes')}
                    className={`py-3 px-6 rounded-2xl font-illustrated text-xs uppercase font-bold border-2 transition-all cursor-pointer ${
                      attending === 'yes'
                        ? 'bg-[#800E13] text-[#FFF8F0] border-[#800E13] shadow-[3px_3px_0px_#4A2E2B]'
                        : 'bg-[#FFF8F0] text-[#4A2E2B] border-[#800E13]/30 hover:border-[#800E13]'
                    }`}
                  >
                    YES, I’LL BE THERE ❤️
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending('no')}
                    className={`py-3 px-6 rounded-2xl font-illustrated text-xs uppercase font-bold border-2 transition-all cursor-pointer ${
                      attending === 'no'
                        ? 'bg-[#4A2E2B] text-[#FFF8F0] border-[#4A2E2B] shadow-[3px_3px_0px_#800E13]'
                        : 'bg-[#FFF8F0] text-[#4A2E2B] border-[#800E13]/30 hover:border-[#800E13]'
                    }`}
                  >
                    SORRY, CAN’T MAKE IT
                  </button>
                </div>
              </div>

              {attending && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 pt-4 border-t-2 border-[#800E13]/20"
                >
                  <div>
                    <label className="font-illustrated text-xs text-[#800E13] uppercase font-bold block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. S. Jagjit Singh"
                      className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-2xl font-bold outline-none focus:border-[#E9B44C]"
                    />
                  </div>

                  <div>
                    <label className="font-illustrated text-xs text-[#800E13] uppercase font-bold block mb-1">
                      PHONE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-2xl font-bold outline-none focus:border-[#E9B44C]"
                    />
                  </div>

                  {attending === 'yes' && (
                    <div>
                      <label className="font-illustrated text-xs text-[#800E13] uppercase font-bold block mb-1">
                        NUMBER OF GUESTS
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-xl font-bold outline-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4+">4+ Guests (Family)</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#800E13] hover:bg-[#9E2A2B] text-[#FFF8F0] font-illustrated text-xs tracking-widest uppercase rounded-2xl border-2 border-[#800E13] shadow-[4px_4px_0px_#4A2E2B] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <span>SUBMIT RSVP</span>
                    <Send className="w-4 h-4 text-[#E9B44C]" />
                  </button>
                </motion.div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
