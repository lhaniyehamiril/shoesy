import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface shoesState {
  selectBrand: string | null;
  productId: number | null;
}

const initialState: shoesState = {
  selectBrand: null,
  productId: null,
};

const productShoesReducer = createSlice({
  name: "productShoes",
  initialState,
  reducers: {
    setBrand(state, actions: PayloadAction<string>) {
      state.selectBrand = actions.payload;
    },
    setProductId(state, actions: PayloadAction<number | null>) {
      state.productId = actions.payload;
    },
  },
});

export const { setBrand, setProductId } = productShoesReducer.actions;
export default productShoesReducer.reducer;

export const brands = (state: RootState) => state.productShoes.selectBrand;
