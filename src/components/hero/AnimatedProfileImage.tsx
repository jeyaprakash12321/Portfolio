'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';

interface AnimatedProfileImageProps {
  imageUrl: string;
  alt: string;
}

const ParticleOrb = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm"
    animate={{
      x: [0, Math.cos(delay) * 100, 0],
      y: [0, Math.sin(delay) * 100, 0],
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 4,
      delay: delay * 0.2,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      left: `${Math.cos(delay) * 80 + 100}px`,
      top: `${Math.sin(delay) * 80 + 100}px`,
    }}
  />
);

export const AnimatedProfileImage: React.FC<AnimatedProfileImageProps> = ({
  imageUrl,
  alt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    stiffness: 100,
    damping: 30,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = e.clientX - rect.left - centerX;
      const y = e.clientY - rect.top - centerY;

      mouseX.set(x);
      mouseY.set(y);

      // Parallax effect on internal elements
      if (isHovering) {
        const parallax = 0.15;
        gsap.to(imageRef.current, {
          x: x * parallax * 0.1,
          y: y * parallax * 0.1,
          duration: 0.3,
          overwrite: 'auto',
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      mouseX.set(0);
      mouseY.set(0);
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovering, mouseX, mouseY]);

  // Rotating gradient ring animation
  useEffect(() => {
    if (!ringRef.current) return;

    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full md:w-auto">
      <motion.div
        ref={containerRef}
        className="relative w-64 h-64 md:w-80 md:h-80 perspective cursor-none"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        {/* Outer rotating gradient ring */}
        <motion.div
          ref={ringRef}
          className="absolute -inset-6 md:-inset-8 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, rgb(59, 130, 246), rgb(147, 51, 234), rgb(236, 72, 153), rgb(59, 130, 246))',
            padding: '2px',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-slate-900/80" />
        </motion.div>

        {/* Middle glow ring */}
        <motion.div
          className="absolute -inset-4 md:-inset-6 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(147, 51, 234, 0.4)',
              '0 0 40px rgba(147, 51, 234, 0.8)',
              '0 0 20px rgba(147, 51, 234, 0.4)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glassmorphism container */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow:
              '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 20px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Holographic shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/0 via-purple-200/10 to-pink-300/0"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(34, 211, 238, 0), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0))',
                'linear-gradient(225deg, rgba(34, 211, 238, 0), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0))',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Image container with parallax */}
          <motion.div
            ref={imageRef}
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />

            {/* Soft shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-full pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Floating particles around image */}
        <div className="absolute inset-0 rounded-full">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ParticleOrb key={i} delay={i} />
          ))}
        </div>

        {/* Additional glow effects */}
        <motion.div
          className="absolute -inset-12 md:-inset-16 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-pink-500/0 blur-3xl pointer-events-none"
          animate={{
            opacity: isHovering ? [0.3, 0.6, 0.3] : [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Inner subtle shimmer */}
        <motion.div
          className="absolute inset-2 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent)',
          }}
          animate={{
            opacity: isHovering ? [0.4, 0.1, 0.4] : [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};
