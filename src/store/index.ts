import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice.ts";

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
