import { motion } from "motion/react";
import { variantX, variantY } from "../../ui/variantMotion";
export const OrderSummary = () => {
  return (
    <div className="mt-5 px-9 md:px-0 md:text-center font-bold">
      <motion.p
        variants={variantX}
        initial="hidden"
        animate="visible"
        className="text-3xl w-full max-[448px]:w-[90%] max-[341px]:w-full"
      >
        thanks for shopping with us
      </motion.p>
      <div className="flex gap-1 items-center mt-3 justify-center max-[448px]:justify-start">
        <motion.p
          variants={variantY}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          see your order details
        </motion.p>
        <svg
          fill="#6a35a0"
          width="15px"
          height="15px"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z" />
        </svg>
      </div>
    </div>
  );
};
