'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { animationVariants, staggerContainer } from '@/lib/animations';
import { Mail, Code, GitBranch, Share2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { contact, email, phone, location, socialLinks } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const socialIcons: { [key: string]: React.ReactNode } = {
    github: <GitBranch className="w-5 h-5" />,
    linkedin: <Code className="w-5 h-5" />,
    twitter: <Share2 className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
  };

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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="heading-2 mb-4">{contact.title}</h2>
            <p className="text-body text-foreground/70">{contact.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.a
                href={`mailto:${email}`}
                variants={animationVariants.slideInLeft}
                className="block"
              >
                <Card className="hover:bg-white/[0.1] cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Email</p>
                      <p className="heading-4">{email}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${phone}`}
                variants={animationVariants.slideInLeft}
                className="block"
              >
                <Card className="hover:bg-white/[0.1] cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold">☎</span>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Phone</p>
                      <p className="heading-4">{phone}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>

              {/* Location */}
              <motion.div variants={animationVariants.slideInLeft} className="block">
                <Card>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Location</p>
                      <p className="heading-4">{location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={animationVariants.slideInLeft}
                className="pt-8"
              >
                <p className="text-foreground/60 text-sm mb-4">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                      {socialIcons[link.icon as keyof typeof socialIcons]}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={animationVariants.slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <Card>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="heading-3 mb-2">Thank you!</h3>
                    <p className="text-foreground/70">
                      I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contact.formFields.map((field) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: contact.formFields.indexOf(field) * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            placeholder={field.label}
                            value={
                              formState[field.name as keyof typeof formState]
                            }
                            onChange={handleChange}
                            required={field.required}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all resize-none h-32"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.label}
                            value={
                              formState[field.name as keyof typeof formState]
                            }
                            onChange={handleChange}
                            required={field.required}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-sky-500/50 focus:bg-white/10 transition-all"
                          />
                        )}
                      </motion.div>
                    ))}
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
