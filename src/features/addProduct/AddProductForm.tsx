import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

import { useProductForm } from "../../contexts/ProductFormProvider";

import { dataShoes } from "../../services/type";
import { imagesType } from "./types";

import { PickerColor } from "./PickerColor";
import { ProductInfoBox } from "./ProductInfoBox";
import { ProductImgBox } from "./ProductImgBox";
import { BoxSize } from "./BoxSize";
import { usePostData } from "./usePostData";
import { Description } from "./Description";

import { variantX } from "../../ui/variantMotion";
import { IconProduct } from "../../icons/IconProduct";
import { Spinner } from "../../ui/Spinner";

export const AddProductForm = () => {
  const [mainColor, setMainColor] = useState("#333");
  const [colorSelect, setColorSelect] = useState<string[]>([]);
  const [sizeSelect, setSizeSelect] = useState<number[]>([]);
  const [images, setImages] = useState<imagesType>({
    main: "",
    under: "",
    top: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const { handleSubmit, reset } = useProductForm();
  const { mutate, isPending } = usePostData();

  const onSubmit = (data: dataShoes) => {
    const generateId = Date.now() * 1000 + Math.floor(Math.random() * 1000);

    const newProduct: dataShoes = {
      id: generateId,
      brand: data.brand,
      name: data.name,
      images: images,
      description: data.description,
      sizes: sizeSelect,
      color: colorSelect,
      mainColor: mainColor,
      price: data.price,
      discount: data.discount || 0,
    };
    mutate(newProduct);
    setMainColor("#333");
    setColorSelect([]);
    setSizeSelect([]);
    setImages({ main: "", under: "", top: "" });
    reset();
    setIsSubmit(false);
    toast.success("successful");
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsSubmit(true);
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <div className="flex items-center justify-center mt-8 min-[680px]:mt-15 md:mt-4 sm:flex-row flex-col gap-5 sm:gap-4">
        <div className="flex flex-col gap-2  items-center justify-center md:items-end">
          <ProductImgBox
            setImages={setImages}
            images={images}
            isSubmit={isSubmit}
          />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center flex-col gap-4"
          >
            <ProductInfoBox mainColor={mainColor} setMainColor={setMainColor} />
            <Description />
          </form>
        </div>

        <div className="flex justify-center flex-col gap-3 items-center max-[400px]:w-full">
          <PickerColor
            colorSelect={colorSelect}
            setColorSelect={setColorSelect}
          />

          <BoxSize
            sizeSelect={sizeSelect}
            setSizeSelect={setSizeSelect}
            isSubmit={isSubmit}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <motion.button
          variants={variantX}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          type="button"
          onClick={handleButtonClick}
          className="w-32 h-13 cursor-pointer absolute mt-3 md:mt-0 md:bottom-10 sm:right-15 font-bold flex items-center justify-center bg-[var(--color-purple)] rounded-full gap-1"
        >
          {isPending ? (
            <Spinner />
          ) : (
            <>
              Add <IconProduct />
            </>
          )}
        </motion.button>
      </div>
    </>
  );
};
