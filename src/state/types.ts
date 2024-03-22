import { Dispatch, SetStateAction } from "react";
import { Product } from "../features/Products/types";

export type ContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};

export type ComponentProps = {
  children: JSX.Element;
};
