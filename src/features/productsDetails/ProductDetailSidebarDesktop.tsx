import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setProductId } from "../products/productShoesSlice";

import { ProductDetails } from "./ProductDetails";
import { ProductSidebarSummery } from "./ProductSidebarSummery";

export const ProductDetailSidebarDesktop = () => {
  const { productId } = useAppSelector((state) => state.productShoes);
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname) {
      dispatch(setProductId(null));
    }
  }, [dispatch, location.pathname]);
  return (
    <div className="hidden min-[1190px]:block">
      <div className="z-[1000] bg-[var(--color-gray-primary)] h-[95vh] w-[26%] fixed top-5 right-3 rounded-2xl overflow-y-scroll custom-scroll ">
        <div>
          {!productId ? (
            <ProductSidebarSummery />
          ) : (
            <ProductDetails productId={productId} />
          )}
        </div>
      </div>
    </div>
  );
};
