import { useState } from "react";
import { PickerColor } from "./PickerColor";
import { ProductInfoBox } from "./ProductInfoBox";
import { ProductImgBox } from "./ProductImgBox";
import { imagesType } from "./types";

export const AddProductForm = () => {
  const [colorSelect, setColorSelect] = useState<string[]>([]);
  const [images, setImages] = useState<imagesType>({
    main: "",
    under: "",
    top: "",
  });
  return (
    <div className="mt-10 flex items-center justify-center sm:flex-row flex-col gap-5">
      <form className="flex items-center justify-center">
        <ProductInfoBox />
      </form>
      <div className="flex justify-center flex-col gap-3 items-center max-[400px]:w-full">
        <PickerColor
          colorSelect={colorSelect}
          setColorSelect={setColorSelect}
        />
      </form>
    </div>
  );
};
