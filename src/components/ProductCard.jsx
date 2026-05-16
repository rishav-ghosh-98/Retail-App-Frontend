import { NavLink } from "react-router-dom";
import { useWishist } from "../hooks/useWishist";
import { useCart } from "../hooks/useCart";
const ProductCard = ({ product }) => {
    const { addToWishList, isInWishlist } = useWishist();
    const { addToCart } = useCart();
    const wishlisted = isInWishlist(product._id);
  return (
    <div className="card h-100 shadow-sm">
      <NavLink to={`/products/${product._id}`} className="text-decoration-none text-dark">
       <div style={{ position: "relative" }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToWishList(product);
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                  borderRadius: "50%",
                }}
              >
                <i
                  className={`bi ${wishlisted ? "bi-heart-fill" : "bi-heart"}`}
                  style={{ fontSize: "1.5rem", color: "#d9534f" }}
                ></i>
              </button>
            </div>
      <img
      src={`${import.meta.env.VITE_API_URL}/images/${product.image.split('/').pop()}`}                
        className="card-img-top"
        alt={product.title}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="text-muted mb-2">₹ {product.price}</p>
      </div>
      </NavLink>
      <div className="mt-auto">
          <button className="btn btn-dark w-100" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductCard;