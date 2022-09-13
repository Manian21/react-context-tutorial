import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { TshirtList } from './TshirtList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import { TestOne } from './TestOne';

const App = () => {
  return <TestOne />;
};

render(<App />, document.getElementById('root'));
