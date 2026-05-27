import { useWishist } from "../hooks/useWishist";
import { useCart } from "../hooks/useCart";
import Header from "../components/Header";

const Wishlist = () => {
  const { wishlist, removeFromWishList } = useWishist();
  const { addToCart } = useCart();

  if (wishlist.length === 0)
    return (
      <>
        <Header />
        <p className="text-center mt-4">Your Wishlist is empty!</p>
      </>
    );

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h5 className="text-center mb-4">My Wishlist</h5>
        <div className="row">
          {wishlist.map((item, index) => (
            <div key={`${item._id}-${index}`} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="card h-100">

                {/* Image with heart icon */}
                <div style={{ position: "relative" }}>
                  <button
                    className="btn btn-light"
                    onClick={() => removeFromWishList(item)}
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      zIndex: 1,
                      borderRadius: "50%",
                      padding: "4px 8px",
                    }}
                  >
                    <i className="bi bi-heart-fill" style={{ color: "#d9534f" }}></i>
                  </button>
                  <img
                    src={`${import.meta.env.VITE_API_URL}${item.image}`}
                    alt={item.title}
                    className="card-img-top img-fluid"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <p className="card-title">{item.title}</p>
                  <p className="fw-bold">₹{item.price}</p>
                  <button
                    className="btn btn-secondary w-100 mt-auto"
                    onClick={() => {
                      addToCart(item);
                      removeFromWishList(item);
                    }}
                  >
                    Move to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;