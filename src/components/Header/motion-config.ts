export const header = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
};

export const navButtonAnimation = {
  initial: {
    y: -50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.6
    }
  }
};

export const fullscreen = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0]
    }
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const content = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      ease: [0.12, 0, 0.39, 0],
      duration: 0.5,
      staggerDirection: -1,
      delay: 0.5
    }
  }
};
