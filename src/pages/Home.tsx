import { Header } from "../ui/Header";
import { NavApp } from "../features/navbar/NavApp";
import { ProductDetailSidebarDesktop } from "../features/productsDetails/ProductDetailSidebarDesktop";
import { OfferBox } from "../ui/OfferBox";
import { CategoriesProduct } from "../features/products/CategoriesProduct";
import { ProductList } from "../features/products/ProductList";

export const Home = () => {
  return (
    <div className="mt-32 md:mt-36">
      <Header />
      <NavApp />
      <ProductDetailSidebarDesktop />
      <OfferBox />
      <CategoriesProduct />
      <div className="flex items-center justify-center">
        <ProductList />
      </div>
    </div>
  );
};
