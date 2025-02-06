import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product,  toggleDescription}) => {
    const {addToCart} = useCart() // Get addToCart function from context

    const { title, price, description, image } = product;
  
    return (
      <div className="product-card">  {/* Add a class here */}
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-details">
          <p className="product-title">{title}</p>
          <p className="product-price">₹{price}</p>
          {  toggleDescription && <p className="product-description">{description}</p>}
          <button>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </button>
          <br />
          {/* Add to Cart button */}
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    );
  };
