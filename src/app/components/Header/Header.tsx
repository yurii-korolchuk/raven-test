import { Link } from "react-router-dom";
import { currencies } from "@/data";
import { useCurrencySelect } from "./hooks/useCurrencySelect";
import { useTotalCartPrice } from "./hooks/useTotalCartPrice";

import s from "./Header.module.scss";

export const Header = () => {
  const { selectedCurrency, handleChangeCurrency, isLoadingRates } =
    useCurrencySelect();
  const total = useTotalCartPrice();

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
            disabled={isLoadingRates}
            value={selectedCurrency}
            onChange={handleChangeCurrency}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
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
