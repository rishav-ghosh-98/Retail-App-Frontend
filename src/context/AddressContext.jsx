import { useState } from "react";
import { AddressContext } from "../hooks/useAddress";

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+91 9876543210",
      street: "123, Park Street",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700016",
    },
  ]);

  const [selectedId, setSelectedId] = useState(addresses[0]?.id ?? null);

  const addAddress = (address) => {
    setAddresses((prev) => [...prev, { ...address, id: Date.now() }]);
  };

  const updateAddress = (id, updatedAddress) => {
    setAddresses((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...updatedAddress } : a))
    );
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectAddress = (id) => setSelectedId(id);

  const selectedAddress = addresses.find((a) => a.id === selectedId) || null;

  return (
    <AddressContext.Provider
      value={{
        addresses,
        selectedId,
        selectedAddress,
        addAddress,
        updateAddress,
        deleteAddress,
        selectAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};