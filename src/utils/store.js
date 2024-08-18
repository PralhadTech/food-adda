import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  // only reducer are getting here see eport in cart slice
  reducer: {
    cart: cartSlice,
    // if you have more slices ex. userSlice
    // user: userSlice,
  },
});

export default store;
