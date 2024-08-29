import {
  createListenerMiddleware,
  createSlice,
  isAnyOf,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Product, CartProduct, RootState, cartStateStorage } from "@/data";

export interface CartState {
  cartProducts: CartProduct[];
}

const initialState: CartState = cartStateStorage.get() || {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (productIndex === -1) {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartProducts[productIndex].quantity += 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload,
      );
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload,
      );
      if (state.cartProducts[productIndex].quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== action.payload,
        );
      } else {
        state.cartProducts[productIndex].quantity -= 1;
      }
    },
  },
});

export const cartMiddleware = createListenerMiddleware();

cartMiddleware.startListening({
  matcher: isAnyOf(
    cartSlice.actions.addToCart,
    cartSlice.actions.removeFromCart,
    cartSlice.actions.decreaseQuantity,
  ),
  effect: (_, listenerApi) => {
    cartStateStorage.set((listenerApi.getState() as RootState).cart);
  },
});

export const cartActions = cartSlice.actions;
