import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { ENDPOINTS } from "../api/endpoints";

const Products = () => {
  const { data: response, loading, error } = useFetch(
    ENDPOINTS.products
  );

  const [showSidebar, setShowSidebar] = useState(false);

  const products = response?.products || [];

  if (loading) return <Loader />;

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />

      <div className="container-fluid mt-4">

        {/* Top Bar */}
        <div className="d-flex align-items-center mb-4">

          {/* Sidebar Toggle Button */}
          <button
            className="btn btn-dark me-3"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <i className="bi bi-list"></i>
          </button>

          <p className="mb-0">
            <strong>
              Showing All Products ({products.length})
            </strong>
          </p>
        </div>

        <div className="row">

          {showSidebar && (
            <div
              className="col-md-3 col-lg-2 bg-light border-end p-4"
              style={{ minHeight: "100vh" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Filters</h5>

                <button
                  className="btn btn-sm btn-link text-decoration-none p-0"
                >
                  Clear
                </button>
              </div>

              {/* Price */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Price</h6>

                <input
                  type="range"
                  className="form-range"
                />
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Category</h6>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="men"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="men"
                  >
                    Men Clothing
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="women"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="women"
                  >
                    Women Clothing
                  </label>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h6 className="fw-bold mb-3">Sort by</h6>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sort"
                    id="low"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="low"
                  >
                    Price - Low to High
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sort"
                    id="high"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="high"
                  >
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          )}

        
          <div
            className={
              showSidebar
                ? "col-md-9 col-lg-10"
                : "col-12"
            }
          >
            <div className="row">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <ProductCard product={prod} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;