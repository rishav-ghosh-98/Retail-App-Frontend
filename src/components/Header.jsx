import { NavLink, Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="/" className="text-decoration-none">
            MyShoppingSite
          </NavLink>
          
          <div class="d-flex flex-grow-1 justify-content-center mx-3">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              style={{ maxWidth: "400px" }}
              aria-label="Search"
            />
          </div>
          
          <div class="d-flex align-items-center gap-3">
            <button class="btn btn-light">
              <i class="bi bi-heart" style={{ fontSize: "1.5rem", color: "#d9534f" }}></i>
            </button>
             <button class="btn btn-secondary">Login</button>
             <NavLink to="/cart">
               <button class="btn btn-light position-relative">
              <i class="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                7
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
