import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/com/Navbar';
import HomePage from './components/com/Homepage';
import ChairBazaarHome from './components/com/ChairBazaar';
import ProductPage from './components/com/ProductPage';
import ProductDetails from './components/com/ProductDetails';
import CheckoutPage from './components/com/CheckoutPage';
import './App.css';

function App() {
  const productData = [
    {
      productName: "Ergonomic Office Chair",
      price: "$299.99",
      description: "Experience ultimate comfort with our ergonomic office chair, designed to support your body during long work hours.",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/011.jpeg?alt=media&token=b3be88f2-5b51-4bab-9eb4-3bf6e0734e73",
        "https://firebasestorage.googleapis.com/v0/b/chairbazaar-710bd.appspot.com/o/012.jpeg?alt=media&token=05e4e32c-8b2e-4870-916f-a3cbdffa840c",
      ],
      features: [
        "Ergonomic design for optimal comfort",
        "High-quality materials ensure durability"
      ],
      relatedProducts: [
        { name: "Executive Office Chair", price: "$249.99", image: "/placeholder.svg?height=200&width=200" }
      ],
      reviews: [
        { author: "John D.", rating: 5, comment: "Excellent chair, very comfortable for long work hours." }
      ],
      ratingCount: 128
    }
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChairBazaarHome/>} />
      
        <Route path="/Shop" element={<ProductPage />} />
        <Route path="/ProductDetail" element={<ProductDetails productData={productData} index={0} />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
