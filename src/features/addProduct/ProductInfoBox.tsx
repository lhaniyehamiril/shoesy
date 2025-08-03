import { useRef } from "react";
import { motion } from "motion/react";

import { useDisplay } from "../../hooks/useDisplay";
import { useClickOutside } from "../../hooks/useClickOutside";

import { BlackBox } from "../../ui/StyleComponents";
import { Colorful } from "./Colorful";
import { ColorBox } from "./ColorBox";
import { useProductForm } from "../../contexts/ProductFormProvider";
import { variantX } from "../../ui/variantMotion";
import { InputInfo } from "./InputInfo";
type ProductInfoBoxProps = {
  mainColor: string;
  setMainColor: (color: string) => void;
};
export const ProductInfoBox: React.FC<ProductInfoBoxProps> = ({
  mainColor,
  setMainColor,
}) => {
  const { setIsOpen, isOpen } = useDisplay();
  const pickerColorRef = useRef<HTMLDivElement | null>(null);
  const { register, errors } = useProductForm();

  // close color picker when clicking outside
  useClickOutside(pickerColorRef, () => setIsOpen(false));

  return (
    <motion.div
      variants={variantX}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="flex items-center justify-center"
    >
      <BlackBox className="grid grid-cols-2 gap-2 w-[88%] min-[400px]:w-[22rem]">
        <InputInfo
          register={register("name", { required: "should be fill" })}
          placeholder="Name"
          errors={errors.name?.message}
        />
        <InputInfo
          register={register("brand", { required: "should be fill" })}
          placeholder="Brand"
          errors={errors.brand?.message}
        />

        <InputInfo
          register={register("price", { required: "should be fill" })}
          placeholder="Price"
          errors={errors.price?.message}
        />

        <InputInfo register={register("discount")} placeholder="Discount" />

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
    </motion.div>
  );
};
