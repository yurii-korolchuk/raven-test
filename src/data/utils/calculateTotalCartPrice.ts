import { CartProduct } from "@/data";

export const calculateTotalCartPrice = (cartProducts: CartProduct[]) =>
  cartProducts.reduce(
    (total, product) => total + product.price_usd * product.quantity,
    0,
  );
