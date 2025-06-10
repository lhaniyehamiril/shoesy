import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface dataCart {
  id: number;
  name: string;
  image: string;
  mainColor?: string;
  size?: number;
  price: number;
  quantity?: number;
  discount: number;
}

interface cartState {
  cart: dataCart[];
}

const initialState: cartState = {
  cart: [],
};

const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, actions: PayloadAction<dataCart>) {
      const product = actions.payload;
      state.cart.push({ ...product });
    },

    updateQuantity(
      state,
      actions: PayloadAction<{ productId: number; selectedQuantity: number }>
    ) {
      const { productId, selectedQuantity } = actions.payload;
      const product = state.cart.find((items) => items.id === productId);
      if (product) {
        product.quantity = selectedQuantity;
      }
    },

    removeCart(state, actions: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== actions.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addCart, removeCart, updateQuantity, clearCart } = Cart.actions;
export default Cart.reducer;
export const cartProduct = (state: RootState) => state.cart.cart;
export const selectedQuantityById = (state: RootState, productId: number) =>
  state.cart.cart.find((items) => items.id === productId)?.quantity || 0;
