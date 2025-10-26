import { motion } from "motion/react";

import { useProductForm } from './contexts/ProductFormProvider'

import { IconDescription } from "../../icons/IconDescription";
import { BlackBox } from "../../ui/StyleComponents";
import { variantX } from "../../ui/variantMotion";

export const Description = () => {
  const { register, errors } = useProductForm();
  return (
    <motion.div
      variants={variantX}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="w-full flex items-center justify-center"
    >
      <BlackBox className="w-[88%] min-[400px]:w-[22rem] min-[640px]:w-[17rem] flex  p-4 flex-col gap-3">
        <IconDescription />
        <h2 className="text-center -mt-8 text-white">Description</h2>
        <textarea
          className={` rounded-[1.2rem] ${
            errors.description?.message
              ? "bg-[#ff7777]"
              : "bg-[var(--color-purple)]"
          } leading-6 w-full p-3 focus:outline-none`}
          {...register("description", { required: "should be fill" })}
          placeholder="Type"
        />
      </BlackBox>
    </motion.div>
  );
};
