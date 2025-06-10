import { Link } from "react-router-dom";
import { easeInOut, motion } from "motion/react";
import { dataShoes } from "../../services/type";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setProductId } from "./productShoesSlice";
import { useProductRef } from "../../contexts/ProductRefProvider";

import { ImgWithLoader } from "../../ui/ImgWithLoader";
import { FavoriteBtn } from "../../ui/FavoriteBtn";

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
  return (
    <motion.li
      ref={(el) => setProductRef(items.name, el)}
      layout
      variants={variantLi}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="max-[287px]:w-full flex items-center justify-center flex-col gap-1"
    >
      <div className="bg-[var(--color-gray-primary)] relative py-2 rounded-[1.3rem] px-4 w-36 max-[287px]:w-[85%] md:w-48 max-[350px]:w-[8.5rem] max-[310px]:w-[7.7rem] max-[505px]:w-[9.5rem]">
        <div className="absolute right-3 top-[0.70rem]">
          <FavoriteBtn
            width="23"
            height="23"
            product={items}
            productId={items.id}
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <Link to={`/product/${items.id}`} className="min-[1190px]:hidden">
            <ImgWithLoader
              src={items.images.main}
              alt={items.name}
              borderColor="border-[var(--color-purple)]"
              className="w-20 h-22"
            />
          </Link>
          <button
            onClick={() => dispatch(setProductId(items.id))}
            className="hidden min-[1190px]:block"
          >
            <ImgWithLoader
              src={items.images.main}
              alt={items.name}
              borderColor="border-[var(--color-purple)]"
              className="w-32 h-32"
            />
          </button>
        </div>
        <h2 className="text-white  md:px-2 -mt-2 pb-2  whitespace-nowrap rounded-full font-bold text-[11px] md:text-[1rem]">
          {items.name}
        </h2>
      </div>
      <div
        className={` bg-[var(--color-gray-primary)] text-white  py-[0.65rem] rounded-full w-[93%] max-[287px]:w-[83%] ${
          items.discount > 0
            ? "flex justify-between items-center px-3"
            : "text-center"
        }`}
      >
        <span className="text-[11px] md:text-[0.86rem]">${items.price}</span>
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
            <span className=""> {items.discount}%</span>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </motion.li>
  );
};
