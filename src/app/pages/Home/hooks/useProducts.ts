import { AppDispatch, RootState, fetchProducts } from "@/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useProducts = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return { products, isLoading };
};
