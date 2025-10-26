import { useRef, useState } from "react";
import { motion } from "motion/react";

import { Colorful } from "./Colorful";

import { useDisplay } from "../../hooks/useDisplay";
import { useClickOutside } from "../../hooks/useClickOutside";

import { ColorBox } from "./ColorBox";
import { IconPlus } from "../../icons/IconPlus";
import { BlackBox } from "../../ui/StyleComponents";
import { variantXRight } from "../../ui/variantMotion";
import { useProductMeta } from "./contexts/ProductMetaProvider";


export const PickerColor = () => {
  const {setProductMeta , productMeta: {colorSelect}} = useProductMeta()
  const { isOpen, setIsOpen } = useDisplay();
  const [color, setColor] = useState("");
  const pickerColorRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = () => {
    if (color.trim()) {
      setProductMeta(prv => ({...prv , colorSelect:
       prv.colorSelect.includes(color) ?
       prv.colorSelect : [...prv.colorSelect , color]}))
    }
    setIsOpen(false);
  };

  const removeColorSelect = (index: number) => {
    setProductMeta(prv => ({...prv ,
     colorSelect: prv.colorSelect.filter((_, i) => i !== index)}))
  };

  // close color picker when clicking outside
  useClickOutside(pickerColorRef, () => setIsOpen(false));

  return (
    <motion.div
      variants={variantXRight}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      className="flex items-center justify-center w-full"
    >
      <BlackBox className="flex items-center rounded-3xl p-4 gap-[3px] bg-[var(--color-gray-primary)]  justify-center flex-col w-[88%] min-[400px]:w-[22rem] min-[640px]:w-[17rem]">
        <div className="flex items-center relative justify-center w-full gap-1">
          <ColorBox color={color} title="colors" isOpen={isOpen}>
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <IconPlus />
              </button>
            )}
          </ColorBox>
          <button
            onClick={handleSubmit}
            className="px-9 py-3 bg-[var(--color-purple)] w-full max-[311px]:w-[67%] max-[335px]:w-[83%] min-[400px]:w-[12rem] rounded-full cursor-pointer"
          >
            Add
          </button>

          {isOpen && (
            <Colorful
              color={color}
              setColor={setColor}
              pickerColorRef={pickerColorRef}
            />
          )}
        </div>
        <div className="bg-[var(--color-purple)] mt-2 rounded-full p-3 h-12 items-center flex gap-3 w-full overflow-x-auto overflow-y-hidden scroll-hidden">
          {colorSelect?.map((color, index) => (
            <div key={index} className="flex items-center gap-1">
              <span
                style={{ background: color }}
                className="inline-block rounded-full w-6 h-6 shrink-0"
              ></span>
               <button
                onClick={() => removeColorSelect(index)}
                className="text-[var(--color-gray-primary)] font-bold cursor-pointer"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </BlackBox>
    </motion.div>
  );
};
