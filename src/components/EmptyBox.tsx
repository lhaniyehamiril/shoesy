import { ReactNode } from "react";
import { motion } from "motion/react";

const variantDiv = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 150,
    },
  },
};

type BoxEmptyIcon = {
  icon: ReactNode;
  message: string;
  name: ReactNode;
};
export const EmptyBox: React.FC<BoxEmptyIcon> = ({ icon, message, name }) => {
  return (
    <div
      className={`text-center bg-[var(--color-gray-primary)] rounded-3xl ${
        name ? "px-6" : "w-60 max-[300px]:w-[87%]"
      } p-5  mt-5 text-white flex flex-col justify-center items-center`}
    >
      <motion.div
        variants={variantDiv}
        initial="hidden"
        animate="visible"
        className="-mt-9"
      >
        {icon}
      </motion.div>
      <span className="mt-2">
        {name} {`${name ? "your" : ""}`} {message} is empty
      </span>
    </div>
  );
};
