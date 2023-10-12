'use client';

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import ShoppingCartDrawer from "@/components/ShoppingCartDrawer";
import { getRandomProducts } from "@/features/createProduct";
import type { CartItemProps } from "@/features/types";

export default function Home() {
const fakeProducts = getRandomProducts(6);

const [isCartOpen, setIsCartOpen] = useState(false);
const [cart, setCart] = useState<CartItemProps[]>([]);

const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
}

const addToCart2 = (product: CartItemProps) => {
  const updatedCart = [...cart, product];

  setCart(updatedCart);
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
    <ShoppingCartDrawer isCartOpen={isCartOpen} cart={cart} toggleCart={toggleCart}/>
    </div>

      <div className="cart-container">
        {fakeProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </>
  );
}