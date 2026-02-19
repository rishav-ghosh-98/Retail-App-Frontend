import Nav from "./Nav";
import MenImage from "../assets/MenImage.png"
import WomenImage from "../assets/WomenImage.png"
import Kids from "../assets/Kids.png"
import Electronics from "../assets/Electronics.png"
const Home = () => {
  return (
    <>
      <div>
        <Nav />
        <br />
        <div>
        <div className="container">
            <h3>Categories</h3>
          <div class="row">
            <div class="col-3">
                <img src={MenImage} alt="Men" style={{ width: "100%", height: "auto" }} />
            </div>
            <div class="col-3">
                <img src={WomenImage} alt="Men" style={{ width: "100%", height: "auto" }} />
            </div>
            <div class="col-3">
                <img src={Kids} alt="Men" style={{ width: "100%", height: "auto" }} />
            </div>
            <div class="col-3">
                <img src={Electronics} alt="Men" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
