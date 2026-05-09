import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${productId}`);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const isFashion = product?.category === "fashion";

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;
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
            <div className="d-flex align-items-center gap-2 mt-2">
              <span className="fw-bold">Quantity:</span>
             <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrease}>−</button>
            <span>{quantity}</span>
            <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrease}>+</button>
</div>
<br />
{isFashion && (
  <div className="d-flex gap-2 mt-2">
    <span className="fw-bold">Size:</span>
    {sizes.map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`btn btn-sm ${selectedSize === size ? "btn-dark" : "btn-outline-secondary"}`}
      >
        {size}
      </button>
    ))}
  </div>
)}

<div>
  <hr className="my-3" /> 
</div>
<div className="d-flex gap-4 mt-3">
  <div className="text-center">
    <i className="bi bi-truck fs-4"></i>
    <p className="small">Free Delivery</p>
  </div>
  <div className="text-center">
    <i className="bi bi-shield-check fs-4"></i>
    <p className="small">Secure Payment</p>
  </div>
  <div className="text-center">
    <i className="bi bi-arrow-return-left fs-4"></i>
    <p className="small">10 Days Return</p>
  </div>
  <div className="text-center">
    <i className="bi bi-cash fs-4"></i>
    <p className="small">Pay on Delivery</p>
  </div>
</div>
<div>
  <hr />
  </div>
  <div>
      <p><strong>Description: </strong></p>
        <p>{product.description}</p>
  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
