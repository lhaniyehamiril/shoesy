import { useState } from "react";
import { PickerColor } from "./PickerColor";

export const AddProductForm = () => {
  const [colorSelect, setColorSelect] = useState<string[]>([]);
  return (
    <div className="mt-10">
      <form className="flex items-center justify-center">
        <PickerColor
          colorSelect={colorSelect}
          setColorSelect={setColorSelect}
        />
      </form>
    </div>
  );
};
