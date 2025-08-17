import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { brands, setBrand } from "./productShoesSlice";

import { Shoe } from "../../icons/Shoe";
import { CategoriesBtn } from "../../ui/CategoriesBtn";

export const CategoriesProduct = () => {
  const dispatch = useAppDispatch();
  const selectBrand = useAppSelector(brands);
  return (
    <div className="w-full overflow-x-auto mt-5 scroll-hidden">
      <ul className="font-wild text-[14px] px-3 md:text-[1rem] flex gap-2 md:gap-2 items-center justify-start min-[290px]:justify-center whitespace-nowrap">
        <li>
          <CategoriesBtn
            $isActive={!selectBrand}
            onClick={() => dispatch(setBrand(""))}
          >
            <Shoe />
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
