import { useEffect, useState } from "react";
import { easeInOut, motion } from "motion/react";

import { useGetDataShoes } from "../../hooks/useGetDataShoes";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { setModalOpen, user } from "../auth/authSlice";
import { addCart } from "../cart/CartSlice";
import { setProductId } from "../products/productShoesSlice";

import { SizePicker } from "./SizePicker";
import { Quantity } from "./Quantity";
import { AddBtn } from "./AddBtn";
import { ColorPicker } from "./ColorPicker";
import { ImgSlider } from "./ImgSlider";

import { IconBack } from "../../icons/IconBack";
import { Discount } from "../../ui/Discount";
import { NavigateBtn } from "../../ui/NavigateBtn";
import { FavoriteBtn } from "../../ui/FavoriteBtn";

type ProductDetailsProps = {
  productId: number | null;
};

const variantDiv = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: easeInOut } },
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
}) => {
  const dispatch = useAppDispatch();
  const { shoes } = useGetDataShoes();
  const username = useAppSelector(user);
  const product = shoes?.find((product) => product.id === productId);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.mainColor
  );
  const [selectedSize, setSelectedSize] = useState<number | undefined>(
    product?.sizes[0]
  );
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const handleCart = () => {
    if (!username) {
      dispatch(setModalOpen(true));
      return;
    }

    if (product) {
      const generateId = Date.now() * 1000 + Math.floor(Math.random() * 1000);
      const newItems = {
        id: generateId,
        name: product.name,
        image: product.images.main,
        price: product.price,
        mainColor: selectedColor,
        size: selectedSize,
        quantity: selectedQuantity,
        discount: product.discount,
      };
      dispatch(addCart(newItems));
    }
    setSelectedColor(product?.mainColor);
    setSelectedSize(product?.sizes[0]);
    setSelectedQuantity(1);
  };

  useEffect(() => {
    setSelectedColor(product?.mainColor);
    setSelectedSize(product?.sizes[0]);
    setSelectedQuantity(1);
  }, [product]);

  return (
    <motion.div
      layout
      key={product?.id}
      variants={variantDiv}
      initial="hidden"
      animate="visible"
      className="font-bold p-5"
    >
      <div className="flex justify-between items-center">
        <div className="min-[1190px]:hidden">
          <NavigateBtn color="#c387ff" />
        </div>
        <div className="hidden min-[1190px]:block">
          <button
            className="cursor-pointer"
            onClick={() => dispatch(setProductId(null))}
          >
            <IconBack color="#c387ff" />
          </button>
        </div>
        <h3 className="font-bold text-white text-xl ">Details</h3>
        <FavoriteBtn
          width="34"
          height="34"
          product={product}
          productId={product?.id}
        />
      </div>
      <div className="max-[286px]:overflow-x-scroll max-[286px]:gap-5 custom-scroll flex justify-between items-center mt-9 text-lg bg-[var(--color-purple)] rounded-[1.2rem] p-4 md:p-4 text-[var(--color-gray-primary)] whitespace-nowrap ">
        <span>{product?.name}</span>
        <Discount data={product} />
      </div>
      <ImgSlider product={product} />
      <div className="bg-[var(--color-purple)] rounded-3xl p-4">
        <h2 className="text-xl">Description</h2>
        <p className="mt-2 text-[0.85rem]">{product?.description}</p>
      </div>
      <div className=" bg-[var(--color-purple)] px-4 py-6 rounded-[1.2rem] mt-5">
        <SizePicker
          productSize={product?.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ColorPicker
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div className="flex mt-4 gap-2 justify-center">
        <AddBtn handleCart={handleCart} />
        <Quantity
          setSelectedQuantity={setSelectedQuantity}
          selectedQuantity={selectedQuantity}
          width="40%"
          gap="0.75rem"
        />
      </div>
    </motion.div>
  );
};
