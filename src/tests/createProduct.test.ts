import { getRandomProducts } from "@/features/createProduct";

describe('getRandomProducts', () => {
    it('should work', () => {
    expect(true).toBe(true)
})

it('should count Id starting from 0 in increments of one', () => {
    const products = getRandomProducts(10)

    for (let i = 0; i < products.length; i++) {
        expect(products[i].id).toBe(i);
    }
})

it('should not decrement Id below 0', () => {
    const products = getRandomProducts(10)

    for (let i = 0; i < products.length; i++) {
        expect(products[i].id).not.toBe(-1);
    }
})

it('should return an array of products of correct length', () => {
    const products = getRandomProducts(10)

    expect(products).toBeInstanceOf(Array);
    expect(products).toHaveLength(10);
})

it('should have an id for each product', () => {
    const products = getRandomProducts(10)

    products.forEach((product) => {
        expect(product.id).toBeDefined();
    })
})

it('should have a title for each product', () => {
    const products = getRandomProducts(10)

    products.forEach((product) => {
        expect(product.title).toBeDefined();
    })
})

it('should have a category for each product if defined', () => {
    const products = getRandomProducts(10)

    // Since toBeDefined checks if a property is defined
    // I'm guessing I don't actually need the undefined check
    products.forEach((product) => {
        if (product.category !== undefined) {
            expect(product.category).toBeDefined();
        }
    })
})

it('should have a price for each product', () => {
    const products = getRandomProducts(10)

    products.forEach((product) => {
        expect(product.price).toBeDefined();
    })
})

it('should have a quantity for each product', () => {
    const products = getRandomProducts(10)

    products.forEach((product) => {
        expect(product.quantity).toBeDefined();
    })
})

it('should have a quantity of at least 0 or more, not less', () => {
    const products = getRandomProducts(10)

    products.forEach((product) => {
        expect(product.quantity).not.toBe(-1);
    })
})

})