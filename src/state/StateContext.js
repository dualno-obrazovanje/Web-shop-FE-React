import React from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  }

  const addProductAtFirstPlace = (newProduct) => {
    setProducts([newProduct, ...products]);
  }

  return(
    <StateContext.Provider value={{products, addProduct, addProductAtFirstPlace}}>
      {children}
    </StateContext.Provider>
  );
}
