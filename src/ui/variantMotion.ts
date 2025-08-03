import { easeInOut } from "motion/react";
export const variantScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: easeInOut, duration: 0.3 },
  },
};

export const variantY = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const variantX = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    Transition: { duration: 0.3 },
  },
  exit: { opacity: 0, scale: 0 },
};

export const variantXRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    Transition: { duration: 0.3 },
  },
};
