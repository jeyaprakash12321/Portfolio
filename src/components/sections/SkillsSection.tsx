'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { animationVariants, staggerContainer } from '@/lib/animations';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Backend', skills: skills.backend },
    { title: 'DevOps', skills: skills.devops },
    { title: 'Tools', skills: skills.tools },
  ];

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
            <h2 className="heading-2 mb-4">Skills & Expertise</h2>
            <p className="text-body text-foreground/70">
              Proficient in modern technologies and tools
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={animationVariants.slideInUp}
              >
                <Card>
                  <h3 className="heading-4 mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: (categoryIndex * 0.1 + skillIndex * 0.05),
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground/80 font-medium">
                            {skill.name}
                          </span>
                          <Badge variant="accent">{skill.level}%</Badge>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-sky-500 to-purple-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
