import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../data";

const initialState = {
  carts: [],
  productCount: 0,
  products: [],
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
    removeProductFromCart: (state, action) => {
      const filterCarts = state.carts.filter(
        (cart) => cart.id !== action.payload
      );
      state.carts = filterCarts;
      state.productCount = filterCarts.length;
    },
    getProducts: (state, action) => {
      state.products = PRODUCTS;
    },
  },
});

export const { addProductToCart, removeProductFromCart, getProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
