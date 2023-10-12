'use client'

import React from "react";
import type { ShoppingCartButtonProps } from "@/features/types";

export default function ShoppingCartButton({ toggleCart }: ShoppingCartButtonProps) {

    return (
        <div>
            <button className="main-cart-button" onClick={toggleCart}>Cart</button>
        </div>
    )
}