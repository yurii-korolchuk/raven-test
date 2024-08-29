import { CartProduct } from "@/ui";
import { useCart } from "./hooks/useCart";
import { calculateProductPrice } from "@/data";
import { useTotalCartPrice } from "@/app/hooks";
import { CartForm } from "./components";

import s from "./Cart.module.scss";

export const Cart = () => {
  const {
    cartProducts,
    rate,
    selectedCurrency,
    onRemoveClick,
    onDecreaseClick,
    onIncreaseClick,
  } = useCart();

  const total = useTotalCartPrice();

  return (
    <section className={s.root}>
      <div className={s.rootContainer}>
        <div className={s.rootContainerProducts}>
          {cartProducts.map(({ id, name, imgUrl, price_usd, quantity }) => (
            <CartProduct
              key={id}
              name={name}
              imgUrl={imgUrl}
              price={calculateProductPrice(price_usd, rate, selectedCurrency)}
              quantity={quantity}
              onRemoveClick={() => onRemoveClick(id)}
              onDecreaseClick={() => onDecreaseClick(id)}
              onIncreaseClick={() =>
                onIncreaseClick({ id, name, imgUrl, price_usd })
              }
            />
          ))}
          <p>Total: {total}</p>
        </div>
        <CartForm />
      </div>
    </section>
  );
};
