import React from 'react';
import Signup from './user/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './user/Login';
import ProductPage from './components/ProductPage ';
import ProductDetail from './components/ProductDetail';
import OrderPage from './components/OrderPage';


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Routes>
      </div>
   
  );
};

export default App;