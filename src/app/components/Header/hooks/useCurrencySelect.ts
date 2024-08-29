import { Currency, selectedCurrencyStorage } from "@/data";
import { useState } from "react";

const currencies: Currency[] = ["USD", "EUR", "UAH"];

export const useCurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    selectedCurrencyStorage.get() || currencies[0],
  );

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency: Currency = e.target.value as Currency;

    setSelectedCurrency(newCurrency);
    selectedCurrencyStorage.set(newCurrency);
  };

  return {
    currencies,
    selectedCurrency,
    handleChangeCurrency,
  };
};
