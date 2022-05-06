import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  //   eslint-disable-next-line react/jsx-no-undef
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
