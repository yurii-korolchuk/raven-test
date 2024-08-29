import { AppDispatch, RootState, cartActions, fetchProducts } from "@/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/data";

export const useProducts = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products,
  );
  const { rate, selectedCurrency } = useSelector(
    (state: RootState) => state.currency,
  );

  const dispatch = useDispatch<AppDispatch>();

  const onAddToCart = (product: Product) => {
    dispatch(cartActions.addToCart(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return { products, rate, isLoading, selectedCurrency, onAddToCart };
};
