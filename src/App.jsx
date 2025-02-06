import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from './components/Home'
import { ProductDetails } from './components/ProductDetails';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
