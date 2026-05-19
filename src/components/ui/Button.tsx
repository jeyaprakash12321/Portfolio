'use client';

import React from 'react';
import { cn } from '@/utils/helpers';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-medium transition-all duration-300 ease-out';
    const variants = {
      primary:
        'bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/50',
      secondary:
        'bg-white/10 hover:bg-white/20 text-foreground border border-white/20 hover:border-white/40',
      ghost: 'hover:bg-white/10 text-foreground',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-xl',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
