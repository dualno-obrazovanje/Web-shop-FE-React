import React, { ReactElement } from "react";
import { createContext, useState } from "react";
import { ComponentProps, ContextType } from "./types";
import { Product } from "../features/Products/types";

export const StateContext = createContext<ContextType>({} as ContextType);

export const StateProvider = ({children}: ComponentProps): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  return(
    <StateContext.Provider value={{products, setProducts, cart, setCart}}>
      {children}
    </StateContext.Provider>
  );
}
