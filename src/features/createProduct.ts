import type { Faker, ProductProps } from "./types"

// Define some fake products
const fakeTitles: string[] = [
    "Roadhog Statue",
    "Half-Life 3",
    "Overpriced RTX 4080",
    "Battle Pass with nothing good in it",
    "Carbon Shoes",
]

// Define some fake categories
const fakeCategories: string[] = [
    "Statues",
    "Video Games",
    "Electronics",
    "Clothing",
]

// Define some fake prices
const fakePrices: number[] = [
    1499, 699, 25000, 150, 2499
]

// Get a random item from the array
const getRandomItem = <T>(items: T[]) => {
    const randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

// Generate a fake product
export const faker: Faker = {
    // Gets a random X from fake titles/categories/prices
    title: () => getRandomItem(fakeTitles),
    category: () => getRandomItem(fakeCategories),
    price: () => getRandomItem(fakePrices),
}


// Get as many fake random products as you want
// Need to give each product a unique index
let idCounter = 0;

export const getRandomProducts = (count: number): ProductProps[] =>
// Array.from takes two arguments, here --->
// length = first argument, () = second argument which
// is the arrow function containing faker objects
// I think - brain meltdown, I will move on.
  Array.from({ length: count }, () => ({
    id: (idCounter++),
    title: faker.title(),
    category: faker.category(),
    price: faker.price(),
    quantity: 1,
  }));
