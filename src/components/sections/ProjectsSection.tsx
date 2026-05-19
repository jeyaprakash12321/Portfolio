'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { animationVariants, staggerContainer } from '@/lib/animations';
import { ExternalLink, GitBranch } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="section-padding">
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
          >
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <p className="text-body text-foreground/70">
              Selected work that showcases my skills and creativity
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={staggerContainer(0.2, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={animationVariants.slideInUp}
              >
                <Card className="overflow-hidden hover:scale-[1.02] transition-transform">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Image Placeholder */}
                    <div className="relative h-64 md:h-full bg-gradient-to-br from-sky-500/20 to-purple-600/20 rounded-lg overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-600 opacity-20"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-foreground/40">
                        <div className="text-center">
                          <p className="text-sm">{project.image}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="heading-3 mb-2">{project.title}</h3>
                        <p className="text-body text-foreground/70">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="glass rounded-lg p-2 text-center">
                            <p className="text-sky-400 font-bold text-sm">{value}</p>
                            <p className="text-foreground/60 text-xs capitalize">
                              {key}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex items-center gap-2"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <GitBranch className="w-4 h-4" />
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="heading-3">Other Projects</h3>
              <motion.div
                variants={staggerContainer(0.1, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid md:grid-cols-2 gap-6"
              >
                {otherProjects.map((project) => (
                  <motion.div key={project.id} variants={animationVariants.slideInUp}>
                    <Card className="h-full flex flex-col hover:scale-105 transition-transform">
                      <h4 className="heading-4 mb-2">{project.title}</h4>
                      <p className="text-body text-foreground/70 mb-4 flex-1">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <GitBranch className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
