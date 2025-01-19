import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Api from './components/Home'
import Addblog from './components/Addblog'
function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Api  />} />
        <Route path="/add" element={<Addblog />} />
      </Routes>
    </>
  );
}

export default App
