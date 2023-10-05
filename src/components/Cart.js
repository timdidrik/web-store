'use client';

import { useState } from "react";
import CartButton from "./CartButton";

export default function Cart() {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantityOfProduct = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantityOfProduct = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const removeProduct = () => {
        setQuantity(0);
    }

    const buyProduct = () => {
        console.log('current cart list')
    }

    return (
        <div className="cart">
            <p>Quantity: {quantity}</p>
            <CartButton text="+" onClick={increaseQuantityOfProduct}/>
            <CartButton text="-" onClick={decreaseQuantityOfProduct}/>
            <CartButton text="x" onClick={removeProduct}/>
            <CartButton text="Buy" onClick={buyProduct}/> 
        </div>
    );
}