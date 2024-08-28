import s from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className={s.root}>
    <nav className={s.rootNav}>
      <ul className={s.rootNavList}>
        <li>
          <Link className={s.rootNavListLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={s.rootNavListLink} to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
