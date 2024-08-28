import {
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  Product,
  CartProduct,
  calculateTotalCartPrice,
  storage,
  RootState,
} from "@/data";

interface CartState {
  cartProducts: CartProduct[];
  total: number;
}

const initialState: CartState = storage.get("cart") || {
  cartProducts: [],
  total: 0,
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

      state.total = calculateTotalCartPrice(state.cartProducts);
    },
  },
});

export const cartMiddleware = createListenerMiddleware();

cartMiddleware.startListening({
  actionCreator: cartSlice.actions.addToCart,
  effect: (_, listenerApi) => {
    storage.set("cart", (listenerApi.getState() as RootState).cart);
  },
});

export const cartActions = cartSlice.actions;
