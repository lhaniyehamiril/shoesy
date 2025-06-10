import { Header } from "../ui/Header";
import { NavApp } from "../features/navbar/NavApp";
import { CategoriesFavorite } from "../features/favorite/CategoriesFavorite";
import { FavoriteList } from "../features/favorite/FavoriteList";
import { ProductDetailSidebarDesktop } from "../features/productsDetails/ProductDetailSidebarDesktop";

export const Favorite = () => {
  return (
    <div className="pb-20">
      <Header />
      <NavApp />
      <ProductDetailSidebarDesktop />
      <CategoriesFavorite />
      <FavoriteList />
    </div>
  );
};
