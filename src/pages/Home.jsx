import { NavLink } from "react-router-dom";
import MenImage from "../assets/MenImage.png";
import WomenImage from "../assets/WomenImage.png";
import Kids from "../assets/Kids.png";
import Electronics from "../assets/Electronics.png";
import Beauty from "../assets/Beauty.png";
import Products from "./Products";
import Loader from "../components/Loader";
import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
const Home = () => {
  const { data: response, loading, error } = useFetch(ENDPOINTS.categories);
  const categories = response?.data?.categories || [];
  return (
    <>
      <div className="container mt-4 page-section">
        <div className="text-center mb-4">
          <h3>Categories</h3>
        </div>

        {loading && <Loader />}
        {error && <p className="text-danger text-center">Error loading categories: {error}</p>}

        <div className="row justify-content-center gx-4 gy-4">
          {categories.map((cat) => (
            <div key={cat._id} className="col-6 col-md-4 col-lg-2">
              <NavLink to={`/categories/${cat._id}`} className="text-decoration-none">
                <div className="category-card rounded shadow-sm bg-white d-flex flex-column align-items-stretch">
                  <div className="card-image">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="category-caption text-center mt-2" style={{ textTransform: "capitalize" }}>
                    {cat.name}
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <NavLink to="/products" className="btn btn-dark px-4 py-2">
            Explore Products
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
