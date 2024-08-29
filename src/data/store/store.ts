import { configureStore } from "@reduxjs/toolkit";
import { cartMiddleware, cartSlice } from "./cartSlice";
import { productsSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./cartSlice";
export * from "./productsSlice";
