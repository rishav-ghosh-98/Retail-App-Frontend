import { useCart } from "../hooks/useCart";
import { useWishist } from "../hooks/useWishist";
const Cart = () => {
  const { cart, removeFromCart, totalItems, addToCart } = useCart();
  const { addToWishList } = useWishist();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharges = totalPrice > 0 ? 499 : 0;
  const totalAmount = totalPrice + deliveryCharges;

  if (cart.length === 0) return <p className="text-center mt-4">Your cart is empty!</p>;

  return (
    <div className="container mt-4">
      <h5 className="text-center mb-4">MY CART ({totalItems})</h5>
      <div className="row">

        {/* LEFT - Cart Items */}
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item._id} className="card p-3 mb-3">
              <div className="d-flex gap-3">
                <img
                 src={`${import.meta.env.VITE_API_URL}${item.image}`}
                  alt={item.title}
                  style={{ width: "120px", height: "120px", objectFit: "contain" }}
                />
                <div className="flex-grow-1">
                  <h6>{item.title}</h6>
                  <p className="fw-bold">₹ {item.price}</p>

                  {/* Quantity */}
                  <div className="d-flex align-items-center gap-2">
                    <span>Quantity:</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => addToCart(item, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => addToCart(item, 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Buttons */}
                  <div className="mt-2 d-flex gap-2">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove From Cart
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => {
                        addToWishList(item);
                        removeFromCart(item._id);
                      }}
                    >
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - Price Details */}
        <div className="col-md-4">
          <div className="card p-3">
            <h6 className="fw-bold">PRICE DETAILS</h6>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Price ({totalItems} item{totalItems > 1 ? "s" : ""})</span>
              <span>₹ {totalPrice}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Delivery Charges</span>
              <span>₹ {deliveryCharges}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>TOTAL AMOUNT</span>
              <span>₹ {totalAmount}</span>
            </div>
            <hr />
            <button className="btn btn-primary w-100">PLACE ORDER</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;