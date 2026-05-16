'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const onMove = (event: MouseEvent) => {
      const bounds = button.getBoundingClientRect();
      const x = event.clientX - (bounds.left + bounds.width / 2);
      const y = event.clientY - (bounds.top + bounds.height / 2);
      gsap.to(button, { x: x * 0.14, y: y * 0.14, duration: 0.28, ease: 'power3.out' });
    };

    const onLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: 'power3.out' });
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
