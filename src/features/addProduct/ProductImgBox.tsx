import { motion } from "motion/react";

import { BlackBox } from "../../ui/StyleComponents";
import { UploadImg } from "./UploadImg";
import { variantY } from "../../ui/variantMotion";
import { imageType } from "./type";
import { useProductMeta } from "./contexts/ProductMetaProvider";

export const ProductImgBox = ({isSubmit} : {isSubmit: boolean}) => {
 const {setProductMeta, productMeta: {images}} = useProductMeta() 
 
 
  const handleImgUpload = (type: imageType, url: string) => {
  setProductMeta(prev => ({
    ...prev,
    images: {
      ...prev.images, [type]: url
    },
  }));
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
            className={`w-full ${isSubmit && !images.main
                ? "justify-center pl-0 bg-[#ff7777]": "pl-5 bg-[var(--color-purple)]"}
                 rounded-full h-14 mt-3 flex items-center gap-2`}>


            {!images.main && (
              <span className="text-[11px] inline-block font-bold sm:text-[12px]">
               {isSubmit ? 'upload main image' : ' first remove the image background'}
              </span>
            )}

            {images.main && <img src={images.main} className="rounded-xl h-10 w-10 object-cover"/>}
            {images.top && <img src={images.top} className="rounded-xl h-10 w-10 object-cover bg-center"/>}
            {images.under && <img src={images.under} className="rounded-xl h-10 w-10 object-cover bg-center"/>}
          </div>
        </div>
      </BlackBox>
    </motion.div>
  );
};
