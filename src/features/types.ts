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

export type CartItem = {
    product: Product;
    quantity: number;
}

// How do you work?
export type ProductCard = {
    product: Product;
  }