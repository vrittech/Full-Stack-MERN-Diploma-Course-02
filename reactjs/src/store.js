import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./redux/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
