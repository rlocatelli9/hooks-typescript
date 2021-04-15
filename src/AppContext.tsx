import React, {useContext, useReducer} from 'react';
import CartContext from './CartContext';

interface Cart {
  products?: string[];
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
  const {products, shipping_value} = useContext(CartContext);

  const cart = useReducer((state: Cart, action: CartActionType)=> {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, 'Produto novo']
        }          
      default:
        return state;
    }
  },
  {
    products: [],
    shipping_value: 0,
  })
  return (
    <>
      <ul>
        {products.map(item => <li>{item.name}</li>)}
      </ul>
      <div>
        Total: {shipping_value}
      </div>
    </>
  )
}

export default AppContext;