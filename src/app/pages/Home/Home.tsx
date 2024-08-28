import { Loader } from "@/ui";
import s from "./Home.module.scss";
import { useProducts } from "./hooks/useProducts";

export const Home = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Loader />;

  return <section></section>;
};
