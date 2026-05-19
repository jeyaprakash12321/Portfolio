'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { animationVariants } from '@/lib/animations';
import { Briefcase } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={animationVariants.slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Experience</h2>
            <p className="text-body text-foreground/70">
              Professional journey and key achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex gap-6">
                  {/* Timeline Dot and Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    {index !== experience.length - 1 && (
                      <motion.div
                        className="w-1 bg-gradient-to-b from-sky-500 to-purple-600 flex-grow mt-4"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100px' }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <Card className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                      <div>
                        <h3 className="heading-4 mb-1">{job.position}</h3>
                        <p className="text-foreground/60 font-medium">{job.company}</p>
                      </div>
                      <Badge variant="primary" className="w-fit">
                        {job.period}
                      </Badge>
                    </div>

                    <p className="text-body text-foreground/70 mb-4">{job.description}</p>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-foreground/70"
                          >
                            <span className="text-sky-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
