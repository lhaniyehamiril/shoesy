import { motion } from "motion/react";
import { toast } from "sonner";

import { useProductForm } from "./contexts/ProductFormProvider";

import { dataShoes } from "../../services/type";


import { PickerColor } from "./PickerColor";
import { ProductInfoBox } from "./ProductInfoBox";
import { ProductImgBox } from "./ProductImgBox";
import { BoxSize } from "./BoxSize";
import { Description } from "./Description";

import { variantX } from "../../ui/variantMotion";
import { IconProduct } from '../../icons/IconProduct'
import { Spinner } from "../../components/Spinner";
import { generateId } from "../../utils/helpers";
import { useProductMeta } from "./contexts/ProductMetaProvider";
import { usePostData } from "./hook/usePostData";
import { useState } from "react";

export const AddProductForm = () => {
  const {resetMeta , productMeta} = useProductMeta()
  const { handleSubmit, reset} = useProductForm();
  const { mutate, isPending } = usePostData();
  const [isSubmit, setIsSubmit] = useState(false)

  const onSubmit = (data: dataShoes) => {

    const newProduct: dataShoes = {
      id: generateId,
      brand: data.brand,
      name: data.name,
      images: productMeta.images,
      description: data.description,
      sizes: productMeta.sizeSelect,
      color: productMeta.colorSelect,
      mainColor: productMeta.mainColor,
      price: data.price,
      discount: data.discount || 0,
    };
    mutate(newProduct);
    resetMeta()
    reset();
    setIsSubmit(false)
    toast.success("successful");
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
    setIsSubmit(true)
  };

  return (
    <>
      <div className="flex items-center justify-center mt-8 min-[680px]:mt-15 md:mt-4 sm:flex-row flex-col gap-5 sm:gap-4">
        <div className="flex flex-col gap-2  items-center justify-center md:items-end">
          <ProductImgBox  isSubmit={isSubmit}/>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center flex-col gap-4"
          >
            <ProductInfoBox  />
            <Description />

          </form>
        </div>

        <div className="flex justify-center flex-col gap-3 items-center max-[400px]:w-full">
          <PickerColor />
          <BoxSize isSubmit={isSubmit} />
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
