import { useSelector } from "react-redux";
import {
  calculateProductPrice,
  calculateTotalCartPrice,
  RootState,
} from "@/data";

export const useTotalCartPrice = (): string => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );

  const { rate, selectedCurrency } = useSelector(
    (state: RootState) => state.currency,
  );

  const totalUsd = calculateTotalCartPrice(cartProducts);
  const total = calculateProductPrice(totalUsd, rate, selectedCurrency);

  return total;
};
