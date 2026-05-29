import { useParams, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useWishist } from "../hooks/useWishist";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { addToWishList } = useWishist();
  const { productId } = useParams();
  const { data: product, loading, error } = useFetch(`/products/${productId}`);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const isFashion = product.category === "fashion";

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        style={{ color: i < Math.round(rating) ? "#ffc107" : "#e4e5e9", fontSize: "20px" }}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-5">
            <div style={{ position: "relative" }}>
              <button
                className="btn btn-light"
                onClick={() => addToWishList(product)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                  borderRadius: "50%",
                }}
              >
                <i className="bi bi-heart" style={{ fontSize: "1.5rem", color: "#d9534f" }}></i>
              </button>
              <img
                src={`${import.meta.env.VITE_API_URL}/images/${product.image.split("/").pop()}`}
                alt={product.title}
                className="img-fluid"
                style={{ height: "500px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <NavLink to="/checkout">
            <button className="btn btn-primary w-100 mt-2">Buy Now</button>
            </NavLink>
            <button
              className="btn btn-secondary w-100 mt-2"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
          </div>

          {/* RIGHT - Product Details */}
          <div className="col-12 col-md-7">
            <h4>{product.title}</h4>
            <div>
              {renderStars(product.rating)}
              <span className="ms-1 text-muted">{product.rating}</span>
            </div>
            <p className="mt-2">
              <strong>₹{product.price}</strong>
            </p>

            {/* Quantity */}
            <div className="d-flex align-items-center gap-2 mt-2">
              <span className="fw-bold">Quantity:</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrease}>−</button>
              <span>{quantity}</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrease}>+</button>
            </div>

            {/* Size - only for fashion */}
            {isFashion && (
              <div className="d-flex align-items-center gap-2 mt-3">
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

            <hr className="my-3" />

            {/* Delivery Icons */}
            <div className="d-flex gap-4">
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

            <hr />

            {/* Description */}
            <p><strong>Description:</strong></p>
            <p>{product.description}</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;