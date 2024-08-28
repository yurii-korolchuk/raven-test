import s from "./Home.module.scss";
import { useProducts } from "./hooks/useProducts";

export const Home = () => {
  useProducts();
  return <section>Home </section>;
};
