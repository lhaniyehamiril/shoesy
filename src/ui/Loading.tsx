import { motion } from "motion/react";
import { variantXRight } from "./variantMotion";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <motion.span
        initial={{ rotate: "190deg" }}
        animate={{ rotate: 0, x: [5, -30, 10] }}
        className="block font-wild text-2xl md:text-3xl"
      >
        SH
        <motion.b
          variants={variantXRight}
          transition={{ repeat: Infinity }}
          initial="hidden"
          animate="visible"
          className="text-[var(--color-purple)]"
        >
          O
        </motion.b>
        ESY
      </motion.span>
    </div>
  );
};
