import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataCart } from "../cart/CartSlice";

export interface dataOrder {
  id: number;
  name: string;
  image: string;
  mainColor?: string;
  size?: number;
  price: number;
  discount: number;
}

interface orderState {
  orders: dataCart[];
}

const initialState: orderState = {
  orders: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, actions: PayloadAction<{ orderItems: dataCart[] }>) {
      state.orders = [...state.orders, ...actions.payload.orderItems];
    },
  },
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
