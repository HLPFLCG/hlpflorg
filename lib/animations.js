// lib/animations.js
import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Don't run on the server
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Dynamically import only in client
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('split-type'),
      import('locomotive-scroll')
    ]).then(([gsap, ScrollTriggerModule, SplitTypeModule, LocomotiveScrollModule]) => {
      const ScrollTrigger = ScrollTriggerModule.default;
      const SplitType = SplitTypeModule.default;
      const LocomotiveScroll = LocomotiveScrollModule.default;

      gsap.default.registerPlugin(ScrollTrigger);

      const splitText = new SplitType(".animate-text", { types: "lines, words" });

      gsap.default.from(splitText.words, {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
      });

      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        const locoScroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
        });

        locoScroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
      }
    });
  }, []);
}