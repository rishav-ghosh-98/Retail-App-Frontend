import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${productId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>; // ✅ add this
    const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} style={{ color: i < Math.round(rating) ? "#ffc107" : "#e4e5e9", fontSize: "20px" }}>
      ★
    </span>
  ));
};
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`${import.meta.env.VITE_API_URL}/images/${product.image.split("/").pop()}`}
              alt={product.title}
              className="img-fluid"
              style={{ height: "500px", objectFit: "contain", width: "100%" }}
            />
            <button className="btn btn-primary w-100 mt-2">Buy Now</button>
            <button className="btn btn-secondary w-100 mt-2">
              Add to Cart
            </button>
          </div>
          <div className="col-md-7">
            <h4>{product.title}</h4>
            <div>
  <span className="ms-1 text-muted">{product.rating}</span>{renderStars(product.rating)}
</div>
            <p><strong>₹{product.price}</strong></p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
