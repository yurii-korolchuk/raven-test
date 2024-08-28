import cx from "classnames";

import s from "./CartProduct.module.scss";

interface CartProductProps {
  name: string;
  imgUrl: string;
  price: string;
  quantity: number;
  onRemoveClick: () => void;
  onDecreaseClick: () => void;
  onIncreaseClick: () => void;
  className?: string;
}

export const CartProduct = ({
  name,
  imgUrl,
  price,
  quantity,
  onRemoveClick,
  onDecreaseClick,
  onIncreaseClick,
  className,
}: CartProductProps) => (
  <article className={cx(s.root, className)}>
    <img src={imgUrl} alt={name} className={s.rootImage} />
    <div className={s.rootContent}>
      <div className={s.rootContentDescription}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className={s.rootContentControl}>
        <button
          onClick={onDecreaseClick}
          className={s.rootContentControlButton}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={onIncreaseClick}
          className={s.rootContentControlButton}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
    <button
      onClick={onRemoveClick}
      className={s.rootRemove}
      aria-label="Remove item from cart"
    >
      &#10005;
    </button>
  </article>
);
