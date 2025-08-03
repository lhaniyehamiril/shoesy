import { motion } from "motion/react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { user } from "../auth/authSlice";
import { variantX } from "../../ui/variantMotion";

export const Owner = () => {
  const name = useAppSelector(user);
  return (
    <div className=" min-[400px]:text-center md:text-left">
      <motion.h2
        variants={variantX}
        initial="hidden"
        animate="visible"
        className="font-bold text-2xl flex items-center text-[#a168db] gap-1 min-[400px]:justify-center"
      >
        Hey <b className="">{name}</b>
      </motion.h2>
      <motion.span
        variants={variantX}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="font-bold text-gray-500 inline-block mt-1"
      >
        Add Product
      </motion.span>
    </div>
  );
};
