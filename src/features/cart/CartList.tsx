import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cartProduct, removeCart } from "./CartSlice";
import { user } from "../auth/authSlice";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IconBack } from "../../icons/IconBack";
import { CartItems } from "./CartItems";
import { variantX } from "../../ui/variantMotion";

export const CartList = () => {
  const reduxCart = useAppSelector(cartProduct);
  const username = useAppSelector(user);
  const dispatch = useAppDispatch();

  const [localCart, setLocalCart] = useState(reduxCart);

  useEffect(() => {
    setLocalCart(reduxCart);
  }, [reduxCart]);

  const handleRemove = (id: number) => {
    setLocalCart((prev) => prev.filter((item) => item.id !== id));

    setTimeout(() => {
      dispatch(removeCart(id));
    }, 300); // match your exit animation duration
  };

  return (
    <div className="md:w-[39%] w-full sm:w-[60%] ">
      {localCart.length > 0 && (
        <div className="-mt-3">
          <Link to="/" className="md:hidden -mt-3">
            <IconBack color="#333" />
          </Link>
        </div>
      )}

      <div
        className={`${
          localCart.length > 0 && username
            ? "sm:bg-[#eeee] mt-2 h-[15rem] min-[600px]:h-[13rem] min-[1072px]:h-[16.5rem] sm:py-5 rounded-4xl overflow-y-scroll scroll-hidden"
            : ""
        }`}
      >
        <ul className="flex flex-col gap-2 justify-center items-center">
          <AnimatePresence mode="popLayout">
            {localCart.map((item) => (
              <motion.li
                key={item.id}
                layout
                variants={variantX}
                initial="hidden"
                animate="visible"
                exit="exit"
                className=" bg-[var(--color-gray-primary)] text-[14px] w-[97%] sm:w-[90%] rounded-3xl p-3 flex gap-3 font-bold overflow-x-auto custom-scroll"
              >
                <CartItems items={item} onRemove={handleRemove} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};
