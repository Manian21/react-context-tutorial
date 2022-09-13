import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { CartProvider } from './CartContext';
import { Cart } from './Cart';

const App = () => {
  return (
    <CartProvider>
      <Child />
    </CartProvider>
  );
};

render(<App />, document.getElementById('root'));
