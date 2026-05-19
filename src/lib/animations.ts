export const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  },
  slideInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8 },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8 },
    },
  },
};

export const tapScale = {
  whileTap: { scale: 0.95 },
  whileHover: { scale: 1.05 },
};

export const hoverGlow = {
  whileHover: { boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export const fadeInDown = (delay = 0) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

export const fadeInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

export const scaleInAnimation = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay },
  },
});

export const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
