import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import { useSearch } from "../hooks/useSearch";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
const Categories = () => {
  const { categoryId } = useParams();
  const { data: response, loading, error } = useFetch(ENDPOINTS.products);
  const [showSidebar, setShowSidebar] = useState(false);
  const { searchTerm } = useSearch();
  const [selectedRating, setselectedRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const products = response?.products || [];
  const { data: category } = useFetch(`/categories/${categoryId}`);
  const categoryProducts = products.filter((prod) => prod.category === category?.name);

  const ratingFilter = (e) => {
    const value = Number(e.target.value);
    setselectedRating(value);
  };
 const [selectedPrice, setSelectedPrice] = useState(0);

  const maxPriceOfProducts = categoryProducts.reduce(
    (max, prod) => (prod.price > max ? prod.price : max),
    0
  );

  useEffect(() => {
    setSelectedPrice(maxPriceOfProducts);
  }, [maxPriceOfProducts]);

  const filteredProducts = categoryProducts.filter((prod) => {
    const matchesPrice = prod.price <= selectedPrice;
    const matchesRating = prod.rating >= selectedRating;
    const matchesSearch = prod.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
    return matchesPrice  && matchesRating && matchesSearch;
  });
   const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });
  const handleClearFilters = () => {
    setSelectedPrice(maxPriceOfProducts);
    setselectedRating(0);
    setSortOrder("");
  };
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Header />
      <div className="container mt-4 page-section">
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
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
          <div>
            <h2 className="mb-1">{category?.name.toUpperCase() || "Category"}</h2>
            <p className="text-muted mb-0">Browse products in this category.</p>
          </div>
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
export default Categories;
