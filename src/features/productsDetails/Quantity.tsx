import tw from "tailwind-styled-components";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { selectedQuantityById, updateQuantity } from "../cart/CartSlice";
type QuantityProps = {
  flexDir?: "column" | "row";
  width?: string;
  gap?: string;
  selectedQuantity?: number;
  setSelectedQuantity?: React.Dispatch<React.SetStateAction<number>>;
  productId?: number;
};

const ButtonQuantity = tw.button`
  bg-transparent
  shrike-0
  rounded-xl
  text-center
  cursor-pointer
  px-2
  font-bold
`;

export const Quantity: React.FC<QuantityProps> = ({
  flexDir,
  setSelectedQuantity,
  selectedQuantity,
  width,
  gap,
  productId,
}) => {
  const dispatch = useAppDispatch();

  const reduxQuantity = useAppSelector((state) =>
    productId ? selectedQuantityById(state, productId) : 0
  );

  const currentQuantity = productId ? reduxQuantity : selectedQuantity ?? 1;

  const handleIncrement = () => {

    const newQuantity = currentQuantity + 1;
    if (productId) {
      dispatch(updateQuantity({ productId, selectedQuantity: newQuantity }));
    } else if (setSelectedQuantity) {
      setSelectedQuantity((prev: number) => prev + 1);
    }

  };


  const handleDecrement = () => {

    const newQuantity = currentQuantity <= 1 ? 1 : currentQuantity - 1;
    if (productId) {
      dispatch(updateQuantity({ productId, selectedQuantity: newQuantity }));
    } else if (setSelectedQuantity) {
      setSelectedQuantity((prev: number) => (prev <= 1 ? 1 : prev - 1));
    }
    
  };

  return (
    <div
      className="flex items-center justify-center gap-1 bg-[var(--color-purple)] rounded-full p-1"
      style={{ flexDirection: flexDir, width: width, gap: gap }}
    >
      <ButtonQuantity onClick={handleIncrement}>+</ButtonQuantity>
      <span>{currentQuantity}</span>
      <ButtonQuantity onClick={handleDecrement}>-</ButtonQuantity>
    </div>
  );
};
