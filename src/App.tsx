import { useState } from 'react';
import { OpeningEnvelopeScene } from './components/scenes/OpeningEnvelopeScene';
import { NavigationAndAudio } from './components/NavigationAndAudio';
import { Scene01TheCouple } from './components/scenes/Scene01TheCouple';
import { Scene02TheirStory } from './components/scenes/Scene02TheirStory';
import { Scene03TheFamilies } from './components/scenes/Scene03TheFamilies';
import { Scene04PunjabiWorld } from './components/scenes/Scene04PunjabiWorld';
import { Scene05GurdwaraAnandKaraj } from './components/scenes/Scene05GurdwaraAnandKaraj';
import { Scene07CelebrationsSangeet } from './components/scenes/Scene07CelebrationsSangeet';
import { Scene09Langar } from './components/scenes/Scene09Langar';
import { Scene10Countdown } from './components/scenes/Scene10Countdown';
import { Scene11Scrapbook } from './components/scenes/Scene11Scrapbook';
import { Scene13Rsvp } from './components/scenes/Scene13Rsvp';
import { FinalScene } from './components/scenes/FinalScene';

export function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A2E2B] selection:bg-[#9E2A2B] selection:text-[#FFF8F0]">
      {/* 1. Envelope Opening Gate */}
      {!isOpened && (
        <OpeningEnvelopeScene onOpenComplete={() => setIsOpened(true)} />
      )}

      {/* 2. Main Storybook Experience */}
      <main className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <NavigationAndAudio />
        <Scene01TheCouple />
        <Scene02TheirStory />
        <Scene03TheFamilies />
        <Scene04PunjabiWorld />
        <Scene05GurdwaraAnandKaraj />
        <Scene07CelebrationsSangeet />
        <Scene09Langar />
        <Scene10Countdown />
        <Scene11Scrapbook />
        <Scene13Rsvp />
        <FinalScene />
      </main>
    </div>
  );
}

export default App;
