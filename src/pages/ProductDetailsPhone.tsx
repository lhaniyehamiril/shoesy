import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/productsDetails/ProductDetails";

export default function ProductDetailsPhone() {
  const { id } = useParams();
  const productId = Number(id);
  return (
    <div className="min-[1190px]:hidden bg-[#222] min-h-screen">
      <ProductDetails productId={productId} />
    </div>
  );
}
