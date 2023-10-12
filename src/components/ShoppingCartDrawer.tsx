'use client';

import type { CartItemProps, ShoppingCartDrawerProps, ShoppingCartButtonProps } from "@/features/types";
import React from "react";

export default function ShoppingCartDrawer({ isCartOpen, toggleCart, cart }: ShoppingCartDrawerProps & ShoppingCartButtonProps) {
    const cartItems = [];

    const closeCart = () => {
        toggleCart();
    }

    const addToCart = (product: CartItemProps) => {
        // doSomething
    }

    const removeFromCart = (product: CartItemProps) => {
        // doSomething
    }

    const purchaseCart = () => {
        // doSomething
    }

    return (
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <button className="close-cart-button" onClick={closeCart}>Exit</button>
        {cart.map((product) => (
          <div key={product.title}> {/* Assuming title is a unique identifier */}
            <h3>{product.title}</h3>
            <input type="number" value={product.quantity} />
            <button onClick={() => { addToCart(product) }}>+</button>
            <button onClick={() => { removeFromCart(product) }}>-</button>
          </div>
        ))}
        <button className="purchase-cart-button" onClick={purchaseCart}>Purchase</button>
      </div>
    );

}
