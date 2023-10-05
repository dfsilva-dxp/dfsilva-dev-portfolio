export const hero = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
};

export const letterAnimation = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
};
