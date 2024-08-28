import { Product, productsCollectionsRef } from "@/data";
import { getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const getProducts = async () => {
  return await getDocs(productsCollectionsRef);
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((data) => {
        const filteredData = data.docs.map((doc) => doc.data());

        setProducts(filteredData);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        throw new Error(error.message);
      });
  }, []);

  return { products, isLoading };
};
