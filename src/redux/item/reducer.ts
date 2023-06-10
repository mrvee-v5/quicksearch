import { createSlice } from "@reduxjs/toolkit";
import { ItemProp, ItemType } from "./types";

const initialState: ItemType = {
  items: [],
  loading: false,
};

export const itemReducer = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action: { payload: ItemProp[] }) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setItem, setLoading } = itemReducer.actions;

export default itemReducer.reducer;
