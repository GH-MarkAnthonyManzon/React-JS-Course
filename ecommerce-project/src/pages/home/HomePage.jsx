import axios from 'axios';
import { useEffect, useState } from 'react';

import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

import CheckMarkIcon from '../../assets/images/icons/checkmark.png';

export function HomePage({ cart }) {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    
    // Fetch products
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      });

  }, []);

  return (
    <>
      <title>Home</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}