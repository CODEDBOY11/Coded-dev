import { easeInOut } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
