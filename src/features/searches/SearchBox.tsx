import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { searchTerms, setTerm } from "./searchSlice";

export const SearchBox = () => {
  const dispatch = useAppDispatch();
  const term = useAppSelector(searchTerms);

  return (
    <div className="flex justify-center w-full">
      <div className="relative w-[90%] md:w-full flex items-center bg-[var(--color-gray-primary)] rounded-2xl">
        <input
          id="search"
          type="text"
          placeholder="search"
          value={term}
          onChange={(e) => dispatch(setTerm(e.target.value))}
          className="w-full outline-none border-none text-white bg-transparent 
                   p-[14px] rounded-2xl pr-12 placeholder:text-white placeholder:text-[0.96rem]"
        />
        <div className="absolute right-[9px]">
          <svg
            className="fill-[var(--color-purple)]"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z"
                fill=""
              />
              <path
                d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                fill=""
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
