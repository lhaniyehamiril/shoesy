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
    return (
      <div className="mt-5">
        <Spinner />
      </div>
    );
  if (errorShoes) return <span>error</span>;

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence>
        <ul className="flex items-center justify-center pb-30 md:gap-5 md:w-[58%] min-[790px]:w-[400px] max-[330px]:w-full min-[506px]:px-8 min-[707px]:px-6 flex-wrap gap-3 mt-7 md:pr-20">
          {filterShoes?.map((items) => (
            <ProductItems items={items} key={items.id} />
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
};
