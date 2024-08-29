import { useDispatch, useSelector } from "react-redux";
import { cartActions, Product, RootState } from "@/data";
import { CartProduct } from "@/ui";

import s from "./Cart.module.scss";

export const Cart = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
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

  return (
    <section className={s.root}>
      {cartProducts.map(({ id, name, imgUrl, price_usd, quantity }) => (
        <CartProduct
          key={id}
          name={name}
          imgUrl={imgUrl}
          price={String(price_usd)}
          quantity={quantity}
          onRemoveClick={() => onRemoveClick(id)}
          onDecreaseClick={() => onDecreaseClick(id)}
          onIncreaseClick={() =>
            onIncreaseClick({ id, name, imgUrl, price_usd })
          }
        />
      ))}
    </section>
  );
};
