import { NavLink, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../hooks/useCart";
import { useSearch } from "../hooks/useSearch";
import Wishlist from "../pages/Wishlist";
const Header = () => {
  const { totalItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none" to="/">
            MyShoppingSite
          </NavLink>

          <div className="d-flex flex-grow-1 justify-content-center mx-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
               value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: "400px" }}
              aria-label="Search"
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <NavLink to="/wishlist">
              <button className="btn btn-light">
                <i
                  className="bi bi-heart"
                  style={{ fontSize: "1.5rem", color: "#d9534f" }}
                ></i>
              </button>
            </NavLink>
            <button className="btn btn-secondary">Login</button>
            <NavLink to="/profile">
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </NavLink>
            <NavLink to="/cart">
              <button className="btn btn-light position-relative">
                <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
                Cart
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
