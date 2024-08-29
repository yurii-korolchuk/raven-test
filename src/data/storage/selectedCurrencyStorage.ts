import { Currency } from "../types";

export const selectedCurrencyStorage = {
  set(value: Currency): void {
    localStorage.setItem("currency", JSON.stringify(value));
  },
  get(): Currency | null {
    const item = localStorage.getItem("currency");
    if (item) {
      return JSON.parse(item);
    }

    return null;
  },
};
