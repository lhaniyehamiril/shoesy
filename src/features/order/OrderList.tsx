import { motion } from "motion/react";

import { useAppSelector } from "../../hooks/useAppSelector";

import { OrderItems } from "./OrderItems";
import { variantY } from "../../ui/variantMotion";

export const OrderList = () => {
  const { orders } = useAppSelector((state) => state.order);
  return (
    <motion.div
      variants={variantY}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.7 }}
      className="bg-[#eeee] w-[93%] md:w-[50%] py-5 px-2 mt-6 h-[27rem] sm:py-5 rounded-4xl overflow-y-scroll scroll-hidden"
    >
     
      <ul className="flex items-center justify-center flex-col w-full gap-3">
        {orders?.map((items) => (
          <OrderItems items={items} key={items.id} />
        ))}
      </ul>
    </motion.div>
  );
};
