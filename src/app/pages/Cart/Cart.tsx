import { useSelector } from "react-redux";
import { RootState } from "@/data";
import { CartProduct } from "@/ui";

import s from "./Cart.module.scss";

export const Cart = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );

  const onRemoveClick = () => {};

  const onDecreaseClick = () => {};

  const onIncreaseClick = () => {};

  return (
    <section className={s.root}>
      {cartProducts.map((product) => (
        <CartProduct
          key={product.id}
          name={product.name}
          imgUrl={product.imgUrl}
          price={String(product.price_usd)}
          quantity={product.quantity}
          onRemoveClick={onRemoveClick}
          onDecreaseClick={onDecreaseClick}
          onIncreaseClick={onIncreaseClick}
        />
      ))}
    </section>
  );
};
