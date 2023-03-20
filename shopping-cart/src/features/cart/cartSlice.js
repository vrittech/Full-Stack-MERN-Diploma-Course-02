import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  productCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
      state.productCount = state.carts.length;
      // [[],action.payload] => [[],{}] =>
      // [...[],{}] => [{},{},{}]
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
