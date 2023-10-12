import type { CartItemProps, ShoppingCartDrawerProps, ShoppingCartButtonProps } from "@/features/types";
import React, { useState } from "react";

export default function ShoppingCartDrawer({ 
  isCartOpen, toggleCart, cart, setCart }: ShoppingCartDrawerProps & ShoppingCartButtonProps) {
  
    const closeCart = () => {
    toggleCart();
  }

  const updateCart = (updatedCart: CartItemProps[]) => {
    setCart(updatedCart)
  }

  const incrementCart = (product: CartItemProps) => {
    const updatedCart = cart.map((item) => {
   
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  }
  
  const decrementCart = (product: CartItemProps) => {
    const updatedCart = cart.map((item) => {
      
      if (item.id === product.id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  }

  const removeFromCart = (product: CartItemProps) => {
    const updatedCart = cart.filter((item) => item.id !== product.id)

    setCart(updatedCart);
  }

  const totalAmount = () => {
    let total = 0;

    cart.forEach((product) => {
      total += product.price * product.quantity;
    })
    return total
  }

  const purchaseCart = () => {
    cart.forEach((product) => {
      console.log(`Your order of ${product.quantity} ${product.title}
       has been sent for a total of ${product.price * product.quantity} NOK.`)
    })
  }

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} >
      <button className="close-cart-button" onClick={closeCart}>Exit</button>
      {cart.map((product) => (
        <div key={product.title}>
          <h3>{product.title}, {product.price} NOK,-</h3>
          <input type="number" value={product.quantity} />
          <button className="close-cart-button" onClick={() => { incrementCart(product) }}>+</button>
          <button className="close-cart-button" onClick={() => { decrementCart(product) }}>-</button>
          <button className="close-cart-button" onClick={() => { removeFromCart(product) }}>X</button>
        </div>
      ))}
      <p>Current sum: {totalAmount()} NOK</p>
      <button className="purchase-cart-button" onClick={purchaseCart}>Purchase</button>
    </div>
  );
}
