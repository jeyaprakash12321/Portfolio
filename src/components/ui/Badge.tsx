'use client';

import React from 'react';
import { cn } from '@/utils/helpers';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  icon,
  className,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
    secondary: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
};
