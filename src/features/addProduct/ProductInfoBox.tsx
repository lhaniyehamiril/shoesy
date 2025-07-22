import { useRef, useState } from "react";

import { useDisplay } from "../../hooks/useDisplay";
import { useClickOutside } from "../../hooks/useClickOutside";

import { BlackBox, Input } from "../../ui/StyleComponents";
import { Colorful } from "./Colorful";
import { ColorBox } from "./ColorBox";
import { useProductForm } from "../../contexts/ProductFormProvider";

export const ProductInfoBox = () => {
  const [mainColor, setMainColor] = useState("#333");
  const { setIsOpen, isOpen } = useDisplay();
  const pickerColorRef = useRef<HTMLDivElement | null>(null);
  const { register } = useProductForm();

  // close color picker when clicking outside
  useClickOutside(pickerColorRef, () => setIsOpen(false));

  return (
    <BlackBox className="grid grid-cols-2 gap-2 w-[90%] min-[400px]:w-[17rem] md:w-[22rem]">
      <Input
        type="text"
        placeholder="name"
        {...register("name", { required: "please fill it" })}
      />
      <Input
        type="text"
        placeholder="brand"
        {...register("brand", { required: "please fill it" })}
      />
      <Input
        type="text"
        placeholder="price"
        {...register("price", { required: "please fill it" })}
      />
      <Input
        type="text"
        placeholder="discount"
        {...register("discount", { required: "please fill it" })}
      />
      <div className="relative min-[280px]:w-[10rem] max-[280px]:w-[180%]">
        <ColorBox color={mainColor} title="main color" isOpen={isOpen}>
          {!isOpen && (
            <button
              type="button"
              className="mt-1"
              onClick={() => setIsOpen(true)}
            >
              <span
                style={{ background: mainColor }}
                className="inline-block rounded-full w-6 h-6"
              ></span>
            </button>
          )}
        </ColorBox>
        {isOpen && (
          <Colorful
            color={mainColor}
            setColor={setMainColor}
            pickerColorRef={pickerColorRef}
          />
        )}
      </div>
    </BlackBox>
  );
};
