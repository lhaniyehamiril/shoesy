import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/productsDetails/ProductDetails";

export const ProductDetailsPhone = () => {
  const { id } = useParams();
  const productId = Number(id);
  return (
    <div className="min-[1190px]:hidden bg-[var(--color-gray-primary)] min-h-screen">
      <ProductDetails productId={productId} />
    </div>
  );
};
