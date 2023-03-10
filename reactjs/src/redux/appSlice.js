import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  name: "Arjun",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("increment", state, action);
      state.counter += action.payload;
    },
    changeName: (state) => {
      state.name = "Shyam";
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeName } =
  appSlice.actions;

export default appSlice.reducer;
