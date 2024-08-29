import {
  createAsyncThunk,
  createListenerMiddleware,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Convert } from "easy-currencies";
import { Currency } from "../types";
import { selectedCurrencyStorage } from "../storage";
import { RootState } from "./store";

type ConvertRate = Record<Currency, number>;

export const fetchCurrencyRates = createAsyncThunk(
  "currency/fetchCurrencyRates",
  async () => {
    const convert = await Convert().from("USD").fetch();
    return convert.rates as ConvertRate;
  },
);

interface CurrencyState {
  selectedCurrency: Currency;
  rates: ConvertRate | null;
  rate: number;
  isLoadingRates: boolean;
}

const initialState: CurrencyState = {
  selectedCurrency: selectedCurrencyStorage.get() || "USD",
  rates: null,
  rate: 1,
  isLoadingRates: false,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currency>) => {
      state.selectedCurrency = action.payload;
      state.rate = state.rates ? state.rates[action.payload] : 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRates.pending, (state) => {
        state.isLoadingRates = true;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.rates = action.payload;
        state.rate = action.payload[state.selectedCurrency];
        state.isLoadingRates = false;
      });
  },
});

export const currencyMiddleware = createListenerMiddleware();

currencyMiddleware.startListening({
  actionCreator: currencySlice.actions.changeCurrency,
  effect: (_, listenerApi) => {
    selectedCurrencyStorage.set(
      (listenerApi.getState() as RootState).currency.selectedCurrency,
    );
  },
});

export const currencyActions = currencySlice.actions;
