// Test to see if products are being fetched @api/products.
export async function fetchProducts() {
    try {
        const response = await fetch('/api/products')
        if (!response.ok) {
            throw new Error('Products could not be fetched.')
        }
        return await response.json()
    } catch (error) {
        throw new Error('An error occured while fetching products.')
    }   
}

// @ts-expect-error Not enough brain power right now
export async function postProducts(newProduct) {
    try {
        const response = await fetch('api/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Product could not be added.')
        }

        return await response.json();
    } catch (error) {
        throw new Error('An error occured.')
    }
}