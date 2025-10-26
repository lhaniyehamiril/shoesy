import { useAppSelector } from "../../hooks/useAppSelector";

import { user } from "../auth/authSlice";
import { brands } from "../products/productShoesSlice";
import { favoriteArr } from "./favoriteSlice";

import { FavoriteItems } from "./FavoriteItems";
import { Heart } from "../../icons/Heart";
import { EmptyBox } from "../../components/EmptyBox";

export const FavoriteList = () => {
  const favorites = useAppSelector(favoriteArr);
  const selectBrand = useAppSelector(brands);
  const username = useAppSelector(user);
  const FilterFavorites = selectBrand
    ? favorites?.filter((item) => item.brand === selectBrand)
    : favorites;
  return (
    <div className="flex items-center justify-center px-3">
      <ul className="flex items-center justify-center w-full md:gap-5 md:w-[40%] flex-wrap gap-3 mt-5 min-[400px]:px-3">
        {favorites?.length === 0 ? (
          <EmptyBox
            icon={<Heart width="45" height="45" color="#c387ff" />}
            name={username}
            message="favorite"
          />
        ) : (
          FilterFavorites?.map((items) => (
            <FavoriteItems items={items} key={items.id} />
          ))
        )}
      </ul>
    </div>
  );
};
