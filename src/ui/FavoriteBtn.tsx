import { motion } from "motion/react";
import { toast } from "sonner";

import { modal, setModalOpen, user } from "../features/auth/authSlice";
import {
  addToFavorite,
  favoriteArr,
  removeFavorite,
} from "../features/favorite/favoriteSlice";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import { dataShoes } from "../services/type";
import { Heart } from "../icons/Heart";
import { Modal } from "./Modal";
import { LoginForm } from "../features/auth/LoginForm";

type FavoriteBtnProps = {
  productId?: number;
  product?: dataShoes;
  color?: string;
  width: string;
  height: string;
};

export const FavoriteBtn: React.FC<FavoriteBtnProps> = ({
  productId,
  product,
  width,
  height,
  color,
}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoriteArr);
  const username = useAppSelector(user);
  const isModalOpen = useAppSelector(modal);
  const isFavorite = favorites?.some((item) => item.id === productId);

  const handleFavorite = () => {
    if (!username) {
      dispatch(setModalOpen(true));
      return;
    }
    if (isFavorite && productId) {
      dispatch(removeFavorite(productId));
    } else if (product) {
      dispatch(addToFavorite(product));
      toast.success("added to favorite", { duration: 1000 });
    }
  };
  const handleCloseModal = () => {
    dispatch(setModalOpen(false));
  };
  return (
    <>
      <motion.button whileTap={{ scale: 1.2 }} onClick={handleFavorite}>
        <Heart
          classSvg={`cursor-pointer ${
            isFavorite ? "text-[var(--color-purple)]" : "text-[#ffff]"
          }`}
          color={color}
          width={width}
          height={height}
        />
      </motion.button>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <LoginForm closeModel={handleCloseModal} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
