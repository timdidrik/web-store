'use client';

import React from "react";
import type { ProductCard } from "@/features/types";

export default function ProductCard(props: ProductCard) {
  const handleAddToCart = () => {
    // Implement logic to add the product to the cart
  };

  // props.product
  return (
    <div className="product-card">
      <h2>{props.product.title}</h2>
      <p>Category: {props.product.category}</p>
      <p>Price: {props.product.price} NOK</p>
      <button className="button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}