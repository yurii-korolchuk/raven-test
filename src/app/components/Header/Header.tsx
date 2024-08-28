import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "@/data";

import s from "./Header.module.scss";

export const Header = () => {
  const total = useSelector((state: RootState) => state.cart.total);

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
