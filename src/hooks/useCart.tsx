import type { CartItemProps } from "@/features/types";

export function useCart(cart: CartItemProps[], setCart: (cart: CartItemProps[]) => void) {
  
    const updateCart = (updatedCart: CartItemProps[]) => {
      setCart(updatedCart)
    }
  
    const incrementCart = (product: CartItemProps) => {
      const updatedCart = cart.map((item) => {
     
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      updateCart(updatedCart);
    }
  
    const decrementCart = (product: CartItemProps) => {
      const updatedCart = cart.map((item) => {
        
        if (item.id === product.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      updateCart(updatedCart);
    }
  
    const removeFromCart = (product: CartItemProps) => {
      const updatedCart = cart.filter((item) => item.id !== product.id)
  
      setCart(updatedCart);
    }
  
    const totalAmount = () => {
      let total = 0;
  
      cart.forEach((product) => {
        total += product.price * product.quantity;
      })
      return total
    }
  
    const purchaseCart = () => {
      cart.forEach((product) => {
        console.log(`Your order of ${product.quantity} ${product.title}
         have been sent for a total of ${product.price * product.quantity} NOK.`)
      })
    }
  
    return { updateCart, incrementCart, decrementCart, removeFromCart, totalAmount, purchaseCart };
  }