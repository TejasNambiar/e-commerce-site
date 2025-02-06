import { useParams, Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const ProductDetails = ({products}) => {
    const {id} = useParams()
    console.log("product id: "+id)
    const product = products.find(product =>{
        return product.id === parseInt(id)
    })
  return (
    <div>
        ProductDetails
        {
            !product ?
                <h2>Product not found!</h2>
            :
                <div>
                    <ProductCard product={product} toggleDescription={true}/>
                    <button>
                        <Link to='/'>
                            Back to catalog
                        </Link>
                    </button>
                </div>
        }
    </div>
  )
}
