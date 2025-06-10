import { ReactNode, useEffect } from "react";
import { easeInOut, motion } from "motion/react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
const variantDiv = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    Transition: {
      ease: easeInOut,
      duration: 0.6,
      type: "spring",
      stiffness: 130,
    },
  },
};
export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(10,10,10,0.12)] z-[1000] flex items-center justify-center font-bold px-5">
      <motion.div
        variants={variantDiv}
        initial="hidden"
        animate="visible"
        className="bg-[#eee] opacity-100 rounded-4xl p-5 relative w-[23rem]"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl w-26">telling us your name</h2>
          <div className="-mt-2">
            <button
              onClick={onClose}
              className=" text-[var(--color-gray-primary)] text-2xl cursor-pointer"
            >
              x
            </button>
          </div>
        </div>

        <div className=" mt-6">{children}</div>
      </motion.div>
    </div>
  );
};
