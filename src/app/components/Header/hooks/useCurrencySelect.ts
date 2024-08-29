import {
  AppDispatch,
  Currency,
  currencyActions,
  fetchCurrencyRates,
  RootState,
} from "@/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCurrencySelect = () => {
  const { selectedCurrency, isLoadingRates } = useSelector(
    (state: RootState) => state.currency,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, []);

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency: Currency = e.target.value as Currency;

    dispatch(currencyActions.changeCurrency(newCurrency));
  };

  return {
    selectedCurrency,
    handleChangeCurrency,
    isLoadingRates,
  };
};
