import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, REMOVE_ITEM, ADD_TO_CART } from '../types';

const CartState = ({ children }) => {
  const initState = {
    showCart: false,
    cartItem: []
  };
  const [state, dispatch] = useReducer(CartReducer, initState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItem: state.cartItem,
        addToCart,
        showHideCart,
        removeItem
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
