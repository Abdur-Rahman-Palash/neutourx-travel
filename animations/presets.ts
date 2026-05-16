export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const floatIn = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

export const pageTransition = {
  hidden: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.7, ease: 'easeInOut' } },
};

export const sectionMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

export const floatCard = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', staggerChildren: 0.1 } },
};
