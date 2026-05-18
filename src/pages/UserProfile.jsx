import Header from "../components/Header";
import { NavLink } from "react-router-dom";

import { user } from "../data/user"

const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card p-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          
          {/* Avatar */}
          <div className="text-center mb-4">
            <i className="bi bi-person-circle" style={{ fontSize: "6rem", color: "#6c757d" }}></i>
            <h5 className="mt-2">{user.name}</h5>
          </div>

          <hr />

          <div className="mb-3">
            <p><i className="bi bi-person me-2 text-muted"></i><strong>Name: </strong>{user.name}</p>
            <p><i className="bi bi-telephone me-2 text-muted"></i><strong>Phone: </strong>{user.phone}</p>
            <p><i className="bi bi-envelope me-2 text-muted"></i><strong>Email: </strong>{user.email}</p>
            <p><i className="bi bi-geo-alt me-2 text-muted"></i><strong>Address: </strong>{user.address}</p>
          </div>

          <hr />

  
          <div className="d-flex gap-2">
            <NavLink to="/address" className="btn btn-dark w-100">
              <i className="bi bi-plus-circle me-2"></i>Add New Address
            </NavLink>
            <NavLink to="/orders" className="btn btn-outline-dark w-100">
              <i className="bi bi-clock-history me-2"></i>Order History
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserProfile;