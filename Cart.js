import React, { Component, useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
export const Cart = () => {
  const {
    startTransaction,
    isCheckoutable,
    checkoutable,
    transaction,
    getTransaction,
    updatePC,
  } = useContext(CartContext);

  return (
    <>
      <button onClick={() => startTransaction()}>Start Checkout</button>
      <button onClick={() => updatePC()}>Update PC</button>
      <button
        onClick={() => {
          console.log('Field -', checkoutable);
          console.log('Field -', transaction);
          console.log('Field -', transaction?.pc);
          console.log('Fn -', isCheckoutable());
          console.log('Fn -', getTransaction());
          console.log('Fn-', getTransaction()?.pc);
        }}
      >
        Log
      </button>
    </>
  );
};
