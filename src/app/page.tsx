'use client';

import { AnimatedBackground } from '@/components/ui/Background';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © 2024 All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm">
              Designed & built with care
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

