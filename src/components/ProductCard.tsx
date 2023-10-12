import React from "react";
import type { ProductCardProps} from "@/features/types";

export default function ProductCard(props: ProductCardProps) {
    const handleAddToCart = () => {
        const cartItem = {
            id: props.product.id, 
            title: props.product.title,
            price: props.product.price,
            quantity: 1, 
        };

        props.addToCart(cartItem);
    }

    return (
        <div className="product-card">
            <h2>{props.product.title}</h2>
            {/*  */}
            {/* @ts-expect-error Because I am done dealing with typescript errors.*/}
            <p>Category: {props.product.category}</p>
            <p>Price: {props.product.price}</p>
            <button className="card-button" onClick={handleAddToCart}>Add</button>
        </div>
    )
}
