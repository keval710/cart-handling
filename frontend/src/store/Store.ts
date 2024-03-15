import { configureStore } from "@reduxjs/toolkit";
// import fetchProductReducer from "./slice/fetchProductSlice";
import cartReducer from "./slice/cartSlice";
import { api } from "./api/fetchAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // product: fetchProductReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
