'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { animationVariants } from '@/lib/animations';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section className="section-padding bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={animationVariants.slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="heading-2 mb-4">About Me</h2>
            <p className="text-body text-foreground/70">{about.description}</p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story */}
            <motion.div
              variants={animationVariants.slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="heading-4 mb-4">My Journey</h3>
                <p className="text-body text-foreground/80 leading-relaxed">
                  {about.story}
                </p>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={animationVariants.slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={animationVariants.scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="text-center hover:scale-105 transition-transform">
                      <motion.p
                        className="heading-3 gradient-text"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-muted text-sm mt-2">{stat.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
