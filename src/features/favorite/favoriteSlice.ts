import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataShoes } from "../../services/type";
import { RootState } from "../../store/store";
interface favoriteState {
  favorites: dataShoes[] | undefined;
}

const initialState: favoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, actions: PayloadAction<dataShoes>) {
      const product = actions.payload;
      const isExist = state.favorites?.some((item) => item.id === product?.id);
      if (!isExist) {
        state.favorites?.push(actions.payload);
      }
    },

    removeFavorite(state, actions: PayloadAction<number>) {
      state.favorites = state.favorites?.filter(
        (item) => item.id !== actions.payload
      );
    },

    clearFavorite(state) {
      state.favorites = [];
    },
  },
});

export const { addToFavorite, removeFavorite, clearFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;

export const favoriteArr = (state: RootState) => state.favorite.favorites;
