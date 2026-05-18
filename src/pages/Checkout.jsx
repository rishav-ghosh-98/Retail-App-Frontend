import Header from "../components/Header";
import { useCart } from "../hooks/useCart";
import { useAddress } from "../hooks/useAddress";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cart, totalItems, clearCart } = useCart();

  const {
    addresses,
    selectedId,
    selectedAddress,
    selectAddress,
  } = useAddress();

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharges = totalPrice > 0 ? 499 : 0;
  const totalAmount = totalPrice + deliveryCharges;

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address!");
      return;
    }

    toast.success("Order placed successfully! 🎉");

    clearCart();

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
              <h6 className="fw-bold mb-3">
                Order Summary ({totalItems} items)
              </h6>

              {cart.map((item) => (
                <div
                  key={item._id}
                  className="d-flex gap-3 align-items-center mb-3 pb-3 border-bottom"
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}${item.image}`}
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="flex-grow-1">
                    <p className="mb-1 fw-bold">{item.title}</p>

                    <p className="mb-0 text-muted">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="mb-0 fw-bold">
                    ₹ {item.price * item.quantity}
                  </p>
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

          {/* RIGHT - Address Selection */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card p-3">
              <h6 className="fw-bold mb-3">
                Select Delivery Address
              </h6>

              {addresses.length === 0 ? (
                <p className="text-muted">
                  No saved addresses found.
                </p>
              ) : (
                addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`card p-3 mb-3 ${
                      selectedId === address.id
                        ? "border-dark"
                        : ""
                    }`}
                  >
                    <div className="d-flex gap-2 align-items-start">

                      <input
                        type="radio"
                        name="selectedAddress"
                        checked={selectedId === address.id}
                        onChange={() =>
                          selectAddress(address.id)
                        }
                        className="mt-1"
                      />

                      <div>
                        <p className="mb-1 fw-bold">
                          {address.name}
                        </p>

                        <p className="mb-1 text-muted small">
                          {address.street}, {address.city}
                        </p>

                        <p className="mb-1 text-muted small">
                          {address.state} - {address.pincode}
                        </p>

                        <p className="mb-0 text-muted small">
                          <i className="bi bi-telephone me-1"></i>
                          {address.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <button
                className="btn btn-dark w-100 mt-2"
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