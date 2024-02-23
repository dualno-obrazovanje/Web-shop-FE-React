import React, { useState } from "react";
import Button from "@mui/material/Button";
import ManipulationLink from "./ManipulationLink";
import TextField from '@mui/material/TextField';
import './style.scss';
const ProductManipulation = ({ categories, setCategories, products, setDisplayProducts }) => {
  const [showFilterOption, setShowFilterOption] = useState(false);

  const displayFilterManipulation = () => {
    setShowFilterOption(!showFilterOption);
  }

  return (
    <>
      <div className="ws-product-manipulation-container">
        <div>
          {categories.map(category =>
            <ManipulationLink
              isActive={category.isActive}
              label={category.label}
              categories={categories}
              setCategories={setCategories}
              products={products}
              setDisplayProducts={setDisplayProducts}              
            />)}
        </div>
        <Button variant="contained" className="ws-action-button" onClick={displayFilterManipulation}>Filter</Button>
      </div>

      {showFilterOption &&
        <div className="ws-product-filter-container">
          <div>
            <TextField
              id="outlined-basic"
              label="Min price"
              variant="outlined"
              type="number"
            />
            <TextField
              id="outlined-basic"
              label="Max price"
              variant="outlined"
              type="number"
            />
          </div>
          <Button variant="contained" className="ws-action-button">Apply</Button>
        </div>
      }
    </>

  )
}

export default ProductManipulation;