import { AnimatePresence, motion } from "motion/react";

import { dataShoes } from "../../services/type";
import { variantScale } from "../../ui/variantMotion";
type ColorPickerProps = {
  selectedColor: string | undefined;
  setSelectedColor: (color: string) => void;
  product: dataShoes | undefined;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
  product,
}) => {
  return (
    <div className=" bg-[var(--color-gray-primary)] rounded-3xl flex flex-col gap-5 p-5 mt-3">
      <div className="flex gap-2 items-center">
        <h2 className="text-white text-[1rem]">Color :</h2>
        <AnimatePresence mode="wait">
          {selectedColor && (
            <motion.span
              key={selectedColor}
              variants={variantScale}
              initial="hidden"
              animate="visible"
              style={{ background: selectedColor }}
              className="w-5 h-5 rounded-full"
            ></motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex py-3 gap-3 text-white bg-[var(--color-gray-primary)] border-1 border-[var(--color-purple)] px-4 w-full overflow-x-auto custom-scroll rounded-full">
          {product?.color?.map((color, index) => (
            <button
              onClick={() => {
                setSelectedColor(color);
              }}
              className={`w-7 h-7 rounded-full cursor-pointer shrink-0 ${
                selectedColor === color
                  ? "outline-[var(--color-purple)] outline-2 border-4 border-[var(--color-gray-primary)]"
                  : ""
              }`}
              key={index}
              style={{ background: color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
