import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalCartPrice, RootState } from "@/data";

import s from "./Header.module.scss";

export const Header = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );
  const total = calculateTotalCartPrice(cartProducts);

  return (
    <header className={s.root}>
      <nav className={s.rootNav}>
        <ul className={s.rootNavList}>
          <li className={s.rootNavListHome}>
            <Link className={s.rootNavListLink} to="/">
              Home
            </Link>
          </li>
          {total ? <li className={s.rootNavListTotal}>{total}</li> : null}
          <li>
            <Link className={s.rootNavListLink} to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
