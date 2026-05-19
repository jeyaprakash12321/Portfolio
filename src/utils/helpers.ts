import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
export const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * (t - 2)) * (2 * (t - 2)) + 1;
export const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const interpolate = (start: number, end: number, progress: number): number => {
  return start + (end - start) * progress;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
