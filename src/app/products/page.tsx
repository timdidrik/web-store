'use client';

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import ShoppingCartDrawer from "@/components/ShoppingCartDrawer";
import { getRandomProducts } from "@/features/createProduct";
import type { CartItemProps } from "@/features/types";

export default function Home() {

const [products, setProducts] = useState<CartItemProps[]>([]);
const [isCartOpen, setIsCartOpen] = useState(false);
const [cart, setCart] = useState<CartItemProps[]>([]);

useEffect(() => {
  const fakeProducts = getRandomProducts(6);

  setProducts(fakeProducts);
}, []);

const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
}

const addToCart = (product: CartItemProps) => {
  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If it exists, update the quantity
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    // If it doesn't exist, add it to the cart with a quantity of 1
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

  return (
    <>
    <div className="main-cart-container">
    <ShoppingCartButton toggleCart={toggleCart}/>
    <ShoppingCartDrawer 
      isCartOpen={isCartOpen}
      cart={cart}
      toggleCart={toggleCart}
      setCart={setCart}
      />
    </div>

      <div className="cart-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </>
  );
}