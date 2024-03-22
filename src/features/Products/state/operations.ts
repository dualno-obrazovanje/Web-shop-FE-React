import { Dispatch, SetStateAction } from "react";
import { Product } from "../types";

export const addProduct = (
  setProducts: Dispatch<SetStateAction<Product[]>>,
  products: Product[],
  newProduct: Product
) => {
  setProducts([...products, newProduct]);
};

// export const addProductAtFirstPlace = (newProduct: Product) => {
//   setProducts([newProduct, ...products]);
// };
