import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

let checkoutable = { checkout: false };
export const CartProvider = (props) => {
  const updateCheckout = (checkout) => {
    checkoutable = { checkout };
  };
  const getCheckout = () => checkoutable;
  const logCheckout = () => {
    console.log('carcontext ', checkoutable);
  };
  return (
    <CartContext.Provider
      value={{ checkoutable, updateCheckout, logCheckout, getCheckout }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
