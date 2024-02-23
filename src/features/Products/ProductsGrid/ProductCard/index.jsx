import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import './style.scss'

const ProductCard = ({ img, productName, productType, price, lager, products, setProducts, cart, setCart }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true)
  };

  const handleMouseOut = () => {
    setIsHovering(false)
  };

  const handleAddToCart = () => {
    setProducts(products.map(product => {
      if (productName === product.name && productType === product.type) {
        return ({
          ...product,
          lager: --lager,
        });
      }
      return product;
    }));

    const isAlreadyAddedToCart = !!cart.find(cartItem => cartItem.name === productName && cartItem.type === productType);
    if (isAlreadyAddedToCart) {
      cart.map(cartItem => {
        if (cartItem.name === productName && cartItem.type === productType) {
          return ({
            ...cartItem,
            quantity: ++cartItem.quantity,
          })
        }
        return cartItem;
      })
    } else {
      cart.push({
        img,
        name: productName,
        type: productType,
        price,
        quantity: 1,
      })
    }
  }

  return (
    <Card
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="ws-product-card"
    >
      <CardMedia
        component="img"
        image={img}
      />
      {isHovering &&
        <div className="ws-product-card-hover-banner">
          <Chip label={`${lager} left`} variant="outlined" color={lager > 0 ? 'info' : 'error'} />
          <Button size="small" onClick={handleAddToCart} variant={lager > 0 ? 'outlined' : 'text'} disabled={lager > 0 ? false : true}>Add to cart</Button>
        </div>
      }
      <CardContent>
        <h5>{productName}</h5>
        <div className="ws-product-type-price">
          <p>{productType}</p>
          <p className="ws-product-price">{`$${price}`}</p>
        </div>
      </CardContent>
    </Card>
  );
}


export default ProductCard;