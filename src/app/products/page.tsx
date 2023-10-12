'use client';

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import ShoppingCartDrawer from "@/components/ShoppingCartDrawer";
import { getRandomProducts } from "@/features/createProduct";

export default function Home() {
const fakeProducts = getRandomProducts(6);

const [isCartOpen, setIsCartOpen] = useState(false);
const [cart, setCart] = useState([]);

const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
}

  return (
    <>
    <div className="main-cart-container">
    <ShoppingCartButton toggleCart={toggleCart}/>
    <ShoppingCartDrawer isCartOpen={isCartOpen} cart={cart} toggleCart={toggleCart}/>

      <div className="cart-container">
        {fakeProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
    </>
  );
}