import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentsgu/Navbar';
import Footer from '../componentsgu/Footer';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      description: 'Description for Product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$20',
      description: 'Description for Product 2',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  return (
    <div style={styles.container}>
      <Navbar/>
      <h1 style={styles.title}>Products for Sale</h1>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={styles.link}>
            <div style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.productPrice}>{product.price}</p>
            </div>
          </Link>
          
        ))}
      </div><Footer/>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '2.5em',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  productName: {
    fontSize: '1.5em',
    color: '#007bff',
  },
  productPrice: {
    fontSize: '1.2em',
    color: '#28a745',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default ProductPage;
