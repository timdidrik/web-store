'use client';
import { getRandomProducts } from "@/features/createProduct";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import type { Product } from "@/features/types";

export default function ProductList() {
const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  // Fetch random products on the client side
  const randomProducts = getRandomProducts(8);
  setProducts(randomProducts);
}, []);

    return (
      <div className="product-list">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
      </div>
    )
}
