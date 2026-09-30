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
    // Respect user prefers-reduced-motion setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Find all elements with data-depth attribute across scenes
      const depthElements = containerRef.current?.querySelectorAll('[data-depth]');

      depthElements?.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0.5');
        const direction = el.getAttribute('data-direction') || 'vertical';

        if (direction === 'horizontal') {
          gsap.to(el, {
            x: () => -(100 * depth),
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        } else if (direction === 'zoom') {
          gsap.to(el, {
            scale: () => 1 + depth * 0.15,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        } else {
          // Default vertical parallax
          gsap.to(el, {
            y: () => -(80 * depth),
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          });
        }
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
