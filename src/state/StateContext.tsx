import React, { ReactElement } from "react";
import { createContext, useState } from "react";
import {useNavigate, NavigateFunction} from 'react-router-dom';
import { Product, ComponentProps } from "./types";

export const StateContext = createContext({});

export const StateProvider = ({children}: ComponentProps): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  }

  const addProductAtFirstPlace = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  }

  return(
    <StateContext.Provider value={{products, addProduct, addProductAtFirstPlace}}>
      {children}
    </StateContext.Provider>
  );
}
