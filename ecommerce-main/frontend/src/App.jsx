import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import {  Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Profile from './components/Profile';
function App() {
  const [count, setCount] = useState(0);

  return (
   <>
      <Navbar /> 
      <Routes> 
        <Route path="/log" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/pro" element={<Profile/>} />
      </Routes>
      </>
   
  );
}

export default App;