import { Header } from "../ui/Header";
import { NavApp } from "../features/navbar/NavApp";
import { ProductDetailSidebarDesktop } from "../features/productsDetails/ProductDetailSidebarDesktop";
import { OfferBox } from "../ui/OfferBox";
import { CategoriesProduct } from "../features/products/CategoriesProduct";
import { ProductList } from "../features/products/ProductList";
import { Footer } from "../ui/Footer";
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
