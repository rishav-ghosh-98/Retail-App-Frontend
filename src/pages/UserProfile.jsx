import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useAddress } from "../hooks/useAddress";

import { user } from "../data/user"

const UserProfile = () => {
  const { addresses } = useAddress();

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card p-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
          
          {/* Avatar */}
          <div className="text-center mb-4">
            <i className="bi bi-person-circle" style={{ fontSize: "6rem", color: "#6c757d" }}></i>
            <h5 className="mt-2">{user.name}</h5>
          </div>

          <hr />

          <div className="mb-4">
            <p><i className="bi bi-person me-2 text-muted"></i><strong>Name: </strong>{user.name}</p>
            <p><i className="bi bi-telephone me-2 text-muted"></i><strong>Phone: </strong>{user.phone}</p>
            <p><i className="bi bi-envelope me-2 text-muted"></i><strong>Email: </strong>{user.email}</p>
          </div>

          <hr />

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Saved Addresses</h5>
              <span className="text-muted">{addresses.length} address{addresses.length === 1 ? "" : "es"}</span>
            </div>

            {addresses.length === 0 ? (
              <p className="text-muted">No addresses added yet. Click below to add one.</p>
            ) : (
              addresses.map((address) => (
                <div key={address.id} className="card p-3 mb-3">
                  <p className="mb-1 fw-bold">{address.name}</p>
                  <p className="mb-1 text-muted">{address.street}, {address.city}</p>
                  <p className="mb-1 text-muted">{address.state} - {address.pincode}</p>
                  <p className="mb-0 text-muted"><i className="bi bi-telephone me-2"></i>{address.phone}</p>
                </div>
              ))
            )}
          </div>

          <div className="d-flex gap-2 flex-column flex-sm-row">
            <NavLink to="/address" className="btn btn-dark w-100">
              <i className="bi bi-plus-circle me-2"></i>Add New Address
            </NavLink>
            <NavLink to="/orders" className="btn btn-outline-dark w-100">
              <i className="bi bi-clock-history me-2"></i>Order History
            </NavLink>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;