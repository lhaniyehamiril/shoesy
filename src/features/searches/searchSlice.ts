import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface searchState {
  term: string;
}

const initialState: searchState = {
  term: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTerm(state, actions: PayloadAction<string>) {
      state.term = actions.payload;
    },
  },
});

export const { setTerm } = SearchSlice.actions;
export default SearchSlice.reducer;
export const searchTerms = (state: RootState) => state.search.term;
