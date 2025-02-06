import { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Custom hook for easy access to cart data
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  {/*Here the function acts like call back but it isnt one.
    why? as its reference is not changing on every re-render, 
    as its being called via useContext() the same reference is
    passed everytime its called, unlike when passed as a prop and re-render 
    requires its reference again. Hence useCallBack hook is unescessary here*/}
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Adds product to cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};