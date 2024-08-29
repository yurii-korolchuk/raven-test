import { Currency, selectedCurrencyStorage } from "@/data";
import { useState } from "react";

const currencies: Currency[] = [
  {
    value: "USD",
  },
  {
    value: "EUR",
  },
  {
    value: "UAH",
  },
];

export const useCurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    selectedCurrencyStorage.get() || currencies[0],
  );

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency: Currency = { value: e.target.value };

    setSelectedCurrency(newCurrency);
    selectedCurrencyStorage.set(newCurrency);
  };

  return {
    currencies,
    selectedCurrency,
    setSelectedCurrency,
    handleChangeCurrency,
  };
};
