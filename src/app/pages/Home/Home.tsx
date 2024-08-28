import { Loader, Product } from "@/ui";
import { useProducts } from "./hooks/useProducts";
import { useDispatch } from "react-redux";
import { Product as ProductType } from "@/data";
import { cartActions } from "@/data";

import s from "./Home.module.scss";

export const Home = () => {
  const { products, isLoading } = useProducts();
  const dispatch = useDispatch();

  const onAddToCart = (product: ProductType) => {
    dispatch(cartActions.addToCart(product));
  };

  if (isLoading) return <Loader />;

  return (
    <section className={s.root}>
      {products.map((product) => (
        <Product
          key={product.id}
          imgUrl={product.imgUrl}
          name={product.name}
          price={String(product.price_usd)}
          onButtonClick={() => onAddToCart(product)}
        />
      ))}
    </section>
  );
};
