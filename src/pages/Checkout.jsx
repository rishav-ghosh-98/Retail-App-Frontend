import Header from "../components/Header";
import { useCart } from "../hooks/useCart";
import { user } from "../data/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cart, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharges = totalPrice > 0 ? 499 : 0;
  const totalAmount = totalPrice + deliveryCharges;

  const [address, setAddress] = useState({
    name: user.name,
    phone: user.phone,
    street: "",
    city: "",
    pincode: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!address.street || !address.city || !address.pincode || !address.state) {
      toast.error("Please fill all address fields!");
      return;
    }
    toast.success("Order placed successfully! 🎉");
     clearCart();                        // ✅ clear cart
  navigate("/order-success");  
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h5 className="text-center mb-4">Checkout</h5>
        <div className="row">

          {/* LEFT - Order Summary */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card p-3">
              <h6 className="fw-bold mb-3">Order Summary ({totalItems} items)</h6>

              {cart.map((item) => (
                <div key={item._id} className="d-flex gap-3 align-items-center mb-3 pb-3 border-bottom">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${item.image}`}
                    alt={item.title}
                    style={{ width: "70px", height: "70px", objectFit: "contain" }}
                  />
                  <div className="flex-grow-1">
                    <p className="mb-1 fw-bold">{item.title}</p>
                    <p className="mb-0 text-muted">Qty: {item.quantity}</p>
                  </div>
                  <p className="mb-0 fw-bold">₹ {item.price * item.quantity}</p>
                </div>
              ))}

              <div className="d-flex justify-content-between mt-2">
                <span>Subtotal</span>
                <span>₹ {totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <span>Delivery Charges</span>
                <span>₹ {deliveryCharges}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>₹ {totalAmount}</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Address Form */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card p-3">
              <h6 className="fw-bold mb-3">Delivery Address</h6>

              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={address.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={address.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  placeholder="123, Park Street"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-2">
                <div className="col-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="Kolkata"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    placeholder="700016"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="West Bengal"
                  onChange={handleChange}
                />
              </div>

              <button
                className="btn btn-dark w-100"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Checkout;