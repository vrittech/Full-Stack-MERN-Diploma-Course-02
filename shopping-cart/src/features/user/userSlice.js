import { createSlice } from "@reduxjs/toolkit";
import getUserDetailsFromToken from "../../helpers/jwt";
import isEmpty from "lodash/isEmpty";
import { load } from "react-cookies";

const initialState = {
  userData: {},
  tokens: {},
  isUserLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { accessToken } = action?.payload;
      const userData = getUserDetailsFromToken(accessToken);
      state.tokens = {
        accessToken: accessToken,
      };
      state.isUserLoggedIn = !isEmpty(userData);
      state.userData = userData;
    },
    getUserData: (state) => {
      const accessToken = load("accessToken");
      const userData = getUserDetailsFromToken(accessToken);
      state.tokens = {
        accessToken: accessToken,
      };
      state.isUserLoggedIn = !isEmpty(userData);
      state.userData = userData;
    },
    userLogout: (state) => {
      state.userData = {};
      state.isUserLoggedIn = false;
    },
  },
});

export const { setUserData, getUserData, userLogout } = userSlice.actions;

export default userSlice.reducer;
