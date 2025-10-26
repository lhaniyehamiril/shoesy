import { motion } from "motion/react";
import { IconCircle } from "../icons/IconCircle";

export const Spinner = ({className} : {className?: string}) => {
  return (
    <motion.div 
      className={`flex items-center justify-center ${className}`}
      animate={{ rotate: "360deg" }}
      transition={{ repeat: Infinity, duration: 0.9 }}
    >
      <IconCircle />
    </motion.div>
  );
};
