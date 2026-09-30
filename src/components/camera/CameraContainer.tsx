import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CameraContainerProps {
  children: React.ReactNode;
}

export const CameraContainer: React.FC<CameraContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Smooth Scroll Scrubbing Cards (Float up + scale in as you scroll into view)
      const cards = containerRef.current?.querySelectorAll('.parallax-card');
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0.8, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );
      });

      // 2. Floating Flowers & Garlands Foreground Layer (moves faster than scroll)
      const floatingDecorations = containerRef.current?.querySelectorAll('.parallax-float');
      floatingDecorations?.forEach((decor, i) => {
        const speed = (i % 2 === 0 ? 1.5 : -1.2);
        gsap.to(decor, {
          y: () => 100 * speed,
          rotate: () => (i % 2 === 0 ? 15 : -15),
          ease: 'none',
          scrollTrigger: {
            trigger: decor.closest('section') || containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // 3. Tilted Polaroid Photos Parallax Tilt Shift
      const tiltedItems = containerRef.current?.querySelectorAll('.parallax-tilt');
      tiltedItems?.forEach((item, i) => {
        const startRot = i % 2 === 0 ? -6 : 6;
        const endRot = i % 2 === 0 ? 2 : -2;
        gsap.fromTo(
          item,
          { rotate: startRot, y: 60 },
          {
            rotate: endRot,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      });

      // 4. Background Paper Pattern Parallax Shift
      const bgSections = containerRef.current?.querySelectorAll('section');
      bgSections?.forEach((sec) => {
        gsap.to(sec, {
          backgroundPositionY: '40px',
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {children}
    </div>
  );
};
