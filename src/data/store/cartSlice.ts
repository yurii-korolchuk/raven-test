import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, CartProduct } from "@/data";

interface CartState {
  cartProducts: CartProduct[];
}

const initialState: CartState = {
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
  },
});

export const cartActions = cartSlice.actions;
