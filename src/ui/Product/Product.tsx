import s from "./Product.module.scss";
import cx from "classnames";

interface ProductProps {
  name: string;
  imgUrl: string;
  price: string;
  onButtonClick: () => void;
  className?: string;
}

export const Product = ({
  name,
  imgUrl,
  price,
  className,
  onButtonClick,
}: ProductProps) => (
  <article className={cx(s.root, className)}>
    <img src={imgUrl} alt={name} className={s.rootImage} />
    <div className={s.rootDescription}>
      <p className={s.rootDescriptionText}>{name}</p>
      <p className={cx(s.rootDescriptionText, s.rootDescriptionPrice)}>
        ${price}
      </p>
    </div>
    <div className={s.rootOverlay}>
      <button onClick={onButtonClick} className={s.rootOverlayButton}>
        Add to cart
      </button>
    </div>
  </article>
);
