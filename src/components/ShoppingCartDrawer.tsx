import React from "react";
import type { ShoppingCartDrawerProps, ShoppingCartButtonProps } from "@/features/types";
import { useCart } from "@/hooks/useCart";

export default function ShoppingCartDrawer({ 
  isCartOpen, toggleCart, cart, setCart }: ShoppingCartDrawerProps & ShoppingCartButtonProps) {

  const { incrementCart, decrementCart, removeFromCart, totalAmount, purchaseCart } = useCart(cart, setCart);

    const closeCart = () => {
    toggleCart();
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