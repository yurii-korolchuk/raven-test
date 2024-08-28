import { Loader, Product } from "@/ui";
import { useProducts } from "./hooks/useProducts";

import s from "./Home.module.scss";

export const Home = () => {
  const { products, isLoading } = useProducts();

  const onAddToCart = () => {
    // TODO: add functionality
  };

  if (isLoading) return <Loader />;

  return (
    <section className={s.root}>
      {products.map(({ id, imgUrl, name, price_usd }) => (
        <Product
          key={id}
          imgUrl={imgUrl}
          name={name}
          price={String(price_usd)}
          onButtonClick={onAddToCart}
        />
      ))}
    </section>
  );
};
