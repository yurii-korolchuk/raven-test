import s from "./Header.module.scss";

export const Header = () => (
  <header className={s.root}>
    <nav className={s.rootNav}>
      <ul className={s.rootNavList}>
        <li>HOME</li>
        <li>CART</li>
      </ul>
    </nav>
  </header>
);
