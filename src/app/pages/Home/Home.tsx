import { Loader, Product } from "@/ui";
import { useProducts } from "./hooks/useProducts";

import s from "./Home.module.scss";
import { calculateProductPrice } from "@/data";

export const Home = () => {
  const { products, isLoading, rate, selectedCurrency, onAddToCart } =
    useProducts();

  if (isLoading) return <Loader />;

  return (
    <section className={s.root}>
      {products.map((product) => (
        <Product
          key={product.id}
          imgUrl={product.imgUrl}
          name={product.name}
          price={calculateProductPrice(
            product.price_usd,
            rate,
            selectedCurrency,
          )}
          onButtonClick={() => onAddToCart(product)}
        />
      ))}
    </section>
  );
};
