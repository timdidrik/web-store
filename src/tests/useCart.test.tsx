import { useCart } from "@/hooks/useCart";

describe('removeFromCart', () => {
    it('should remove a product from the cart', () => {
        const cart = [
            {id: 1, title: 'Let it end', quantity: 1, price: 50},
            {id: 2, title: 'The Summit of The Gods', quantity: 2, price: 100},
        ];
        
        // Too fucking tired of this shit.
        // @ts-ignore
        const { removeFromCart } = useCart(cart, (newCart) => {
            // @ts-ignore
            cart.splice(0, cart.length, ...newCart);
        })

        const removeProduct = {id: 1, title: 'Let it end', quantity: 1, price: 50}

        removeFromCart(removeProduct);

        expect(cart).toEqual([
            {id: 2, title: 'The Summit of The Gods', quantity: 2, price: 100}
        ]);
    })
})

