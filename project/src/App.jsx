import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Product from './Components/Product';
import Shopping from './Components/Shopping'
import Header from './Components/Header'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </>
  );
}

export default App;
