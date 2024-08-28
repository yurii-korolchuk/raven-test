import { CartProduct } from "@/data";

export const calculateTotalCartPrice = (cartProducts: CartProduct[]): number =>
  Number(
    cartProducts
      .reduce(
        (total, product) => total + product.price_usd * product.quantity,
        0,
      )
      .toFixed(2),
  );
