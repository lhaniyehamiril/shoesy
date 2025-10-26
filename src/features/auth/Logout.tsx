import { clearCart } from "../cart/CartSlice";
import { clearFavorite } from "../favorite/favoriteSlice";
import { logout } from "./authSlice";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Exit } from "../../icons/Exit";

export const Logout = () => {
  const dispatch = useAppDispatch();
  
  const handleLogOut = () => {
    dispatch(logout());
    dispatch(clearFavorite());
    dispatch(clearCart());
  };
  return (
    <button
      onClick={handleLogOut}
      className="cursor-pointer hover:fill-[var(--color-purple)]"
    >
      <Exit />
    </button>
  );
};
