'use client'

import React from "react";
import type { ProductCardProps } from "@/features/types";

export default function ProductCard(props: ProductCardProps) {
    const handleAddToCart = () => {
        // Implement logic to add product to cart
    }
    
    return (
        <div className="product-card">
            <h2>{props.product.title}</h2>
            <p>Category: {props.product.category}</p>
            <p>Price: {props.product.price}</p>
            <button className="card-button" onClick={handleAddToCart}>Add</button>
        </div>
    )
}