'use client';

import React from "react";
import type { Product } from "@/features/types";

export default function ProductCard(props: Product) {
  const handleAddToCart = () => {
    // Implement logic to add the product to the cart
  };

  return (
    <div className="product-card">
      <h2>{props.title}</h2>
      <p>Category: {props.category}</p>
      <p>Price: {props.price} NOK</p>
      <button className="button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}