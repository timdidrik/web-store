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