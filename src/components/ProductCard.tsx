import React from "react";
import type { ProductCardProps, CartItemProps } from "@/features/types";

export default function ProductCard(props: ProductCardProps) {
    console.log("Adding to cart:", props.product)
    
    const handleAddToCart = () => {
        const cartItem: CartItemProps = {
            title: props.product.title,
            price: props.product.price,
            quantity: 1,
        }

        console.log("Current cart:", cartItem);

        props.addToCart(cartItem);

        console.log("Current cart:", cartItem);
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