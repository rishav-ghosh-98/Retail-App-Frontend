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
const Home = () => {
  const { data: response, loading, error } = useFetch(ENDPOINTS.categories);
  const categories = response?.data?.categories || [];
  return (
    <>
      <div>
        <br />
        <div>
          <div className="container">
            <div className="md-4">
               <h3>Categories</h3>
            </div>
           

            {loading && <Loader />}
            {error && <p>Error loading categories:{error}</p>}
            <div className="row">
              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className="col-6 col-md-4 col-lg-2 mb-4"
                >
                  <NavLink
                    to={`/categories/${cat._id}`}
                    className="text-decoration-none"
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="img-fluid rounded"
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          background: "rgba(255,255,255,0.8)",
                          textAlign: "center",
                          padding: "4px 0",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        {cat.name}
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div>
          <NavLink to="/products" className="text-decoration-none">
            <button type="button" className="btn btn-dark">Explore Products</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Home;
