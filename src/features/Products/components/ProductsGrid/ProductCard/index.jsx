import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import "./style.scss";
import { StateContext } from "../../../../../state/StateContext";
import img from "../../../../../resources/product.png";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(StateContext);

  console.log(product.lager);

  const onClickAddToCart = () => {
    handleAddToCart(product.name, product.type, product.price);
  };

  return (
    <Card className="ws-product-card">
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={img}
        title="Product img"
      />
      <CardContent className="ws-product-card-content">
        <div className="ws-product-card-hover-banner">
          <Chip
            label={`${product.lager} left`}
            variant="outlined"
            color={product.lager > 0 ? "info" : "error"}
          />
        </div>
        <h5>{product.name}</h5>
        <div className="ws-product-type-price">
          <p>{product.type}</p>
          <p className="ws-product-price">{`$${product.price}`}</p>
        </div>
        <div>
          <Button
            size="small"
            onClick={onClickAddToCart}
            variant={product.lager > 0 ? "outlined" : "text"}
            disabled={product.lager > 0 ? false : true}
          >
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
