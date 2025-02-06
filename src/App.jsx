import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from './components/Home'
import { ProductDetails } from './components/ProductDetails';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
