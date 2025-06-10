import { ReactNode } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

type authType = {
  user: ReactNode;
  isModalOpen: boolean | null;
};

const initialState: authType = {
  user: localStorage.getItem("fakeUser") || null,
  isModalOpen: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions: PayloadAction<string>) {
      state.user = actions.payload;
      localStorage.setItem("fakeUser", actions.payload);
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("fakeUser");
    },
    setModalOpen(state, actions: PayloadAction<boolean>) {
      state.isModalOpen = actions.payload;
    },
  },
});

export const { logout, login, setModalOpen } = authSlice.actions;
export default authSlice.reducer;

export const user = (state: RootState) => state.auth.user;
export const modal = (state: RootState) => state.auth.isModalOpen;
