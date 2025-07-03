import { useState } from "react";
import { PickerColor } from "./PickerColor";
import { ProductInfoBox } from "./ProductInfoBox";

export const AddProductForm = () => {
  const [colorSelect, setColorSelect] = useState<string[]>([]);
  return (
    <div className="mt-10">
      <form className="flex items-center justify-center sm:flex-row flex-col gap-5">
        <ProductInfoBox />
        <PickerColor
          colorSelect={colorSelect}
          setColorSelect={setColorSelect}
        />
      </form>
    </div>
  );
};
