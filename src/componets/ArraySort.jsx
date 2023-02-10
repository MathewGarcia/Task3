import React from 'react';
import { useState, useEffect } from 'react';
import Products from './Products.js';

const ArraySort = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    setSortedProducts([...Products]);
  }, []);

  const sortPrices = () => {
    if (direction === 'asc') {
      setSortedProducts(sortedProducts.sort((a, b) => a.price - b.price));
      setDirection('desc');
    } else {
      setSortedProducts(sortedProducts.sort((a, b) => b.price - a.price));
      setDirection('asc');
    }
  };

  return (
    <div>
      <h3>Prices:</h3>
      <p>{sortedProducts.map(product => `${product.name} - $${product.price}`).join(', ')}</p>
      <button onClick={sortPrices}>Sort</button> <small>{direction}</small>
    </div>
  );
};

export default ArraySort;
