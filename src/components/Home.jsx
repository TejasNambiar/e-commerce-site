import React from 'react'
import ProductList from './ProductList'

export const Home = ({products}) => {
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}
