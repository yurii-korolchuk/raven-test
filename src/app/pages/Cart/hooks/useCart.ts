import { useDispatch, useSelector } from "react-redux";
import { cartActions, Product, RootState } from "@/data";

export const useCart = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );
  const { rate, selectedCurrency } = useSelector(
    (state: RootState) => state.currency,
  );

  const dispatch = useDispatch();

  const onRemoveClick = (id: string) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const onDecreaseClick = (id: string) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const onIncreaseClick = (product: Product) => {
    dispatch(cartActions.addToCart(product));
  };

  return {
    cartProducts,
    rate,
    selectedCurrency,
    onRemoveClick,
    onDecreaseClick,
    onIncreaseClick,
  };
};
