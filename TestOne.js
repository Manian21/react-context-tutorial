import React, { Component } from 'react';
import { CartProvider } from './CartContext';
import { Child } from './Child';

export const TestOne = () => {
  return (
    <CartProvider>
      <Child />
    </CartProvider>
  );
};
