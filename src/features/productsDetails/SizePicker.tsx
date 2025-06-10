import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { variantScale } from "../../ui/variantMotion";

type SizePickerProps = {
  selectedSize: number | undefined | null;
  setSelectedSize: (size: number) => void;
  productSize: number[] | undefined;
};

const ButtonSize = tw.button`
bg-transparent border-dashed cursor-pointer text-white border-1 border-[var(--color-purple)] px-3 text-[11px] py-[6px] rounded-xl
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
  const [sizeToggle, setSizeToggle] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setSizeToggle(!sizeToggle)}
        className=" bg-[var(--color-gray-primary)] text-white rounded-3xl text-[0.95rem] w-[55%] md:w-[60%] py-4 px-5  flex justify-between items-center"
      >
        <motion.span
          key={selectedSize}
          variants={variantScale}
          initial="hidden"
          animate="visible"
        >
          {selectedSize}
        </motion.span>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Iconly/Curved/Arrow - Down 2">
            <g id="Arrow - Down 2">
              <path
                id="Stroke 1"
                d="M19 8.5C19 8.5 14.856 15.5 12 15.5C9.145 15.5 5 8.5 5 8.5"
                stroke="#c387ff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </button>
      <AnimatePresence>
        {sizeToggle && (
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
                  setSizeToggle(false);
                }}
              >
                {size}
              </ButtonSize>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
