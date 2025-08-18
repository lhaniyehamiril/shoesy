import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { brands, setBrand } from "../products/productShoesSlice";

import { Heart } from "../../icons/Heart";
import { CategoriesBtn } from "../../ui/CategoriesBtn";

export const CategoriesFavorite = () => {
  const dispatch = useAppDispatch();
  const selectBrand = useAppSelector(brands);
  return (
    <div className="w-full overflow-x-auto mt-30 md:mt-[8.5rem] scroll-hidden">
      <ul className="font-wild px-3 text-[14px] md:text-[1rem] flex gap-2 md:gap-2 items-center justify-start min-[290px]:justify-center whitespace-nowrap">
        <li>
          <CategoriesBtn
            $isActive={!selectBrand}
            onClick={() => dispatch(setBrand(""))}
          >
            <Heart width="20" height="20" color="#333" />
          </CategoriesBtn>
        </li>
        <li>
          <CategoriesBtn
            $isActive={selectBrand === "Nike"}
            onClick={() => dispatch(setBrand("Nike"))}
          >
            NIKE
          </CategoriesBtn>
        </li>
        <li>
          <CategoriesBtn
            $isActive={selectBrand === "Balenciaga"}
            onClick={() => dispatch(setBrand("Balenciaga"))}
          >
            BALENCIAGA
          </CategoriesBtn>
        </li>
        <li>
          <CategoriesBtn
            $isActive={selectBrand === "Converse"}
            onClick={() => dispatch(setBrand("Converse"))}
          >
            CONVERSE
          </CategoriesBtn>
        </li>
      </ul>
    </div>
  );
};
