'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface PremiumNameHeroProps {
  name: string;
}

interface PremiumNameHeroProps {
  name: string;
}

export const PremiumNameHero: React.FC<PremiumNameHeroProps> = ({ name }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const charsRef = useRef<Array<HTMLSpanElement | null>>([]);

  // Get mouse position relative to container
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Subtle tilt effect on text based on mouse position
      if (isHovering) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) * 0.02;
        const rotateY = (centerX - x) * 0.02;

        gsap.to(containerRef.current, {
          rotationX: rotateX,
          rotationY: rotateY,
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
      gsap.to(containerRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
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
  }, [isHovering]);

  // Animate each character on hover
  const handleCharacterHover = (index: number) => {
    const char = charsRef.current[index];
    if (!char) return;

    gsap.killTweensOf(char);
    gsap.to(char, {
      y: -15,
      duration: 0.3,
      ease: 'back.out',
    });
  };

  const handleCharacterHoverEnd = (index: number) => {
    const char = charsRef.current[index];
    if (!char) return;

    gsap.to(char, {
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotate: -10,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="relative">
      {/* Animated background glow */}
      <motion.div
        animate={{
          opacity: isHovering ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-4 md:-inset-8 blur-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10"
        style={{
          background: isHovering
            ? 'radial-gradient(circle at var(--x), rgba(147, 51, 234, 0.3), transparent 70%)'
            : undefined,
        }}
        onMouseMove={(e) => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
          }
        }}
      />

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="perspective"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative inline-block">
          {/* Main Title with Letter Animation */}
          <div className="relative">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tighter">
              {name.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  ref={(el) => {
                    if (el) charsRef.current[index] = el;
                  }}
                  variants={charVariants}
                  custom={index}
                  className="inline-block relative"
                  onMouseEnter={() => handleCharacterHover(index)}
                  onMouseLeave={() => handleCharacterHoverEnd(index)}
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgb(148, 163, 255), rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 146, 60), rgb(59, 130, 246))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '300% 300%',
                    animation: 'gradientShift 4s ease infinite',
                    filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

          </div>

          {/* Floating Motion Animation */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none"
          >
            {/* Subtle Neon Pulse */}
            <motion.div
              className="absolute -inset-4 rounded-lg bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-pink-500/0 blur-2xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated background gradient text (invisible duplicate for glow) */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }
      `}</style>
    </div>
  );
};
