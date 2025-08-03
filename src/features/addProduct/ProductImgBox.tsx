import { motion } from "motion/react";

import { BlackBox } from "../../ui/StyleComponents";
import { imagesType } from "./types";
import { UploadImg } from "./UploadImg";
import { variantY } from "../../ui/variantMotion";

type productImgBox = {
  setImages: React.Dispatch<React.SetStateAction<imagesType>>;
  images: imagesType;
  isSubmit: boolean;
};
export const ProductImgBox: React.FC<productImgBox> = ({
  setImages,
  images,
  isSubmit,
}) => {
  const handleImgUpload = (type: string, url: string) => {
    setImages((prv) => ({ ...prv, [type]: url }));
  };
  return (
    <motion.div
      variants={variantY}
      initial="hidden"
      animate="visible"
      className="w-[88%] min-[400px]:w-[22rem] min-[640px]:w-[17rem]"
    >
      <BlackBox>
        <div className="flex gap-3 items-center justify-center">
          <UploadImg text="main" handleImgUpload={handleImgUpload} />
          <UploadImg text="top" handleImgUpload={handleImgUpload} />
          <UploadImg text="under" handleImgUpload={handleImgUpload} />
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`w-full  ${
              isSubmit && !images.main
                ? "justify-center pl-0 bg-[#ff7777]"
                : "pl-5 bg-[var(--color-purple)]"
            } 
                rounded-full h-14 mt-3 flex items-center gap-2`}
          >
            {!isSubmit && !images.main && (
              <span className="text-[11px] sm:text-[12px]">
                remove the image background <br /> first for best result
              </span>
            )}

            {isSubmit && !images.main && (
              <span className="font-bold  inline-block text-[11px] sm:text-[13px]">
                upload main image
              </span>
            )}
            {images.main && (
              <img
                src={images.main}
                className="rounded-xl h-10 w-10 object-cover"
              />
            )}
            {images.top && (
              <img
                src={images.top}
                className="rounded-xl h-10 w-10 object-cover bg-center"
              />
            )}
            {images.under && (
              <img
                src={images.under}
                className="rounded-xl h-10 w-10 object-cover bg-center"
              />
            )}
          </div>
        </div>
      </BlackBox>
    </motion.div>
  );
};
