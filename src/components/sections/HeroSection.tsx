'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PremiumNameHero, AnimatedProfileImage } from '@/components/hero';
import { animationVariants } from '@/lib/animations';
import { ArrowDown } from 'lucide-react';

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export const HeroSection: React.FC = () => {
  const { hero, name, profileImage } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >

          {/* Role Badges */}
          <motion.div
            variants={animationVariants.container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {hero.roles.map((role, i) => (
              <motion.div
                key={role}
                variants={animationVariants.item}
                custom={i}
              >
                <Badge variant="primary">{role}</Badge>
              </motion.div>
            ))}
          </motion.div>
          
          {[hero.titlePart1, hero.titlePart3].map((part, i) => (
              <motion.div
                key={i}
                variants={titleVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <h1 className="heading-1 gradient-text leading-tight">
                  {part}
                </h1>
              </motion.div>
            ))}

          {/* Main Content Grid - Name and Profile Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Premium Name Section */}
            
            <motion.div
              variants={animationVariants.slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >

              {/* Subtitle with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 italic">
                  {hero.subtitle}
                </h2>

                {/* Description */}
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl italic">
                  {hero.description}
                </p>
              </motion.div>

              {/* Premium Animated Name */}
              <PremiumNameHero name={name} />

              {/* CTA Buttons */}
              <motion.div
                variants={animationVariants.container}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div variants={animationVariants.item}>
                  <Button size="lg" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </motion.div>
                <motion.div variants={animationVariants.item}>
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Profile Image */}
            {/* <motion.div
              variants={animationVariants.slideInRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-end"
            >
              <AnimatedProfileImage
                imageUrl={profileImage}
                alt={name}
              />
            </motion.div> */}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12 flex justify-center md:justify-start"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-foreground/60 text-sm">Scroll to explore</p>
              <ArrowDown className="w-5 h-5 text-foreground/40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
