import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalCartPrice, RootState } from "@/data";

import s from "./Header.module.scss";
import { useCurrencySelect } from "./hooks/useCurrencySelect";

export const Header = () => {
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts,
  );
  const total = calculateTotalCartPrice(cartProducts);

  const {
    currencies,
    selectedCurrency,
    setSelectedCurrency,
    handleChangeCurrency,
  } = useCurrencySelect();

  return (
    <header className={s.root}>
      <nav className={s.rootNav}>
        <ul className={s.rootNavList}>
          <li className={s.rootNavListHome}>
            <Link className={s.rootNavListLink} to="/">
              Home
            </Link>
          </li>
          <select
            value={selectedCurrency.value}
            onChange={handleChangeCurrency}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.value}
              </option>
            ))}
          </select>
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
