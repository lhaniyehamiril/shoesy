import { useState } from "react";
import { PickerColor } from "./PickerColor";
import { ProductInfoBox } from "./ProductInfoBox";
import { ProductImgBox } from "./ProductImgBox";
import { imagesType } from "./types";
import { BoxSize } from "./BoxSize";

export const AddProductForm = () => {
  const [colorSelect, setColorSelect] = useState<string[]>([]);
  const [sizeSelect, setSizeSelect] = useState<number[]>([]);
  const [images, setImages] = useState<imagesType>({
    main: "",
    under: "",
    top: "",
  });
  return (
    <div className="mt-10 flex items-center justify-center sm:flex-row flex-col gap-5">
      <div className="flex flex-col gap-2 sm:translate-y-9 items-center justify-center md:items-end">
        <ProductImgBox setImages={setImages} images={images} />
        <form className="flex items-center justify-center">
          <ProductInfoBox />
        </form>
      </div>

      <div className="flex justify-center flex-col gap-3 items-center max-[400px]:w-full">
        <PickerColor
          colorSelect={colorSelect}
          setColorSelect={setColorSelect}
        />

        <BoxSize sizeSelect={sizeSelect} setSizeSelect={setSizeSelect} />
      </div>
    </div>
  );
};
