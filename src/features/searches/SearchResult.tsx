import { useState } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useGetDataShoes } from "../../hooks/useGetDataShoes";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { searchTerms, setTerm } from "./searchSlice";
import { useProductRef } from "../../context/ProductRefProvider";

export const SearchResult = () => {
  const { shoes } = useGetDataShoes();
  const [activeId, setActiveId] = useState<number | null>(null);
  const term = useAppSelector(searchTerms);
  const dispatch = useAppDispatch();
  const { productRefs } = useProductRef();
  const shoesFilter = shoes?.filter((items) =>
    items.name.toLowerCase().includes(term.toLowerCase())
  );
  const handleScrollToProduct = (id: number, name: string) => {
    const ref = productRefs.current[name];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setActiveId(id);
    dispatch(setTerm(""));
  };

  return (
    <div className="flex items-center justify-center z-[1000]">
      <div
        className={`flex flex-wrap gap-3 h-32 ${
          !shoesFilter || shoesFilter.length === 0
            ? "items-center justify-center"
            : ""
        } bg-[#eee] rounded-3xl py-3 w-[90%] p-5 cursor-pointer overflow-y-scroll scroll-hidden`}
      >
        {!shoesFilter || shoesFilter.length === 0 ? (
          <span className="font-bold flex items-center justify-center">
            no result
          </span>
        ) : (
          ""
        )}
        {shoesFilter?.map((items) => (
          <button
            onClick={() => handleScrollToProduct(items.id, items.name)}
            key={items.id}
            className={`${
              activeId === items.id ? "bg-[var(--color-purple)]" : ""
            } border-[var(--color-purple)] border-dashed cursor-pointer focus:outline-none text-[13px] whitespace-nowrap py-2 px-4 border-1 h-10 rounded-full hover:bg-[var(--color-purple)]  text-[var(--color-gray-primary)]`}
          >
            {items.name}
          </button>
        ))}
      </div>
    </div>
  );
};
