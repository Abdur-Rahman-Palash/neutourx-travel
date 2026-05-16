import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const defaultEase = 'power3.out';

// Parallax effect hook
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: (index, target) => {
        const distance = window.innerHeight - target.getBoundingClientRect().top;
        return distance * speed * -1;
      },
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    });
  }, [speed]);

  return ref;
}

// Text reveal effect hook
export function useTextReveal() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || '';
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="inline-block" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const chars = element.querySelectorAll('span');

    gsap.fromTo(
      chars,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.02,
        ease: 'back.out',
      }
    );
  }, []);

  return ref;
}

// Floating animation for elements
export function useFloatingAnimation(intensity: number = 1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: 20 * intensity,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, [intensity]);

  return ref;
}

// Cinematic fade effect
export function useCinematicFade() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
      }
    );
  }, []);

  return ref;
}

export function useFadeInOnScroll(offset = '80%') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: defaultEase,
        scrollTrigger: {
          trigger: element,
          start: `top ${offset}`,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [offset]);

  return ref;
}

export function useRevealEffect<T extends HTMLElement = HTMLDivElement>(offset = '85%') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current as unknown as HTMLElement | null;
    if (!element) return;

    gsap.fromTo(
      element,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: defaultEase,
        scrollTrigger: {
          trigger: element,
          start: `top ${offset}`,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [offset]);

  return ref;
}

export function useTextSplitReveal<T extends HTMLElement = HTMLHeadingElement>(delay = 0.04, offset = '85%') {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || '';
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="inline-block ${char === ' ' ? 'ml-1' : ''}">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const chars = element.querySelectorAll('span');

    gsap.fromTo(
      chars,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: delay,
        ease: defaultEase,
        scrollTrigger: {
          trigger: element,
          start: `top ${offset}`,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [delay, offset]);

  return ref;
}

export function useScrollStagger(selector = '.stagger-item', delay = 0.14) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: defaultEase,
        stagger: delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [selector, delay]);

  return ref;
}

export function useSectionTransition<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current as unknown as HTMLElement | null;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: defaultEase,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return ref;
}

export function useMagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const onMove = (event: MouseEvent) => {
      const bounds = button.getBoundingClientRect();
      const x = event.clientX - (bounds.left + bounds.width / 2);
      const y = event.clientY - (bounds.top + bounds.height / 2);
      gsap.to(button, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.28,
        ease: defaultEase,
      });
    };

    const onLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: defaultEase });
    };

    button.addEventListener('mousemove', onMove);
    button.addEventListener('mouseleave', onLeave);

    return () => {
      button.removeEventListener('mousemove', onMove);
      button.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}

export function useHoverImageScale() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const img = element.querySelector<HTMLImageElement>('img');
    if (!img) return;

    const onEnter = () => gsap.to(img, { scale: 1.08, duration: 0.9, ease: defaultEase });
    const onLeave = () => gsap.to(img, { scale: 1, duration: 0.9, ease: defaultEase });

    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);

    return () => {
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}

export function useScrollTriggerDefaults() {
  return {
    start: 'top 85%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    markers: false,
  };
}

export function useTextSplit<T extends HTMLElement = HTMLHeadingElement>(delay = 0.04, offset = '85%') {
  return useTextSplitReveal<T>(delay, offset);
}

export function useStaggeredChildren(selector = '.stagger-item', delay = 0.14) {
  return useScrollStagger(selector, delay);
}
