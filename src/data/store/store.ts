import { configureStore } from "@reduxjs/toolkit";
import { cartMiddleware, cartSlice } from "./cartSlice";
import { productsSlice } from "./productsSlice";
import { currencyMiddleware, currencySlice } from "./currencySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    currency: currencySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cartMiddleware.middleware,
      currencyMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./cartSlice";
export * from "./productsSlice";
export * from "./currencySlice";
