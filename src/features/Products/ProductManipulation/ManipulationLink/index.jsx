import React from "react";
import './style.scss';

const ManipulationLink = ({ setDisplayProducts, isActive, label, categories, setCategories, products }) => {

  const getActiveCategory = () => {
    const activeCategory = categories.find(category => category.isActive === true)
    return activeCategory.label;
  }

  const handleFilterByCategory = () => {
    setCategories(categories.map(category => {
      if (label === category.label) {
        return ({
          ...category,
          isActive: true,
        })
      }
      return ({
        ...category,
        isActive: false,
      })
    }));
    if(getActiveCategory() === 'All Products') {
      setDisplayProducts(products);
      return 0;
    } 
    const filterdProducts = products.filter(product => product.type === getActiveCategory());
    setDisplayProducts(filterdProducts);
  }

  return (
    <p
      className={`manipulation-link ${isActive ? 'active-link' : ''}`}
      onClick={handleFilterByCategory}
    >
      {label}
    </p>
  );
}

export default ManipulationLink;