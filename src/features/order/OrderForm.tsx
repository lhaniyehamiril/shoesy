import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "motion/react";
import tw from "tailwind-styled-components";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { user } from "../auth/authSlice";
import { cartProduct, clearCart } from "../cart/CartSlice";
import { addOrder } from "./orderSlice";

import { Address } from "../../icons/Address";
import { Phone } from "../../icons/Phone";
import { Button } from "../../components/buttons/Button";
import { IconUser } from "../../icons/IconUser";
import { variantScale, variantX } from "../../ui/variantMotion";

type InputType = {
  name: string;
  phone: string;
  address: string;
};

type OrderFormProps = {
  setShow: (p: boolean) => void;
};

const Input = tw.input`
w-full min-[320px]:w-[16rem] rounded-[1.2rem] h-12 focus:outline-0 placeholder:text-gray-600 text-[var(--color-gray-primary)] text-[15px] px-3 bg-[var(--color-purple)]
`;

const DivStyle = tw.div`
relative flex justify-center
`;

export const OrderForm: React.FC<OrderFormProps> = ({ setShow }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<InputType>(); 

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartProduct);
  const userName = useAppSelector(user);


  const onSubmit: SubmitHandler<InputType> = (data) => {

    const cleanOrderItems = cartItems.map(
      ({id, name, image, price, mainColor, size, discount}) => ({
       id,name,image,price,mainColor,size,discount
    }));

    const newOrder = {
      orderItems: cleanOrderItems,
    };

    dispatch(addOrder(newOrder));
    reset();
    dispatch(clearCart());
    setShow(true);
  };


  return (
    <motion.div
      variants={variantX}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center min-h-[70dvh]"
    >
      <div className=" bg-[var(--color-gray-primary)] rounded-4xl font-bold w-[23rem] py-10 px-3 max-[422px]:w-[89%]">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center flex-col gap-3 shrink-0 max-[340px]:w-[89%]"
          >
            <DivStyle>
              <Input
                type="text"
                defaultValue={userName}
                placeholder="name"
                {...register("name", {})}
              />
              <motion.div
                variants={variantScale}
                initial="hidden"
                animate="visible"
              >
                <IconUser classSvg="absolute right-3 top-3" />
              </motion.div>
            </DivStyle>
            <DivStyle>
              <Input
                type="number"
                placeholder="phone"
                {...register("phone", {
                  required: "its empty",
                  valueAsNumber: true,
                })}
              />
              <Phone classSvg="absolute right-3 top-[11px]" />
            </DivStyle>
            <DivStyle>
              <Input
                type="text"
                placeholder="city , street"
                {...register("address", { required: "its empty" })}
              />
              <Address classSvg="absolute right-2 top-2" />
            </DivStyle>
            {isValid && (
              <motion.div
                variants={variantX}
                initial="hidden"
                animate="visible"
              >
                <Button classBtn="w-full">Done</Button>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};
