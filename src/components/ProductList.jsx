import { ProductCard } from './ProductCard';
import '../styles/ProductMenu.css'

export default function ProductList({products}) {
  return (
    <div>
        ProductList
        <div className='product-menu'>
            {
                products.map(product =>{
                    return <ProductCard key={product.id} product={product}  toggleDescription={false}/>
                    
                })
            }
        </div> 
    </div>
  )
}
