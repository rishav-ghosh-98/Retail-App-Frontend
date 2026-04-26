import { NavLink } from "react-router-dom";
const ProductCard = ({ product }) => {
// const imageUrl = `${import.meta.env.VITE_API_URL}${product.image}`;

  return (
    <div className="card h-100 shadow-sm">
      <NavLink to={`/products/${product._id}`} className="text-decoration-none text-dark">
      <img
      src={`${import.meta.env.VITE_API_URL}/images/${product.image.split('/').pop()}`}                
        className="card-img-top"
        alt={product.title}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="text-muted mb-2">₹ {product.price}</p>
        <div className="mt-auto">
          <button className="btn btn-dark w-100">Add to Cart</button>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;