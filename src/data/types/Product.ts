export interface Product {
  id: string;
  name: string;
  imgUrl: string;
  price_usd: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
