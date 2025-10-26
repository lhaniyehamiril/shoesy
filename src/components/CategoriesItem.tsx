import { ReactNode } from "react";
import { brands, setBrand } from "../features/products/productShoesSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { CategoriesBtn } from "./buttons/CategoriesBtn";


const brandOption = ["Nike", "Balenciaga", "Converse"]

const CategoriesItem = ({children , className} : {children: ReactNode, className?: string}) => {
      const dispatch = useAppDispatch();
      const selectBrand = useAppSelector(brands);
  return (
     <div className={`w-full overflow-x-auto ${className} scroll-hidden`}>
          <ul className="font-wild text-[14px]  px-3 md:text-[1rem] flex gap-2 md:gap-2 items-center justify-start min-[290px]:justify-center whitespace-nowrap">
               
               <li>
                <CategoriesBtn $isActive={!selectBrand}
                onClick={() => dispatch(setBrand(''))}>
                  {children}
                </CategoriesBtn>
               </li>
              
               
              {brandOption.map(brand => 
                <li>
              <CategoriesBtn $isActive={selectBrand === brand}
               onClick={() => dispatch(setBrand(brand))}>
                {brand.toUpperCase()}
              </CategoriesBtn> 
              </li>
              )}
          </ul>
        </div>
  )
}

export default CategoriesItem
