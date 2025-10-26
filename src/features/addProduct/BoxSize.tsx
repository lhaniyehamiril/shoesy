import { useState } from "react";
import { motion } from "motion/react";

import { BlackBox, Input } from "../../ui/StyleComponents";
import { variantY } from "../../ui/variantMotion";
import { useProductMeta } from "./contexts/ProductMetaProvider";



export const BoxSize = ({isSubmit}: {isSubmit: boolean}) => {
  const {productMeta: {sizeSelect} , setProductMeta} = useProductMeta()
  const [size, setSize] = useState("");

  const handleSubmit = () => {
    const number = Number(size);
    if (size.trim() && !isNaN(number)) {
      setProductMeta(prv => ({...prv,
         sizeSelect: [...prv.sizeSelect, number]}))
    }
    setSize("");
  };

  const removeSizeSelect = (index: number) => {
    setProductMeta(prv => 
      ({...prv , sizeSelect: prv.sizeSelect.filter((_, i) => i !== index)}))
  };

  return (
    <motion.div
      variants={variantY}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
      className="flex items-center justify-center w-full"
    >
      <BlackBox className="flex items-center w-[88%] justify-center flex-col min-[400px]:w-[22rem] min-[640px]:w-[17rem] gap-3">
        <div className=" flex gap-1 w-[98%]">
          <Input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Size"
            className={`${
              isSubmit && sizeSelect.length === 0 
                ? "bg-[#ff7777]"
                : "bg-[var(--color-purple)]"
            }`}
          />
          <button
            onClick={handleSubmit}
            className="px-5 py-3 focus:outline-none bg-[var(--color-purple)] rounded-full w-full cursor-pointer" 
          >
            Add
          </button>
        </div>
        <div className="bg-[var(--color-purple)] items-center h-[3rem] rounded-full w-full flex gap-[0.7rem] pl-3 overflow-x-auto overflow-y-hidden scroll-hidden">
          {sizeSelect?.map((num, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className="border-[var(--color-gray-primary)] py-[5px] px-[0.60rem] text-[11px] rounded-[0.87rem] border-dashed border-1">
                {num}
              </div>
              <button
                onClick={() => removeSizeSelect(index)}
                className="cursor-pointer ml-[2px] font-bold"
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
