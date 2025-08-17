import { AnimatePresence, motion } from "motion/react";
import tw from "tailwind-styled-components";
import { variantScale } from "../../ui/variantMotion";

type SizePickerProps = {
  selectedSize: number | undefined | null;
  setSelectedSize: (size: number) => void;
  productSize: number[] | undefined;
};

const ButtonSize = tw.button`
bg-transparent border-dashed cursor-pointer text-white border-1 border-[var(--color-purple)] px-3 text-[12px] py-[6px] rounded-xl
${(props) =>
  props.$isActive
    ? "bg-[var(--color-purple)] text-[var(--color-gray-primary)]"
    : ""}

`;

export const SizePicker: React.FC<SizePickerProps> = ({
  selectedSize,
  setSelectedSize,
  productSize,
}) => {
  return (
    <div className="mt-5">
      <h1 className="text-white text-xl text-center">size </h1>
      <AnimatePresence>
        <motion.div
          key="modal"
          variants={variantScale}
          initial="hidden"
          animate="visible"
          className="flex py-[15px] gap-3 text-white bg-[var(--color-gray-primary)] px-4 w-full overflow-x-auto custom-scroll mt-2 rounded-[1.2rem]"
        >
          {productSize?.map((size, index) => (
            <ButtonSize
              key={index}
              $isActive={selectedSize === size}
              onClick={() => {
                setSelectedSize(size);
              }}
            >
              {size}
            </ButtonSize>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
