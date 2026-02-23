import products from "../data/products"
const Products = () => {
    return (
        <>
       <div>
        <p><strong>Show all {products.length} products</strong></p>
       <div className="container mt-4">
            <div className="row">
                  {products.map((prod) => (
                    <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card">
                          <img src={prod.image} alt="product-image" style={{width: "100%", height: "250px", objectFit: "cover"}}/>
                          <div className="card-body">
                            <p className="card-text">{prod.title}</p>
                          </div>
                        </div>
                    </div>
                  ))}
                
       </div>
       </div>
       </div>
        </>
    )
}

export default Products