'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPath) {
      setIsRouting(true);
      setPreviousPath(pathname);
      const timeout = window.setTimeout(() => setIsRouting(false), 450);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [pathname, previousPath]);

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 z-50 h-1 transition-all duration-500 ${
        isRouting ? 'w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600' : 'w-0'
      }`}
    />
  );
}
