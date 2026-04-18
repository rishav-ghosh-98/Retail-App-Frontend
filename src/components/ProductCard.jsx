const ProductCard = ({ product }) => {
  const imageUrl = `${import.meta.env.VITE_API_URL}${product.image}`; // ✅ full URL

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imageUrl}                          // ✅ use imageUrl instead of product.image
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
    </div>
  );
};

export default ProductCard;