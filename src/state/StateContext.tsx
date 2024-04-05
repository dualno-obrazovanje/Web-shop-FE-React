import React, { ReactElement } from "react";
import { createContext, useState } from "react";
import { ComponentProps, ContextType } from "./types";
import { Product, ProductType, Cart } from "../features/Products/types";

export const StateContext = createContext<ContextType>({} as ContextType);

export const StateProvider = ({children}: ComponentProps): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [categories, setCategories] = useState<ProductType[]>([]);

  const addProduct = (
    newProduct: Product
  ) => {
    setProducts([...products, newProduct]);
  };
  
  const handleAddToCart = (
    clickedProductName: string,
    clickedProductType: ProductType,
    clickedPrice: number,
  ) => {
    setProducts(
      products.map((product) => {
        if (clickedProductName === product.name && clickedProductType === product.type) {
          return {
            ...product,
            lager: --product.lager,
          };
        }
        return product;
      })
    );
  
    const isAlreadyAddedToCart = !!cart.find(
      (cartItem) => cartItem.name === clickedProductName && cartItem.type === clickedProductType
    );
  
    if (isAlreadyAddedToCart) {
      cart.map((cartItem) => {
        if (cartItem.name === clickedProductName && cartItem.type === clickedProductType) {
          return {
            ...cartItem,
            quantity: ++cartItem.quantity,
          };
        }
        return cartItem;
      });
    } else {
      setCart([
        ...cart, {
          name: clickedProductName,
          type: clickedProductType,
          price: clickedPrice,
          quantity: 1,
        }
      ]);
    }
  };

  const customState = {
    products,
    setProducts,
    cart,
    setCart,
    categories,
    setCategories,
    addProduct,
    handleAddToCart,
  } 

  return(
    <StateContext.Provider value={{...customState}}>
      {children}
    </StateContext.Provider>
  );
}
