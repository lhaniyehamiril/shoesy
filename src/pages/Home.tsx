import { Header } from "../components/Header";
import { OfferBox } from "../components/OfferBox";
import { Footer } from "../components/Footer";

import { NavApp } from "../features/navbar/NavApp";
import { ProductDetailSidebarDesktop } from "../features/productsDetails/ProductDetailSidebarDesktop";
import { CategoriesProduct } from "../features/products/CategoriesProduct";
import { ProductList } from "../features/products/ProductList";


export default function Home() {
  return (
    <div className="mt-32 md:mt-36 relative mb-20 md:mb-0 min-h-screen">
      <Header />
      <NavApp />
      <ProductDetailSidebarDesktop />
      <OfferBox />
      <CategoriesProduct />
      <div className="flex items-center justify-center">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
