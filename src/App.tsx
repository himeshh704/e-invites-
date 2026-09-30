import { useState } from 'react';
import { CameraContainer } from './components/camera/CameraContainer';
import { NavigationAndAudio } from './components/NavigationAndAudio';
import { OpeningScene } from './components/scenes/OpeningScene';
import { WorldScene } from './components/scenes/WorldScene';
import { BrideScene } from './components/scenes/BrideScene';
import { GroomScene } from './components/scenes/GroomScene';
import { CoupleScene } from './components/scenes/CoupleScene';
import { Scene02TheirStory } from './components/scenes/Scene02TheirStory';
import { Scene03TheFamilies } from './components/scenes/Scene03TheFamilies';
import { Scene04PunjabiWorld } from './components/scenes/Scene04PunjabiWorld';
import { Scene05GurdwaraAnandKaraj } from './components/scenes/Scene05GurdwaraAnandKaraj';
import { Scene07CelebrationsSangeet } from './components/scenes/Scene07CelebrationsSangeet';
import { Scene09Langar } from './components/scenes/Scene09Langar';
import { Scene10Countdown } from './components/scenes/Scene10Countdown';
import { Scene11Scrapbook } from './components/scenes/Scene11Scrapbook';
import { VenueScene } from './components/scenes/VenueScene';
import { Scene13Rsvp } from './components/scenes/Scene13Rsvp';
import { FinalScene } from './components/scenes/FinalScene';

export function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A2E2B] selection:bg-[#9E2A2B] selection:text-[#FFF8F0]">
      {/* 1. Opening Tactile Invitation Gate */}
      {!isOpened && (
        <OpeningScene onOpenComplete={() => setIsOpened(true)} />
      )}

      {/* 2. Main Animated Storybook Film Experience */}
      <main className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <NavigationAndAudio />

        {/* GSAP Virtual Camera & Multi-layer Parallax Orchestrator */}
        <CameraContainer>
          <WorldScene />
          <BrideScene />
          <GroomScene />
          <CoupleScene />
          <Scene02TheirStory />
          <Scene03TheFamilies />
          <Scene04PunjabiWorld />
          <Scene05GurdwaraAnandKaraj />
          <Scene07CelebrationsSangeet />
          <Scene09Langar />
          <Scene10Countdown />
          <Scene11Scrapbook />
          <VenueScene />
          <Scene13Rsvp />
          <FinalScene />
        </CameraContainer>
      </main>
    </div>
  );
}

export default App;
