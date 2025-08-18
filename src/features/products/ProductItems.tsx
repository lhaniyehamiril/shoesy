import { Link } from "react-router-dom";
import { easeInOut, motion } from "motion/react";
import { dataShoes } from "../../services/type";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { user } from "../auth/authSlice";
import { setProductId } from "./productShoesSlice";
import { useProductRef } from "../../contexts/ProductRefProvider";
import { useDeleteShoes } from "./useDeleteShoes";

import { ImgWithLoader } from "../../ui/ImgWithLoader";
import { FavoriteBtn } from "../../ui/FavoriteBtn";
import { IconTrash } from "../../icons/IconTrash";

type ProductProps = {
  items: dataShoes;
};

const variantLi = {
  hidden: { opacity: 0, y: 3, x: -9 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export const ProductItems: React.FC<ProductProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const { setProductRef } = useProductRef();
  const { mutate } = useDeleteShoes();
  const owner = useAppSelector(user);

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    mutate(items.id);
  };

  return (
    <motion.li
      ref={(el) => setProductRef(items.name, el)}
      layout
      variants={variantLi}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-[330px]:w-full flex items-center justify-center font-bold flex-col gap-1"
    >
      <div className="bg-[var(--color-gray-primary)] relative py-5 rounded-[1.3rem] px-4 max-[330px]:w-[85%] md:w-48 max-[360px]:w-[9.8rem] min-[506px]:w-42  max-[402px]:w-[10.7rem] max-[505px]:w-[11.5rem]">
        {owner === "im shoesy" && (
          <button
            type="button"
            className="font-bold text-white cursor-pointer -translate-y-[6.6px]"
            onClick={handleRemove}
          >
            <IconTrash strokeColor="#d2a4ff" />
          </button>
        )}

        <div className="absolute right-[13px] top-[0.80rem]">
          <FavoriteBtn
            width="23"
            height="23"
            product={items}
            productId={items.id}
          />
        </div>
        <div
          className={`flex items-center justify-center flex-col ${
            owner === "haniyeh" && "-mt-5"
          }`}
        >
          <Link to={`/product/${items.id}`} className="min-[1190px]:hidden">
            <ImgWithLoader
              src={items.images.main}
              alt={items.name}
              className="w-26 h-26"
            />
          </Link>
          <button
            onClick={() => dispatch(setProductId(items.id))}
            className="hidden min-[1190px]:block"
          >
            <ImgWithLoader
              src={items.images.main}
              alt={items.name}
              className="w-32 h-32"
            />
          </button>
        </div>
        <h2 className="text-white translate-y-2  md:px-2  whitespace-nowrap rounded-full text-[13px] md:text-[1rem]">
          {items.name}
        </h2>
      </div>
      <div
        className={` bg-[var(--color-gray-primary)] text-white py-[0.65rem] rounded-full w-[93%] max-[330px]:w-[83%] ${
          items.discount > 0
            ? "flex justify-between items-center px-3"
            : "text-center"
        }`}
      >
        <span className="text-[13px] md:text-[0.86rem]">${items.price}</span>
        {items.discount > 0 ? (
          <motion.div
            initial={{ opacity: 0, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: easeInOut,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center font-bold text-[10px] w-8 h-5 rounded-full bg-[var(--color-purple)] text-[var(--color-gray-primary)]"
          >
            <span> {items.discount}%</span>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </motion.li>
  );
};
