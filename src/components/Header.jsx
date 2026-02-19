import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <>
      <header className="container" />
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            MyShoppingSite
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="🔍 Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav me-auto">
              <Link class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
              <Link class="nav-link" href="#">
                Features
              </Link>
              <Link class="nav-link" href="#">
                Pricing
              </Link>
            </div>
            
            <div class="navbar-nav ms-3">
              <Link class="nav-link" href="#">
                Account
              </Link>
              <Link class="nav-link" href="#">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <header />
    </>
  );
};

export default Header;

