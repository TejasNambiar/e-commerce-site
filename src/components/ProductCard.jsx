import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'

export const ProductCard = ({ product,  toggleDescription}) => {
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
          <button>Add To Cart</button>
        </div>
      </div>
    );
  };
