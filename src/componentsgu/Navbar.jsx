import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div style={styles.topbar}>
      <h1 style={styles.logo}>Toyland</h1>
      <nav style={styles.nav}>
      <Link to='/signup'> 
       <span style={styles.link}>Home</span></Link>
       <Link to='/login'>Login</Link>
        <span style={styles.link}>Contact</span>
      </nav>
    </div>
  );
};

const styles = {
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: '10px 50px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    animation: 'fadeInTop 1s ease-in-out',
  },
  logo: {
    color: '#F7A8B8',
    fontSize: '32px',
    textShadow: '2px 2px #FF6F61',
    animation: 'spinLogo 5s infinite alternate-reverse',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    fontSize: '18px',
    padding: '8px 16px',
    borderRadius: '15px',
    backgroundColor: '#FF1493',
    transition: 'transform 0.3s, background-color 0.3s',
    cursor: 'pointer',
    animation: 'bounceLink 2s infinite',
    ':hover': {
      backgroundColor: '#FF4500',
      transform: 'scale(1.1)',
    },
  },
  '@keyframes spinLogo': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes fadeInTop': {
    '0%': { opacity: 0, transform: 'translateY(-50px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes bounceLink': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
};

export default Topbar;
