import { motion } from "motion/react";
import { variantScale } from "../ui/variantMotion";
export const IconCheckMark = () => {
  return (
    <motion.svg
      className="z-50"
      variants={variantScale}
      initial="hidden"
      animate="visible"
      width="28px"
      height="28px"
      viewBox="0 -3 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Icon-Set-Filled"
          transform="translate(-518.000000, -1039.000000)"
          fill="#333"
        >
          <path
            d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2"
            id="checkmark"
          ></path>
        </g>
      </g>
    </motion.svg>
  );
};
