export type Product = {
    title: string;
    category: string;
    price: number;
}

export type Faker = {
    title: () => string;
    category: () => string;
    price: () => number;
}

export type CartItemProps = {
    product?: Product;
    title: string;
    price: number;
    quantity: number;
}

// How do you work?
export type ProductCard = {
    product: Product;
  }