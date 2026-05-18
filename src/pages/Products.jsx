import { useState, useEffect } from "react";
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

  // Find max product price
  const maxPriceOfProducts = products.reduce(
    (max, prod) =>
      prod.price > max ? prod.price : max,
    0
  );

  // Selected slider price
  const [selectedPrice, setSelectedPrice] = useState(0);

  // Set initial slider value after products load
  useEffect(() => {
    setSelectedPrice(maxPriceOfProducts);
  }, [maxPriceOfProducts]);

  // Filtered products
  const filteredProducts = products.filter(
    (prod) => prod.price <= selectedPrice
  );

  if (loading) return <Loader />;

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />

      <div className="container-fluid mt-4">

        {/* Top Bar */}
        <div className="d-flex align-items-center mb-4">

          <button
            className="btn btn-dark me-3"
            onClick={() =>
              setShowSidebar(!showSidebar)
            }
          >
            <i className="bi bi-list"></i>
          </button>

          <p className="mb-0">
            <strong>
              Showing Products (
              {filteredProducts.length})
            </strong>
          </p>
        </div>

        <div className="row">

          {/* Sidebar */}
          {showSidebar && (
            <div
              className="col-md-3 col-lg-2 bg-light border-end p-4"
              style={{ minHeight: "100vh" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">
                  Filters
                </h5>

                <button
                  className="btn btn-sm btn-link text-decoration-none p-0"
                  onClick={() =>
                    setSelectedPrice(
                      maxPriceOfProducts
                    )
                  }
                >
                  Clear
                </button>
              </div>

              {/* Price Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">
                  Price
                </h6>

                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max={maxPriceOfProducts}
                  value={selectedPrice}
                  onChange={(e) =>
                    setSelectedPrice(
                      Number(e.target.value)
                    )
                  }
                />

                <p>
                  Selected Price: ₹{" "}
                  {selectedPrice}
                </p>
                <h6 className="fw-bold mb-3">
                  Category
                </h6>
                
              </div>
            </div>
          )}

          {/* Products */}
          <div
            className={
              showSidebar
                ? "col-md-9 col-lg-10"
                : "col-12"
            }
          >
            {filteredProducts.length > 0 ? (
              <div className="row">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod._id || prod.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  >
                    <ProductCard product={prod} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-5">
                <h4>No products found</h4>

                <p className="text-muted">
                  Try changing filters
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Products;