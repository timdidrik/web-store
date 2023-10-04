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

