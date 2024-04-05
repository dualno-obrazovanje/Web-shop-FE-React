import { Dispatch, SetStateAction } from "react";
import { Product, Cart, ProductType } from "../features/Products/types";

export type ContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  categories: ProductType[];
  setCategories: Dispatch<SetStateAction<ProductType[]>>;
  addProduct: (
    newProduct: Product
  ) => void;
  handleAddToCart: (
    clickedProductName: string,
    clickedProductType: ProductType,
    clickedPrice: number
  ) => void;
};

export type ComponentProps = {
  children: JSX.Element;
};
