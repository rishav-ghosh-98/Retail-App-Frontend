import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderSuccess = () => {
  return (
    <>
      <Header />
      <div className="container mt-5 text-center">
        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "5rem" }}></i>
        <h3 className="mt-3">Order Placed Successfully! 🎉</h3>
        <p className="text-muted">Thank you for shopping with us!</p>
        <NavLink to="/products" className="btn btn-dark mt-3">
          Continue Shopping
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;