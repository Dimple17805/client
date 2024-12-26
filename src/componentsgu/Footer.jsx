import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.socialLinks}>
        <span style={styles.socialIcon}>🌐 Facebook</span>
        <span style={styles.socialIcon}>🌐 Twitter</span>
        <span style={styles.socialIcon}>🌐 Instagram</span>
      </div>
      <p style={styles.copyright}>© 2024 Toyland - All rights reserved.</p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#FFD700',
    padding: '20px 50px',
    textAlign: 'center',
    boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '10px',
  },
  socialIcon: {
    color: '#FF1493',
    fontSize: '20px',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  copyright: {
    color: '#FF6F61',
    fontSize: '16px',
  },
};

export default Footer;
