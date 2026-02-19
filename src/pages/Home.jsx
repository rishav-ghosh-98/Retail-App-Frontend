import { NavLink } from "react-router-dom";
import MenImage from "../assets/MenImage.png";
import WomenImage from "../assets/WomenImage.png";
import Kids from "../assets/Kids.png";
import Electronics from "../assets/Electronics.png";
import Beauty from "../assets/Beauty.png";
const Home = () => {
  return (
    <>
      <div>
        <br />
        <div>
          <div className="container">
            <h3>Categories</h3>
            <div class="row">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
