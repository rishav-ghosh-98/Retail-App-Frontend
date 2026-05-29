import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useSearch } from "../hooks/useSearch";
import { ENDPOINTS } from "../api/endpoints";

const Products = () => {
  const { data: response, loading, error } = useFetch(ENDPOINTS.products);

  const [showSidebar, setShowSidebar] = useState(false);
  const products = response?.products || [];
  const { searchTerm } = useSearch();

  const extractCategory = products.map((prod) => prod.category);
  const categories = [...new Set(extractCategory)];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setselectedRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  const ratingFilter = (e) => {
    const value = Number(e.target.value);
    setselectedRating(value);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(maxPriceOfProducts);
    setselectedRating(0);
    setSortOrder("");
  };

  const maxPriceOfProducts = products.reduce(
    (max, prod) => (prod.price > max ? prod.price : max),
    0
  );

  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    setSelectedPrice(maxPriceOfProducts);
  }, [maxPriceOfProducts]);

  const filteredProducts = products.filter((prod) => {
    const matchesPrice = prod.price <= selectedPrice;
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(prod.category);
    const matchesRating = prod.rating >= selectedRating;
    const matchesSearch = prod.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
    return matchesPrice && matchesCategory && matchesRating && matchesSearch;
  });

  // sort after filtering
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="container-fluid mt-4">
        <div className="d-flex align-items-center mb-4">
          <button
            className="btn btn-dark me-3"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <i className="bi bi-list"></i>
          </button>
          <p className="mb-0">
            <strong>Showing Products ({sortedProducts.length})</strong>
          </p>
        </div>

        <div className="row">
          {showSidebar && (
            <div className="col-12 col-md-3 col-lg-2 bg-light border-end p-4" style={{ minHeight: "100vh" }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Filters</h5>
                <button
                  className="btn btn-sm btn-link text-decoration-none p-0"
                  onClick={handleClearFilters}
                >
                  Clear
                </button>
              </div>

              <h6 className="fw-bold mb-3">Price</h6>
              <input
                type="range"
                className="form-range"
                min="0"
                max={maxPriceOfProducts}
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(Number(e.target.value))}
              />
              <p>Selected Price: ₹ {selectedPrice}</p>

              <h6 className="fw-bold mb-3">Category</h6>
              {categories.map((a) => (
                <div className="form-check" key={a}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={a}
                    id={`category-${a}`}
                    checked={selectedCategories.includes(a)}
                    onChange={handleCategoryChange}
                  />
                  <label className="form-check-label" htmlFor={`category-${a}`}>
                    {a}
                  </label>
                </div>
              ))}

              <br />

              <h6 className="fw-bold mb-3">Rating</h6>
              <input name="rating" type="radio" className="form-check-input" value="4" checked={selectedRating === 4} onChange={ratingFilter} />
              <label className="ms-2">4 stars & above</label>
              <br />
              <input name="rating" type="radio" className="form-check-input" value="3" checked={selectedRating === 3} onChange={ratingFilter} />
              <label className="ms-2">3 stars & above</label>
              <br />
              <input name="rating" type="radio" className="form-check-input" value="2" checked={selectedRating === 2} onChange={ratingFilter} />
              <label className="ms-2">2 stars & above</label>
              <br />
              <input name="rating" type="radio" className="form-check-input" value="1" checked={selectedRating === 1} onChange={ratingFilter} />
              <label className="ms-2">1 star & above</label>

              <br /><br />

              {/* ✅ Sort By Price */}
              <h6 className="fw-bold mb-3">Sort By</h6>
              <input
                name="priceSort"
                type="radio"
                className="form-check-input"
                value="lowToHigh"
                checked={sortOrder === "lowToHigh"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              <label className="ms-2">Price-Low to High</label>
              <br />
              <input
                name="priceSort"
                type="radio"
                className="form-check-input"
                value="highToLow"
                checked={sortOrder === "highToLow"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              <label className="ms-2">Price-High to Low</label>
            </div>
          )}

          <div className={showSidebar ? "col-12 col-md-9 col-lg-10" : "col-12"}>
            {sortedProducts.length > 0 ? (
              <div className="row">
                {sortedProducts.map((prod) => (
                  <div key={prod._id || prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <ProductCard product={prod} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-5">
                <h4>No products found</h4>
                <p className="text-muted">Try changing filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;