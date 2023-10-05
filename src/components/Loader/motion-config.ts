export const container = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const item = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.01, 0.05, 1.6],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
};
