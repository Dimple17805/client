import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage ';
import ProductDetail from './components/ProductDetail';
import OrderPage from './components/OrderPage';
import Login from './user/Login';

const App = () => {
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path=''
      </Routes>
    </Router>
   
  );
};

export default App;



import React, { useState } from "react";


const Extra = () => {
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: true,
    specialChar: false,
  });

  // Function to handle password validation
  const validatePassword = (value) => {
    setPassword(value);
    setValidations({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      specialChar: /[!@#$%^&*]/.test(value),
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
          required
        />

        {/* Password validation checklist */}
        <div>
          <p>Password must have:</p>
          <ul>
            <li style={{ color: validations.length ? "green" : "red" }}>
              At least 8 characters
            </li>
            <li style={{ color: validations.uppercase ? "green" : "red" }}>
              At least one uppercase letter
            </li>
            <li style={{ color: validations.lowercase ? "green" : "red" }}>
              At least one lowercase letter
            </li>
            <li style={{ color: validations.number ? "green" : "red" }}>
              At least one number
            </li>
            <li style={{ color: validations.specialChar ? "green" : "red" }}>
              At least one special character (!@#$%^&*)
            </li>
          </ul>
        </div>

        <button type="submit" disabled={Object.values(validations).includes(false)}>
          Sign Up
        </button>
      </form>
    </div>
  );
};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import t800 from '../asset/t800.png'

const watches = [
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: t800 },
  { id: 2, name: 'Sport Watch', price: '$299', description: 'Built for performance and durability.', image: 'https://example.com/images/sport-watch.jpg' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-'},
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
  { id: 1, name: 'Classic Watch', price: '$199', description: 'A timeless piece with a classic design.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s' },
];

const Watches = () => {
  return (
    <div className="watches">
      <center>
      {watches.map(watch => (
        <div className="container" key={watch.id}>
         <div className='imege'> <img src={watch.image} alt={watch.name} /></div>
          <div className='info'><name>{watch.name}</name>
          <desc>{watch.description}</desc>
          <price>{watch.price}</price>
          <Link to={`/watch/${watch.id}`} className="button">
            Buy Now
          </Link>
        </div></div>
      ))}
      </center></div>
  );
};

export default Watches;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';

const HomePage = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f0f8ff',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const categorySectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  };

  const productStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const titleStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#555',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.4',
    textAlign: 'left',
    marginTop: '5px',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome to ShopEase</h1>
      <p style={paragraphStyle}>
        Discover exclusive deals on the latest products! Shop across various
        categories from fashion to electronics and find something special just
        for you. Our curated selection ensures that you get the best quality
        at unbeatable prices. Start shopping today and transform your life!
      </p>

      <div style={categorySectionStyle}>
        <div
          style={{ ...productStyle, gridColumn: 'span 2' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Electronics"
            style={imgStyle}
          />
          <div style={titleStyle}>Electronics</div>
        </div>
        <p style={descriptionStyle}>
          Explore the latest in electronics, from smartphones to laptops.
          Discover top brands and unbeatable prices!
        </p>

        <div
          style={{ ...productStyle, gridRow: 'span 2' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/200x300"
            alt="Fashion"
            style={imgStyle}
          />
          <div style={titleStyle}>Fashion</div>
        </div>
        <p style={descriptionStyle}>
          Stay trendy with our stylish clothing and accessories. Refresh your
          wardrobe today with the latest fashion!
        </p>

        <div
          style={productStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/300x250"
            alt="Home Appliances"
            style={imgStyle}
          />
          <div style={titleStyle}>Home Appliances</div>
        </div>
        <p style={descriptionStyle}>
          Upgrade your home with our range of appliances. Quality products that
          make your life easier and more enjoyable!
        </p>

        <div
          style={productStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/250x200"
            alt="Books"
            style={imgStyle}
          />
          <div style={titleStyle}>Books</div>
        </div>
        <p style={descriptionStyle}>
          Dive into our extensive collection of books. Whether fiction or
          non-fiction, find your next great read!
        </p>

        <div
          style={productStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/200x300"
            alt="Toys"
            style={imgStyle}
          />
          <div style={titleStyle}>Toys</div>
        </div>
        <p style={descriptionStyle}>
          Discover fun and educational toys for children of all ages. Create
          memorable moments with our delightful selection!
        </p>

        <div
          style={{ ...productStyle, gridRow: 'span 2' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/300x400"
            alt="Sports"
            style={imgStyle}
          />
          <div style={titleStyle}>Sports</div>
        </div>
        <p style={descriptionStyle}>
          Gear up for your favorite sports with our premium equipment and
          apparel. Stay active and enjoy your passions!
        </p>

        <div
          style={productStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://via.placeholder.com/250x150"
            alt="Accessories"
            style={imgStyle}
          />
          <div style={titleStyle}>Accessories</div>
        </div>
        <p style={descriptionStyle}>
          Complete your look with our stylish accessories. Find the perfect
          addition to any outfit!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
