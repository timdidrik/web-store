export type ProductProps = {
    title: string;
    category: string;
    price: number;
    quantity?: number;
}

export type Faker = {
    title: () => string;
    category: () => string;
    price: () => number;
}

export type CartItemProps = {
    product?: ProductProps;
    title: string;
    price: number;
    quantity: number;
}

// How do you work?
export type ProductCardProps = {
    product: ProductProps;
  }

export type ShoppingCartDrawerProps = {
    cart: CartItemProps[];
    isCartOpen: boolean;
}

export type ShoppingCartButtonProps = {
    toggleCart: () => void;
}

