import React from "react";
import ProductTile from "./ProductTile";
import { Button } from "@mui/material";
import "./style.scss"

const Cart = ({ cartItems, handleModalOpening }) => {
  const handleClick = () => {
    /*
      spremiti backend axios call
        axios.post('...products/buy', { body: {
          ...cartItems
        }})
    */
   console.log('handled backend call');
  };

  return (
    <div className="ws-cart-modal-container">
      <div className="flex-container">
        <div className="flex-child-list-of-products">
          <div className="ws-cart-modal-exit">
            <p onClick={() => handleModalOpening(null)}>
              {`< Continue Shoping`}
            </p>
          </div>
          <div className="ws-cart-modal-header-description">
            <p>{`Shopping cart`}</p>
            <p>{`you have ${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'} in your cart`}</p>
          </div>
          <div className="ws-cart-modal-added-products-container">
            {cartItems.map((item) =>
              <ProductTile product={item} />
            )}
          </div>
          <div className="buy-button-container">
            <Button variant="outlined" onClick={handleClick}>Buy now</Button>
          </div>
        </div>
        <div className="flex-child-card-details">
          <div></div>
        </div>
        <div className="flex-child-pay-on-delivery">
          <div></div>
        </div>
      </div>

    </div>
  );
};

export default Cart;