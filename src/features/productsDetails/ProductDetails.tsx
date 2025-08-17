import { useEffect, useState } from "react";
import { easeInOut, motion } from "motion/react";
import { toast } from "sonner";

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
    toast.success("successful", { duration: 1000 });
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
      className="font-bold p-5 min-[550px]:px-10 md:p-5"
    >
      <div className="flex justify-between items-center">
        <div className="min-[1190px]:hidden">
          <NavigateBtn color="#d2a4ff" />
        </div>
        <div className="hidden min-[1190px]:block">
          <button
            className="cursor-pointer"
            onClick={() => dispatch(setProductId(null))}
          >
            <IconBack color="#d2a4ff" />
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
      <div className="flex flex-col gap-2 mt-5 pl-4">
        <h2 className="text-[1.5rem] text-white">{product?.name}</h2>
        <div className="text-[var(--color-purple)] text-[1rem] -mt-1">
          <Discount data={product} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-full bg-[var(--color-gray-primary)] min-[550px]:w-[36rem] border-dashed border-1 mt-3 rounded-4xl py-6 px-3 justify-center">
          <ImgSlider product={product} />
          <ColorPicker
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
      <SizePicker
        productSize={product?.sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="bg-[var(--color-purple)] rounded-3xl p-4 mt-6">
        <h2 className="text-xl">Description</h2>
        <p className="mt-2 text-[0.85rem]">{product?.description}</p>
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
