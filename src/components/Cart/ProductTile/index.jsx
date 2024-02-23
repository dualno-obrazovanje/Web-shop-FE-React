import React from "react";
import "./style.scss";
import CustomHeadingIcon from "../../../shared/CustomHeadingIcon";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductTile = ({ product }) => {
  return (
    <div className="ws-product-tile-container">
      <div className="tile-image-container">
      <img src={product.img} alt="" />
      </div>
      <div className="tile-title">
      <div>{product.name}</div>
      <div>{product.type}</div>
      </div>
    <div className="quantity-manipulation">
    <div>
      {product.quantity}
    </div>
      <div className="quantity-button">
      <CustomHeadingIcon functionalIcon CustomIcon={KeyboardArrowUpIcon}/>
      <CustomHeadingIcon functionalIcon CustomIcon={KeyboardArrowDownIcon}/>
      </div>
    </div>

      <div className="tile-price">
        {`$ ${Math.round(product.price * product.quantity * 100) / 100}`}
      </div>
      <div className="tile-delete">
      <CustomHeadingIcon functionalIcon CustomIcon={DeleteIcon}/>
      </div>
    </div>
  );
};

export default ProductTile;