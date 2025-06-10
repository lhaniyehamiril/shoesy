import { AnimatePresence } from "motion/react";

import { useGetDataShoes } from "../../hooks/useGetDataShoes";
import { useAppSelector } from "../../hooks/useAppSelector";
import { brands } from "./productShoesSlice";

import { Spinner } from "../../ui/Spinner";
import { ProductItems } from "./ProductItems";
export const ProductList = () => {
  const { shoes, errorShoes, loadingShoes } = useGetDataShoes();
  const selectBrand = useAppSelector(brands);
  const filterShoes = selectBrand
    ? shoes?.filter((item) => item.brand === selectBrand)
    : shoes;

  if (loadingShoes)
    return <Spinner borderColor="border-[var(--color-purple)]" />;
  if (errorShoes) return <span>error</span>;

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence>
        <ul className="flex items-center justify-center pb-30 md:gap-5 md:w-[58%] min-[790px]:w-[400px] max-[330px]:w-full flex-wrap gap-3 mt-7 min-[400px]:px-8 md:pr-20">
          {filterShoes?.map((items) => (
            <ProductItems items={items} key={items.id} />
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
};
