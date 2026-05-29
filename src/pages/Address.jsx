import { useState } from "react";
import Header from "../components/Header";
import { useAddress } from "../hooks/useAddress";
import Footer from "../components/Footer";
const Address = () => {
  const {
    addresses,
    selectedId,
    addAddress,
    updateAddress,
    deleteAddress,
    selectAddress,
  } = useAddress();

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

 const handleAdd = () => {
  if (
    !form.name ||
    !form.street ||
    !form.city ||
    !form.pincode ||
    !form.state
  )
    return;

  if (editId !== null) {
    updateAddress(editId, form);
    setEditId(null);
  } else {
    addAddress(form);
  }

  resetForm();
  setShowForm(false);
};

  const handleEdit = (address) => {
    setForm(address);
    setEditId(address.id);
    setShowForm(true);
  };

  return (
    <>
      <Header />

      <div className="container mt-4" style={{ maxWidth: "650px" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">My Addresses</h5>

          <button
            className="btn btn-dark btn-sm"
            onClick={() => {
              setShowForm(!showForm);
              setEditId(null);
              resetForm();
            }}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add New Address
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="card p-3 mb-4">
            <h6 className="fw-bold mb-3">
              {editId ? "Edit Address" : "Add New Address"}
            </h6>

            <div className="mb-2">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Street Address</label>
              <input
                className="form-control"
                name="street"
                value={form.street}
                onChange={handleChange}
                placeholder="123, Park Street"
              />
            </div>

            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">City</label>
                <input
                  className="form-control"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Kolkata"
                />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Pincode</label>
                <input
                  className="form-control"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="700016"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                className="form-control"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="West Bengal"
              />
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-dark w-100" onClick={handleAdd}>
                {editId ? "Update Address" : "Save Address"}
              </button>

              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Address List */}
        {addresses.length === 0 && (
          <p className="text-muted text-center">
            No addresses saved yet.
          </p>
        )}

        {addresses.map((address) => (
          <div
            key={address.id}
            className={`card p-3 mb-3 ${
              selectedId === address.id ? "border-dark" : ""
            }`}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex gap-2 align-items-start">
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedId === address.id}
                  onChange={() => selectAddress(address.id)}
                  className="mt-1"
                />

                <div>
                  <p className="mb-1 fw-bold">{address.name}</p>

                  <p className="mb-1 text-muted small">
                    {address.street}, {address.city}
                  </p>

                  <p className="mb-1 text-muted small">
                    {address.state} - {address.pincode}
                  </p>

                  <p className="mb-0 text-muted small">
                    <i className="bi bi-telephone me-1"></i>
                    {address.phone}
                  </p>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleEdit(address)}
                >
                  <i className="bi bi-pencil"></i>
                </button>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteAddress(address.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Address;