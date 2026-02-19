import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="container" />
      <nav>
        <div className="logo">MyShoppingSite</div>
        <div className="links">
          <Link to="/" className="nav-link">
           Cart
          </Link>
        </div>
      </nav>
      <header />
    </>
  );
};

export default Header;
