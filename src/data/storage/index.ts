import { CartState } from "../store/store";
import { Currency, UserInfo } from "../types";

export const createStorage = <Value>(key: string) => {
  return {
    set(value: Value): void {
      localStorage.setItem(key, JSON.stringify(value));
    },
    get(): Value | null {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }

      return null;
    },
  };
};

export const cartStateStorage = createStorage<CartState>("cart");
export const selectedCurrencyStorage = createStorage<Currency>("currency");
export const userInfoStorage = createStorage<UserInfo>("user");
