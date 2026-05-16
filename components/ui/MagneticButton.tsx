'use client';

import { forwardRef } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import clsx from 'clsx';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const magneticRef = useMagnetic();

    return (
      <button
        ref={(element) => {
          if (typeof ref === 'function') ref(element);
          else if (ref) ref.current = element;
          magneticRef.current = element as HTMLButtonElement;
        }}
        className={clsx(
          'relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500',
          variant === 'primary' && 'bg-slate-900 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] hover:bg-slate-800',
          variant === 'secondary' && 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50',
          className
        )}
        {...props}
      />
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;
