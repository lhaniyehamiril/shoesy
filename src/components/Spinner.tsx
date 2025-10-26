import { motion } from "motion/react";
import { IconCircle } from "../icons/IconCircle";
export const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: "360deg" }}
      transition={{ repeat: Infinity, duration: 0.9 }}
    >
      <IconCircle />
    </motion.div>
  );
};
