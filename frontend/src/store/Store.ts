import { configureStore } from "@reduxjs/toolkit";
import fetchProductReducer from "./slice/fetchProductSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    product: fetchProductReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
