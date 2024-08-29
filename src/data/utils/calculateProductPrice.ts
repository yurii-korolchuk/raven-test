export const calculateProductPrice = (
  price_usd: number,
  rate: number,
  currency: string,
): string => (price_usd * rate).toFixed(2) + " " + currency;
