import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  // cart item, name of state, setCart changes that state
  // eslint-disable-next-line no-undef
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Items in your card : {cartItems.toString()}</p>
        <button
          onClick={() => {
            setCartItems([...cartItems, 'apple']);
          }}
        >
          Add to Cart
        </button>
      </header>
    </div>
  );
}
