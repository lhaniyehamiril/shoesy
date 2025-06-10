import { useAppSelector } from "../../hooks/useAppSelector";
import { searchTerms } from "./searchSlice";

import { SearchBox } from "./SearchBox";
import { SearchResult } from "./SearchResult";

export const Search = () => {
  const isActiveSearch = useAppSelector(searchTerms);
  return (
    <div className="flex flex-col w-full md:w-[40%] gap-3">
      <SearchBox />
      {isActiveSearch && <SearchResult />}
    </div>
  );
};
