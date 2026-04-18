import useFetch from "../hooks/useFetch";
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { ENDPOINTS } from "../api/endpoints";
const Products = () => {
const { data: response , loading, error } = useFetch(ENDPOINTS.products);
 const products = response?.products || []; //
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(products)
    return (
        <>
        <Header />
       <div>
        <p><strong>Show all {products?.length} products</strong></p>
       <div className="container mt-4">
            <div className="row">
                  {products?.map((prod) => (
                    <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                       <ProductCard product={prod} />
                        </div>
                  ))}
                
       </div>
       </div>
       </div>
        </>
    )
}

export default Products