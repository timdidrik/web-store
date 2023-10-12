export type ProductProps = {
    id: number;
    title: string;
    category?: string;
    price: number;
    quantity: number;
}

export type Faker = {
    title: () => string;
    category: () => string;
    price: () => number;
}

export type CartItemProps = {
    product?: ProductProps;
    id?: number;
    title: string;
    price: number;
    quantity: number;
}

// How do you work?
export type ProductCardProps = {
    product: ProductProps | CartItemProps;
    addToCart: (product: CartItemProps) => void;
  }

export type ShoppingCartDrawerProps = {
    cart: CartItemProps[];
    isCartOpen: boolean;
    setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
}

export type ShoppingCartButtonProps = {
    toggleCart: () => void;
}

