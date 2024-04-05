import React, { useContext, useEffect, useState } from "react";
import ProductsGrid from './ProductsGrid';
import ProductManipulation from "./ProductManipulation";
import { mockedProductData } from "./mockedProductData";
import './style.scss';
import { StateContext } from "../../../state/StateContext";

const Products = () => {
  const {setCategories, setProducts} = useContext(StateContext);

  useEffect(() => {
    // place for backend call
    // mocked backend response
    const mockedCategories = ['Phone', 'Computer', 'Photo', 'Accessories'];

    const resturucterCategories = (activeCategory = 'All Products') => {
      mockedCategories.unshift('All Products');
      const structuredCategories = mockedCategories.map(
        category => {
          return { isActive: false, label: category }
        }
      );
      return setActvieCategories(structuredCategories, activeCategory);
    }
    setProducts(mockedProductData);
    setCategories(resturucterCategories());
  }, [setProducts]);

  const setActvieCategories = (categories, activeCategory) => {
    return categories.map(category =>
      category.label === activeCategory ?
        { ...category, isActive: true } : { ...category, isActive: false }
    );
  }

  return (
    <div className="ws-product-content-container">
      <h1>Products</h1>
      {/* <ProductManipulation
        categories={categories}
        setCategories={setCategories}
        products={products}
      /> */}
      <ProductsGrid />
    </div>
  );
}

export default Products;