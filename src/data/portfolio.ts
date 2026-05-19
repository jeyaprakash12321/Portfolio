export const portfolioData = {
  name: 'Jeyaprakash Murugesan',
  title: 'AI Full-Stack Developer ',
  subtitle: 'Building digital experiences that feel alive...',
  description:
    'I craft beautiful, performant, and innovative digital experiences. Specialized in modern web technologies, interactive design, and scalable architecture.',
  email: 'jeyaprakashcnp@gmail.com',
  phone: '+91 6369346954',
  location: 'Chennai, Tamilnadu, India',
  availability: 'Available for opportunities',
  profileImage: '/profile.jpg',

  hero: {
    titlePart1: 'Building',
    titlePart3: 'Digital Experiences',
    subtitle: 'that feel alive...',
    description:
      '"I craft beautiful, performant, and innovative web applications. Specialized in modern technologies, interactive design, and scalable architecture."',
    roles: ['Full-Stack Developer', 'Frontend Specialist', 'Gen AI Enthusiast'],
  },

  about: {
    description:
      "I'm a passionate developer with a keen eye for design and a love for creating immersive digital experiences. With years of experience in web development, I've worked on projects ranging from startups to enterprise-level applications.",
    story:
      'My journey began with a curiosity about how things work on the web. Over the years, I\'ve developed a comprehensive skill set spanning frontend, backend, and DevOps. I believe in writing clean, maintainable code and creating interfaces that users love.',
    stats: [
      { label: 'Years Experience', value: '4+' },
      { label: 'Projects Completed', value: '5+' },
      { label: 'Achievements', value: '15+' },
    ],
  },

  skills: {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 90 },
      { name: 'GSAP', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'REST APIs', level: 95 },
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Kubernetes', level: 70 },
    ],
    tools: [
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Webpack', level: 80 },
      { name: 'Jest', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'GitHub', level: 95 },
    ],
  },

  experience: [
    {
      id: 1,
      company: 'Grid Dynamics Technologies',
      position: 'Software Engineer',
      period: '2022 - 2025',
      description:
        'Woreked on high-impact fintech projects, developing scalable web applications and optimizing performance for millions of users.',
      achievements: [
        'Improved app performance by 40% through optimization techniques',
        'Led migration from React Class to Functional Components',
        'Implemented real-time collaboration features',
      ],
    },
    {
      id: 2,
      company: 'Tata Consultancy Services',
      position: 'Software Engineer',
      period: '2025 - present',
      description:
        'Developed custom web applications and e-commerce platforms for various clients using modern tech stack.',
      achievements: [
        'Built 20+ client websites and applications',
        'Reduced page load time by 60% with optimization',
        'Implemented automated testing (Jest, Cypress)',
        'Established coding standards and best practices',
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      description:
        'A real-time analytics dashboard powered by machine learning for data-driven insights.',
      shortDescription: 'Real-time ML-powered analytics dashboard',
      image: '/projects/analytics.jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'AWS'],
      metrics: { performance: '98%', users: '5000+', uptime: '99.9%' },
      achievements: [
        'Achieved 98% Lighthouse score',
        'Processed 10M+ data points daily',
        '5000+ active users',
      ],
      link: 'https://example.com/analytics',
      github: 'https://github.com/username/analytics',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce platform with real-time inventory management and payment integration.',
      shortDescription: 'Feature-rich e-commerce solution',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Node.js', 'Redis', 'Docker'],
      metrics: { transactions: '$500K+', performance: '95%', conversion: '3.5%' },
      achievements: [
        'Processed $500K+ in transactions',
        'Improved checkout conversion by 25%',
        '99% uptime',
      ],
      link: 'https://example.com/ecommerce',
      github: 'https://github.com/username/ecommerce',
      featured: true,
    },
    {
      id: 3,
      title: 'SaaS Collaboration Tool',
      description:
        'Real-time collaboration platform enabling teams to work together seamlessly with advanced features.',
      shortDescription: 'Real-time team collaboration platform',
      image: '/projects/collaboration.jpg',
      technologies: ['React', 'WebSocket', 'Node.js', 'PostgreSQL', 'AWS'],
      metrics: { teams: '500+', documents: '50K+', satisfaction: '9.2/10' },
      achievements: [
        '500+ active teams',
        '50K+ collaborative documents',
        '9.2/10 user satisfaction',
      ],
      link: 'https://example.com/collaboration',
      github: 'https://github.com/username/collaboration',
      featured: false,
    },
    {
      id: 4,
      title: 'Design System',
      description:
        'Comprehensive design system and component library for accelerating development across products.',
      shortDescription: 'Enterprise design system',
      image: '/projects/design-system.jpg',
      technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Figma'],
      metrics: { components: '100+', teams: '10+', adoption: '95%' },
      achievements: [
        '100+ reusable components',
        'Used by 10+ internal teams',
        '40% development time reduction',
      ],
      link: 'https://example.com/design-system',
      github: 'https://github.com/username/design-system',
      featured: false,
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Corp',
      content:
        'Working with this developer transformed our product. Exceptional attention to detail and commitment to excellence.',
      image: '/testimonials/sarah.jpg',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Founder, StartUp Hub',
      content:
        'Outstanding technical expertise combined with creative problem-solving. A true asset to any team.',
      image: '/testimonials/mike.jpg',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager, Digital Agency',
      content:
        'Delivers high-quality code consistently. Great communicator and collaborator. Highly recommended!',
      image: '/testimonials/emily.jpg',
    },
  ],

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Email', url: 'mailto:hello@yourname.com', icon: 'mail' },
  ],

  contact: {
    title: 'Let\'s create something amazing together',
    description: 'Have a project in mind? Let\'s discuss and bring your ideas to life.',
    formFields: [
      { name: 'name', label: 'Your Name', type: 'text', required: true },
      { name: 'email', label: 'Your Email', type: 'email', required: true },
      { name: 'subject', label: 'Subject', type: 'text', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  },
};
