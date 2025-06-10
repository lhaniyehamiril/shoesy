import { configureStore } from "@reduxjs/toolkit";
import productShoesReducer from "../features/products/productShoesSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";
import cartReducer from "../features/cart/CartSlice";
import orderReducer from "../features/order/orderSlice";
import authReducer from "../features/auth/authSlice";
import searchReducer from "../features/searches/searchSlice";

export const store = configureStore({
  reducer: {
    productShoes: productShoesReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
