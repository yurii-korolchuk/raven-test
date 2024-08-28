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
    <button className={s.rootOverlay} onClick={onButtonClick}>
      <span className={s.rootOverlayText}>Add to cart</span>
    </button>
  </article>
);
