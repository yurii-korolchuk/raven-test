import { CartState } from "../store/store";

export const cartStateStorage = {
  set(value: CartState): void {
    localStorage.setItem("cart", JSON.stringify(value));
  },
  get(): CartState | null {
    const item = localStorage.getItem("cart");
    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
};
