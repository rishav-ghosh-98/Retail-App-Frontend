import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row gy-4 text-center text-md-start">
          {/* Brand */}
          <div className="col-12 col-md-4">
            <h4 className="fw-bold mb-2">Retail App</h4>

            <p
              className="text-secondary mb-0"
              style={{
                maxWidth: "320px",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                background: "transparent",
              }}
            >
              Modern full-stack e-commerce platform built using React, Node.js,
              Express, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink to="/" className="text-decoration-none text-light">
                  Home
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink
                  to="/products"
                  className="text-decoration-none text-light"
                >
                  Products
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink
                  to="/wishlist"
                  className="text-decoration-none text-light"
                >
                  Wishlist
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" className="text-decoration-none text-light">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold mb-3">Account</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink
                  to="/profile"
                  className="text-decoration-none text-light"
                >
                  Profile
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink
                  to="/orders"
                  className="text-decoration-none text-light"
                >
                  Orders
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/address"
                  className="text-decoration-none text-light"
                >
                  Addresses
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">Connect</h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" className="text-light">
                <i className="bi bi-github"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-secondary mb-0" style={{ fontSize: "0.9rem" }}>
            © 2026 Retail App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
