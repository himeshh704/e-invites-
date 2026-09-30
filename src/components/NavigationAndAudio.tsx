import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { WEDDING_DATA } from '../data/wedding';

export const NavigationAndAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(WEDDING_DATA.audioTrack);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const navLinks = [
    { name: 'STORY', href: '#story' },
    { name: 'FAMILIES', href: '#families' },
    { name: 'ANAND KARAJ', href: '#anand-karaj' },
    { name: 'EVENTS', href: '#events' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FFF8F0]/90 backdrop-blur-md border-b-2 border-[#800E13]/20 py-3 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <a href="#" className="font-handwriting text-2xl text-[#800E13] font-bold tracking-wider">
            Harleen <span className="text-[#E9B44C]">&amp;</span> Jaspreet
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-illustrated text-xs text-[#4A2E2B] hover:text-[#800E13] font-bold tracking-wider uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[#800E13] bg-[#FFF3E4] text-[#800E13] font-illustrated text-xs uppercase font-bold cursor-pointer shadow-[2px_2px_0px_#800E13]"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#800E13] animate-pulse" />
                  <span className="hidden sm:inline">MUSIC ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#4A2E2B]/60" />
                  <span className="hidden sm:inline">MUSIC OFF</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#800E13] p-1 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FFF8F0]/98 flex flex-col items-center justify-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-illustrated text-2xl text-[#800E13] font-bold tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
