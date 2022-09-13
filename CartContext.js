import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

let checkoutable = false;
let transaction = undefined;
export const CartProvider = (props) => {
  const startTransaction = () => {
    transaction = { pc: {} };
    checkoutable = true;
  };
  const updatePC = () => {
    transaction.pc = Object.assign(transaction.pc, { name: 'updated' });
  };
  const isCheckoutable = () => checkoutable;
  const getTransaction = () => transaction;

  return (
    <CartContext.Provider
      value={{
        checkoutable,
        transaction,
        startTransaction,
        isCheckoutable,
        getTransaction,
        updatePC,
      }}
    >
      <br />
      {props.children}
    </CartContext.Provider>
  );
};
