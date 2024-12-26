import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../componentsgu/Navbar'

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example product data
  const product = {
    id: id,
    name: `Smartwatch ${id}`,
    description: `The latest Smartwatch ${id} with cutting-edge features designed to keep you connected, active, and healthy.`,
    price: `$${id * 100}`,
    images: [
      'https://via.placeholder.com/500x300/000000/FFFFFF?text=Smartwatch+Image+1',
      'https://via.placeholder.com/500x300/333333/FFFFFF?text=Smartwatch+Image+2',
      'https://via.placeholder.com/500x300/666666/FFFFFF?text=Smartwatch+Image+3',
    ],
    features: [
      'Heart Rate Monitor',
      'GPS Tracking',
      'Water Resistant',
      'Customizable Watch Faces',
      'Sleep Monitoring',
    ],
    specifications: {
      display: '1.5-inch AMOLED',
      battery: 'Up to 7 days',
      waterResistance: '5 ATM',
      compatibility: 'iOS & Android',
    },
  };
  const handleBuyNow = () => {
    navigate(`/order/${product.id}`);
  };

  return (
    <div style={styles.container}>
      <Navbar/>
      <button style={styles.backButton} onClick={() => navigate(-1)}>Back</button>

      <div style={styles.productSection}>
        <div style={styles.sliderContainer}>
          <img src={product.images[0]} alt={`Smartwatch ${id}`} style={styles.productImage} />
        </div>

        <div style={styles.productInfo}>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.productPrice}>{product.price}</p>
          <p style={styles.productDescription}>{product.description}</p>

          <button style={styles.buyNowButton} onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  productSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    marginBottom: '40px',
  },
  sliderContainer: {
    width: '500px',
    height: '300px',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  productInfo: {
    textAlign: 'left',
    maxWidth: '400px',
  },
  productName: {
    fontSize: '2.5em',
    color: '#333',
  },
  productPrice: {
    fontSize: '1.5em',
    color: '#28a745',
    margin: '10px 0',
  },
  productDescription: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '20px',
  },
  buyNowButton: {
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2em',
    cursor: 'pointer',
  },
};

export default ProductDetail;
