'use client';

import React from 'react';
import { cn } from '@/utils/helpers';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, hover = true, ...props }) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        hover && 'hover:bg-white/[0.08] transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
