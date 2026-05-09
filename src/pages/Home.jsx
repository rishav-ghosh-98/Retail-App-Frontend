import { NavLink } from "react-router-dom";
import MenImage from "../assets/MenImage.png";
import WomenImage from "../assets/WomenImage.png";
import Kids from "../assets/Kids.png";
import Electronics from "../assets/Electronics.png";
import Beauty from "../assets/Beauty.png";
import Products from "./Products";
import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const { data : response , loading, error} = useFetch(ENDPOINTS.categories)
  const categories = response?.data?.categories || [];
  return (
    <>
      <div>
        <br />
        <div>
          <div className="container">
            <h3>Categories</h3>
            {loading && <p>Loading Categories</p>}
            {error && <p>Error loading categories:{error}</p>}
            {/* <div class="row">
              <div class="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to="/categories" className="text-decoration-none">
                  <img
                    src={MenImage}
                    alt="Men"
                    style={{ width: "100%", height: "auto" }}
                  />
                </NavLink>
              </div>
              <div class="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to="/categories" className="text-decoration-none">
                  <img
                    src={WomenImage}
                    alt="Women"
                    style={{ width: "100%", height: "auto" }}
                  />
                </NavLink>
              </div>
              <div class="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to="/categories" className="text-decoration-none">
                  <img
                    src={Kids}
                    alt="Kids"
                    style={{ width: "100%", height: "auto" }}
                  />
                </NavLink>
              </div>
              <div class="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to="/categories" className="text-decoration-none">
                 <img
                  src={Electronics}
                  alt="Electronics"
                  style={{ width: "100%", height: "auto" }}
                /></NavLink>
              </div>
              <div class="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to="/categories" className="text-decoration-none">
                  <img
                    src={Beauty}
                    alt="Beauty"
                    style={{ width: "100%", height: "auto" }}
                  />
                </NavLink>
              </div>
            </div> */}
            <div className="row">
              {categories.map((cat) => (<div key ={cat._id}className="col-3" style={{ flex: "0 0 20%" }}>
                <NavLink to={`/categories/${cat._id}`} className="text-decoration-none">
                <div style={{ position: "relative" }}>
                    <img
                      src={`${import.meta.env.VITE_API_URL}/images/${cat.image}`}
                      alt={cat.name}
                      style={{ width: "100%", height: "auto" }}
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
                 
              </div>))}
            </div>
          </div>
        </div>
          <div>
            <NavLink to="/products" className= "text-decoration-none">
            <p>Explore Products</p>
            </NavLink>
          </div>
      </div>
    </>
  );
};
export default Home;
