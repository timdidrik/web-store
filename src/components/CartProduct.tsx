import type { CartItemProps } from "@/features/types";

export default function CartProduct({ title, price, quantity}: CartItemProps) {
    return (
        <div className="cart-item">
            <p>{title}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
        </div>
    )
}