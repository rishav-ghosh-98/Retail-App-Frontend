import { NavLink, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "../hooks/useCart";
import { useSearch } from "../hooks/useSearch";
import { useWishist } from "../hooks/useWishist";
const Header = () => {
  const { totalItems } = useCart();
  const { wishlist } = useWishist();
  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <>
    <div className="custom-header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand text-decoration-none d-flex align-items-center" to="/">
            <div className="brand-logo">
              <span className="brand-accent">My</span>
              <span className="brand-main">Shopping</span>
              <span className="brand-sub">Site</span>
            </div>
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

          <div className="d-flex align-items-center gap-2">
            <NavLink to="/wishlist" className="btn btn-light d-flex align-items-center gap-2">
              <i className="bi bi-heart" style={{ fontSize: "1.3rem", color: "#d9534f" }}></i>
              <span>Wishlist</span>
              <span className="badge rounded-pill bg-danger">{wishlist.length}</span>
            </NavLink>
            <button className="btn btn-secondary">Login</button>
            <NavLink to="/profile" className="btn btn-light d-flex align-items-center justify-content-center">
              <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
            </NavLink>
            <NavLink to="/cart" className="btn btn-light d-flex align-items-center gap-2">
              <i className="bi bi-cart" style={{ fontSize: "1.3rem" }}></i>
              <span>Cart</span>
              <span className="badge rounded-pill bg-danger">{totalItems}</span>
            </NavLink>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Header;
