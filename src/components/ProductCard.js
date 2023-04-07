import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart, cartItems, products }) => {
  return (
    <Card className="card">
        <img src={product.image} alt={product.name}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" style={{ fontWeight: 600 }} component="div">
          ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly/>
      </CardContent>
      <CardActions className="card-actions">
        <Button onClick={()=>{handleAddToCart(localStorage.getItem("token"), cartItems, products, product["_id"],1, true)}} style={{width:"100%"}} className="card-button" variant="contained"><AddShoppingCartOutlined/>ADD TO CART</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
