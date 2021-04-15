import { createContext } from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
}

interface Cart {
  products?: Item[];
  shipping_value?: number;
}

const CartContext = createContext<Cart>({
  products: [],
  shipping_value: 0
});

export default CartContext;