import tw from "tailwind-styled-components";
import { motion } from "motion/react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppNavigate } from "../../hooks/useAppNavigate";

import { formatCurrency } from "../../utils/helpers";
import { cartProduct } from "./CartSlice";
import { variantScale, variantY } from "../../ui/variantMotion";
import { Button } from "../../components/buttons/Button";

const Div = tw.div`
flex justify-between
`;

export const CheckOutBox = () => {
  const cart = useAppSelector(cartProduct);
  const navigate = useAppNavigate();
  const deliveryTotal = 50;
  const subTotal = cart.reduce((total, items) => {
    const discount = items.discount > 0 ? items.discount : 0;
    const finalPrice = items.price - discount;
    if (items.quantity) {
      return total + items.quantity * finalPrice;
    }
    return total;
  }, 0);
  const totalPrice = subTotal + deliveryTotal;
  return (
    <motion.div
      variants={variantY}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      exit="hidden"
      className="flex flex-col justify-center md:justify-start fixed bottom-0 right-0 rounded-t-3xl bg-[var(--color-gray-primary)] p-5 w-full
         font-bold min-[1071px]:static min-[1071px]:rounded-3xl min-[1071px]:w-[23rem] min-[1071px]:h-[14rem]  "
    >
      <div className="flex justify-center ">
        <span className="bg-[var(--color-purple)] w-12 h-[6px] rounded-full"></span>
      </div>
      <div className="flex flex-col mt-6 gap-2 bg-[var(--color-purple)] p-4 rounded-3xl">
        <Div>
          <span> sub total</span>
          <motion.span>{formatCurrency(subTotal)}</motion.span>
        </Div>
        <Div>
          <span>shipping</span>
          <span>{formatCurrency(deliveryTotal)}</span>
        </Div>
      </div>
      <div className="flex gap-1 justify-center mt-3">
        <div className="bg-[var(--color-purple)] py-3 rounded-full w-[60%] px-4 flex justify-between max-[278px]:overflow-x-scroll max-[280px]:gap-5">
          total
          <motion.span
            key={totalPrice}
            variants={variantScale}
            initial="hidden"
            animate="visible"
          >
            {formatCurrency(totalPrice)}
          </motion.span>
        </div>
        <Button classBtn="w-[60%]" onClick={() => navigate("/order")}>
          Order
        </Button>
      </div>
    </motion.div>
  );
};
