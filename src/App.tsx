import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Sparkles, Send, Heart, ArrowUp, ExternalLink, Menu, X } from 'lucide-react';
import { WEDDING_DATA } from './data/wedding';
import { BrideCharacter } from './components/characters/BrideCharacter';
import { GroomCharacter } from './components/characters/GroomCharacter';

export function App() {
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // RSVP Form State
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [blessingMessage, setBlessingMessage] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  // Four Laavan Tab State
  const [activeLaav, setActiveLaav] = useState(0);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Initialize Audio
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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(WEDDING_DATA.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
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

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E9B44C', '#800E13', '#2C5E3B'],
    });
    setRsvpSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const status = attending === 'yes' ? "Joyfully Attending! ❤️" : "Regretfully Declining";
    const msg = `*RSVP for Harleen %26 Jaspreet's Anand Karaj*%0A%0A*Name:* ${encodeURIComponent(fullName)}%0A*Status:* ${encodeURIComponent(status)}%0A*Guests:* ${guestCount}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Blessings:* ${encodeURIComponent(blessingMessage)}`;
    return `https://wa.me/${WEDDING_DATA.rsvp.whatsappNumber}?text=${msg}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const navLinks = [
    { name: 'BLESSINGS', href: '#blessings' },
    { name: 'STORY', href: '#story' },
    { name: 'ANAND KARAJ', href: '#anand-karaj' },
    { name: 'EVENTS', href: '#events' },
    { name: 'COUNTDOWN', href: '#countdown' },
    { name: 'MEMORIES', href: '#memories' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A2E2B] selection:bg-[#9E2A2B] selection:text-[#FFF8F0] font-sans antialiased illustrated-paper-bg">
      
      {/* 1. FLOATING NAVIGATION BAR (Matched to Artful Invites) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b-2 border-[#800E13]/20 py-3.5 px-6 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <a href="#" className="font-illustrated text-2xl text-[#800E13] font-extrabold tracking-tight">
            Rajveer <span className="font-instrument italic text-[#E9B44C] text-xl">&amp;</span> Lavleen
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-jost text-xs text-[#4A2E2B] hover:text-[#800E13] font-bold tracking-widest uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Music Control Pill Button */}
            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#800E13] bg-[#FFF3E4] text-[#800E13] font-jost text-xs uppercase font-bold cursor-pointer shadow-[2px_2px_0px_#800E13] hover:bg-[#800E13] hover:text-[#FFF8F0] transition-all"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse text-[#E9B44C]" />
                  <span>MUSIC ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 opacity-60" />
                  <span>PLAY MUSIC</span>
                </>
              )}
            </button>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#800E13] p-1.5 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFF8F0]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden">
          <div className="w-12 h-12 rounded-full bg-[#800E13] flex items-center justify-center text-[#FFF8F0] font-serif text-2xl mb-4">
            ੴ
          </div>

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

      {/* 2. HERO SECTION — ARCH-FRAMED ILLUSTRATED WEDDING CARD */}
      <header className="pt-28 pb-20 px-6 flex flex-col items-center justify-center min-h-[95vh] text-center">
        
        {/* Floating Marigold Garlands Top Accent */}
        <div className="flex gap-4 items-center mb-6">
          <span className="text-3xl animate-float">🌼</span>
          <span className="text-4xl animate-float" style={{ animationDelay: '0.3s' }}>🌸</span>
          <span className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🌼</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl bg-[#FFF3E4] border-4 border-[#800E13] arch-frame p-8 sm:p-14 shadow-[8px_12px_0px_#800E13] relative overflow-hidden text-center space-y-6"
        >
          {/* Ek Onkar Emblem */}
          <div className="w-16 h-16 rounded-full bg-[#800E13] border-2 border-[#E9B44C] mx-auto flex items-center justify-center text-[#FFF8F0] font-serif text-3xl shadow-md">
            ੴ
          </div>

          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            With the blessings of the Guru &amp; Our Families
          </span>

          <h1 className="font-illustrated text-4xl sm:text-6xl text-[#800E13] font-extrabold tracking-tight leading-none">
            {WEDDING_DATA.bride.firstName.toUpperCase()}
            <span className="font-instrument italic text-3xl sm:text-4xl text-[#E9B44C] block my-1.5">&amp;</span>
            {WEDDING_DATA.groom.firstName.toUpperCase()}
          </h1>

          <p className="font-jost text-xs tracking-[0.3em] uppercase text-[#2C5E3B] font-extrabold">
            WE ARE GETTING MARRIED! 💍
          </p>

          <div className="w-24 h-[2px] bg-[#800E13]/30 mx-auto my-2" />

          {/* Couple Seated Anand Karaj Illustration Centerpiece */}
          <div className="relative my-6 max-w-lg mx-auto rounded-2xl overflow-hidden border-3 border-[#800E13] shadow-[4px_6px_0px_#800E13]">
            <img
              src="/images/anand_karaj_palki_couple.png"
              alt="Anand Karaj Couple Seated at Palki Sahib"
              className="w-full h-auto object-cover filter brightness-[0.98]"
            />
            <div className="absolute bottom-2 right-2 bg-[#FFF8F0]/90 border border-[#800E13] px-3 py-1 rounded-full text-[10px] font-bold text-[#800E13] uppercase tracking-wider">
              Anand Karaj Blessings ੴ
            </div>
          </div>

          <div className="flex items-end justify-center gap-6 my-4">
            <BrideCharacter pose="waving" height={190} />
            <span className="text-3xl animate-bounce mb-8">💖</span>
            <GroomCharacter pose="waving" height={200} />
          </div>

          <div className="pt-2">
            <div className="inline-block bg-[#E9B44C] text-[#800E13] font-jost text-xs tracking-widest uppercase font-bold px-6 py-2.5 rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13]">
              {WEDDING_DATA.formattedDate} — {WEDDING_DATA.city}
            </div>
          </div>
        </motion.div>

      </header>

      {/* 3. GURU'S BLESSINGS & PARENTS ANNOUNCEMENT */}
      <section id="blessings" className="py-20 px-6 bg-[#FEF9EB] border-y-2 border-[#E9B44C] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <span className="font-handwriting text-2xl text-[#2C5E3B] font-bold block">
            A Sacred Union
          </span>

          <h2 className="font-illustrated text-3xl sm:text-4xl text-[#800E13] font-bold">
            TOGETHER IN DEVOTION &amp; JOY 🕊️
          </h2>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#800E13] font-bold leading-relaxed max-w-2xl mx-auto">
            “Together in the holy presence of Sri Guru Granth Sahib Ji and the warmth of our elders, two lives begin a shared journey of love.”
          </p>

          {/* Parents Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-6 bg-[#FFF3E4] border-2 border-[#800E13] rounded-2xl shadow-[3px_3px_0px_#800E13]">
              <span className="font-jost text-[10px] tracking-widest uppercase text-[#9E2A2B] font-bold block mb-1">
                BRIDE'S PARENTS
              </span>
              <p className="font-illustrated text-lg text-[#800E13] font-bold">
                {WEDDING_DATA.bride.fullName.replace("Harleen Kaur ", "Family of ")}
              </p>
              <p className="font-handwriting text-xl text-[#4A2E2B] font-bold mt-1">
                S. Gurdev Singh Ahluwalia &amp; Sardarni Manjeet Kaur
              </p>
            </div>

            <div className="p-6 bg-[#FFF3E4] border-2 border-[#800E13] rounded-2xl shadow-[3px_3px_0px_#800E13]">
              <span className="font-jost text-[10px] tracking-widest uppercase text-[#9E2A2B] font-bold block mb-1">
                GROOM'S PARENTS
              </span>
              <p className="font-illustrated text-lg text-[#800E13] font-bold">
                {WEDDING_DATA.groom.fullName.replace("Jaspreet Singh ", "Family of ")}
              </p>
              <p className="font-handwriting text-xl text-[#4A2E2B] font-bold mt-1">
                S. Balwinder Singh Dhillon &amp; Sardarni Harpreet Kaur
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR STORY (MILESTONES TIMELINE CARDS) */}
      <section id="story" className="py-20 px-6 max-w-4xl mx-auto text-center space-y-12">
        
        <div className="space-y-2">
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Our Chapters
          </span>
          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            HOW OUR STORY UNFOLDED 📖
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {WEDDING_DATA.storyScenes.map((scene) => (
            <div
              key={scene.id}
              className="bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-6 shadow-[5px_5px_0px_#800E13] space-y-3 relative overflow-hidden"
            >
              <div className="absolute -top-3 left-6 w-20 h-5 tape-accent" />
              <div className="flex items-center justify-between">
                <span className="bg-[#E9B44C] text-[#800E13] font-jost text-xs px-3 py-1 rounded-full font-bold">
                  {scene.year}
                </span>
                <span className="font-handwriting text-xl text-[#2C5E3B] font-bold">
                  📍 {scene.location}
                </span>
              </div>
              <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                {scene.title}
              </h3>
              <p className="font-handwriting text-2xl text-[#4A2E2B] font-bold leading-relaxed">
                “{scene.caption}”
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 5. ANAND KARAJ & FOUR LAAVAN */}
      <section id="anand-karaj" className="py-20 px-6 bg-[#FEF9EB] border-y-2 border-[#E9B44C] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="w-14 h-14 rounded-full bg-[#800E13] border-2 border-[#E9B44C] mx-auto flex items-center justify-center text-[#FFF8F0] font-serif text-2xl">
            ੴ
          </div>

          <span className="font-jost text-xs tracking-widest uppercase font-bold text-[#2C5E3B]">
            THE SACRED SIKH WEDDING CEREMONY
          </span>

          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            ANAND KARAJ AT GURDWARA SAHIB 🕌
          </h2>

          {/* Gurdwara Illustrated Card */}
          <div className="bg-[#FFF3E4] border-3 border-[#800E13] rounded-3xl p-6 sm:p-10 shadow-[6px_8px_0px_#800E13] grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-6 overflow-hidden rounded-2xl border-2 border-[#800E13] aspect-[4/3]">
              <img
                src="/images/golden_temple_amrit_sarovar.png"
                alt="Sri Harmandir Sahib Golden Temple"
                className="w-full h-full object-cover filter brightness-[0.98]"
              />
            </div>
            <div className="md:col-span-6 space-y-4">
              <span className="bg-[#2C5E3B] text-[#FFF8F0] font-jost text-xs px-3 py-1 rounded-full font-bold uppercase inline-block">
                SANCTUARY OF PEACE
              </span>
              <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                {WEDDING_DATA.gurdwara.name}
              </h3>
              <p className="font-sans text-sm text-[#4A2E2B]">
                📍 {WEDDING_DATA.gurdwara.address}
              </p>
              <p className="font-jost text-xs font-bold text-[#800E13]">
                ⏰ {WEDDING_DATA.gurdwara.time} — {WEDDING_DATA.formattedDate}
              </p>
              <p className="font-handwriting text-xl text-[#800E13] font-bold p-3 bg-[#FEF9EB] border-l-4 border-[#E9B44C] rounded-r-xl">
                “Head covering mandatory &amp; shoes to be removed before entering Darbar Sahib.”
              </p>
            </div>
          </div>

          {/* Four Laavan Interactive Tabs */}
          <div className="space-y-4 pt-4">
            <span className="font-handwriting text-2xl text-[#800E13] font-bold block">
              The Four Circumambulations (Laavan)
            </span>
            <div className="flex justify-center gap-2 flex-wrap">
              {laavanDetails.map((laav, idx) => (
                <button
                  key={laav.number}
                  onClick={() => setActiveLaav(idx)}
                  className={`px-4 py-2 rounded-full font-jost text-xs uppercase font-bold transition-all border-2 cursor-pointer ${
                    activeLaav === idx
                      ? 'bg-[#800E13] text-[#FFF8F0] border-[#800E13] shadow-[2px_3px_0px_#4A2E2B]'
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 bg-[#FFF3E4] border-2 border-[#E9B44C] rounded-2xl shadow-[3px_3px_0px_#E9B44C] max-w-2xl mx-auto text-center space-y-2"
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

      {/* 6. WEDDING EVENTS & CELEBRATIONS CARDS (MATCHED TO ARTFUL INVITES DEMO) */}
      <section id="events" className="py-20 px-6 max-w-5xl mx-auto text-center space-y-12">
        
        <div className="space-y-2">
          <span className="font-handwriting text-2xl text-[#E76F51] font-bold block">
            Itinerary of Festivities
          </span>
          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            WEDDING EVENTS &amp; CELEBRATIONS 🪘🎉
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {WEDDING_DATA.events.map((event, index) => (
            <div
              key={event.id}
              className="bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-6 sm:p-8 shadow-[5px_6px_0px_#800E13] space-y-4 relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-3 left-6 w-20 h-5 tape-accent" />
              
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2 bg-[#FEF9EB] border-2 border-[#800E13] rounded-xl shadow-xs">
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
                  <span className="font-bold">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#800E13]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#800E13]" />
                  <span>{event.venue} — {event.address}</span>
                </div>
                <div className="flex items-center gap-2 text-[#2C5E3B]">
                  <Sparkles className="w-4 h-4 text-[#E9B44C]" />
                  <span>Dress Code: {event.dressCode}</span>
                </div>
              </div>

              <p className="font-handwriting text-xl text-[#4A2E2B] leading-relaxed">
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
          ))}
        </div>

      </section>

      {/* 7. LIVE COUNTDOWN TIMER */}
      <section id="countdown" className="py-20 px-6 bg-[#FEF9EB] border-y-2 border-[#E9B44C] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-2">
            <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
              Counting Down the Moments ⏳
            </span>
            <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
              ONLY {timeLeft.days} DAYS TO GO!
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
              <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </span>
              <span className="font-jost text-xs uppercase text-[#2C5E3B] font-bold block mt-1">DAYS</span>
            </div>

            <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
              <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </span>
              <span className="font-jost text-xs uppercase text-[#2C5E3B] font-bold block mt-1">HOURS</span>
            </div>

            <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
              <span className="font-illustrated text-4xl sm:text-5xl text-[#800E13] font-bold">
                {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
              </span>
              <span className="font-jost text-xs uppercase text-[#2C5E3B] font-bold block mt-1">MINUTES</span>
            </div>

            <div className="p-4 bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl shadow-[4px_4px_0px_#800E13]">
              <span className="font-illustrated text-4xl sm:text-5xl text-[#E76F51] font-bold animate-pulse">
                {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
              </span>
              <span className="font-jost text-xs uppercase text-[#2C5E3B] font-bold block mt-1">SECONDS</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. POLAROID SCRAPBOOK MEMORIES */}
      <section id="memories" className="py-20 px-6 max-w-5xl mx-auto text-center space-y-12">
        
        <div className="space-y-2">
          <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
            Memory Album
          </span>
          <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
            OUR SCRAPBOOK OF MEMORIES 📸
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {WEDDING_DATA.scrapbook.map((item) => (
            <div
              key={item.id}
              className={`bg-[#FFF3E4] border-3 border-[#800E13] rounded-2xl p-4 pb-6 shadow-[6px_8px_0px_#800E13] relative ${item.rotation}`}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 opacity-80"
                style={{ backgroundColor: item.tapeColor, transform: 'rotate(-2deg)' }}
              />

              <div className="overflow-hidden rounded-xl border-2 border-[#800E13] aspect-[4/3] mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
              </div>

              <p className="font-handwriting text-2xl text-[#800E13] font-bold text-center">
                {item.title}
              </p>
              <span className="font-jost text-[10px] tracking-widest text-[#2C5E3B] uppercase font-bold block text-center mt-1">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </section>

      {/* 9. INTERACTIVE RSVP FORM */}
      <section id="rsvp" className="py-20 px-6 bg-[#FEF9EB] border-y-2 border-[#E9B44C] text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-2">
            <span className="font-handwriting text-2xl text-[#9E2A2B] font-bold block">
              Kindly Respond by {WEDDING_DATA.rsvp.deadline}
            </span>
            <h2 className="font-illustrated text-3xl sm:text-5xl text-[#800E13] font-bold">
              WILL YOU JOIN US? 💌
            </h2>
          </div>

          <div className="bg-[#FFF3E4] border-3 border-[#800E13] rounded-3xl p-6 sm:p-10 shadow-[6px_8px_0px_#800E13] text-left">
            {rsvpSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="text-5xl">🎉</div>
                <h3 className="font-illustrated text-2xl text-[#800E13] font-bold">
                  THANK YOU FOR YOUR RESPONSE!
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C5E3B] text-[#FFF8F0] font-jost text-xs uppercase font-bold rounded-full border-2 border-[#2C5E3B] shadow-[2px_3px_0px_#4A2E2B]"
                  >
                    <span>SEND VIA WHATSAPP ALSO</span>
                    <Heart className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                
                <div className="space-y-3 text-center">
                  <span className="font-jost text-xs tracking-wider uppercase text-[#800E13] font-bold">
                    SELECT YOUR ATTENDANCE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`py-3 px-6 rounded-2xl font-jost text-xs uppercase font-bold border-2 cursor-pointer ${
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
                      className={`py-3 px-6 rounded-2xl font-jost text-xs uppercase font-bold border-2 cursor-pointer ${
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
                  <div className="space-y-4 pt-4 border-t-2 border-[#800E13]/20">
                    <div>
                      <label className="font-jost text-xs text-[#800E13] uppercase font-bold block mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. S. Jagjit Singh Ahluwalia"
                        className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-2xl font-bold outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-jost text-xs text-[#800E13] uppercase font-bold block mb-1">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-2xl font-bold outline-none"
                      />
                    </div>

                    {attending === 'yes' && (
                      <div>
                        <label className="font-jost text-xs text-[#800E13] uppercase font-bold block mb-1">
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

                    <div>
                      <label className="font-jost text-xs text-[#800E13] uppercase font-bold block mb-1">
                        BLESSINGS &amp; MESSAGE
                      </label>
                      <textarea
                        rows={3}
                        value={blessingMessage}
                        onChange={(e) => setBlessingMessage(e.target.value)}
                        placeholder="Share your prayers or wishes for the couple..."
                        className="w-full bg-[#FFF8F0] border-2 border-[#800E13] rounded-xl px-4 py-3 font-handwriting text-2xl font-bold outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#800E13] hover:bg-[#9E2A2B] text-[#FFF8F0] font-jost text-xs tracking-widest uppercase rounded-2xl border-2 border-[#800E13] shadow-[4px_4px_0px_#4A2E2B] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                    >
                      <span>CONFIRM RSVP</span>
                      <Send className="w-4 h-4 text-[#E9B44C]" />
                    </button>
                  </div>
                )}

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 10. FOOTER SECTION */}
      <footer className="py-16 px-6 text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#800E13] border-2 border-[#E9B44C] flex items-center justify-center mx-auto text-[#FFF8F0] font-serif text-2xl">
          ੴ
        </div>

        <h3 className="font-illustrated text-3xl text-[#800E13] font-bold">
          {WEDDING_DATA.bride.firstName} &amp; {WEDDING_DATA.groom.firstName}
        </h3>

        <p className="font-jost text-xs tracking-widest uppercase text-[#2C5E3B] font-bold">
          ANAND KARAJ — {WEDDING_DATA.formattedDate}
        </p>

        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E2A2B] hover:bg-[#800E13] text-[#FFF8F0] font-jost text-xs uppercase font-bold rounded-full border-2 border-[#800E13] shadow-[3px_3px_0px_#800E13] transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}

export default App;
