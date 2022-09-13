import React, { Component, useContext, useState } from 'react';
import { CartContext } from './CartContext';
export const Child = () => {
  const { checkoutable, updateCheckout, logCheckout, getCheckout } =
    useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        checked={checkout}
        onChange={(e) => {
          setCheckout(!checkout);
        }}
      ></input>
      <button onClick={() => updateCheckout(checkout)}>Submit</button>
      <button
        onClick={() => {
          console.log('One -', checkoutable);
          console.log(getCheckout());
          logCheckout();
        }}
      >
        Log
      </button>
    </>
  );
};
