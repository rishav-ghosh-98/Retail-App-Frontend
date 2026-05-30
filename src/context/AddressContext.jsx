import { useState, useEffect } from "react";
import { AddressContext } from "../hooks/useAddress";

const DEFAULT_ADDRESSES = [
  {
    id: 1,
    name: "John Doe",
    phone: "+91 9876543210",
    street: "123, Park Street",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700016",
  },
];

export const AddressProvider = ({ children }) => {
  // Initialize addresses from localStorage or use defaults
  const [addresses, setAddresses] = useState(() => {
    const storedAddresses = localStorage.getItem("addresses");
    return storedAddresses ? JSON.parse(storedAddresses) : DEFAULT_ADDRESSES;
  });

  const [selectedId, setSelectedId] = useState(() => {
    const storedSelectedId = localStorage.getItem("selectedAddressId");
    return storedSelectedId ? parseInt(storedSelectedId) : (addresses[0]?.id ?? null);
  });

  // Save addresses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // Save selectedId to localStorage whenever it changes
  useEffect(() => {
    if (selectedId) {
      localStorage.setItem("selectedAddressId", selectedId.toString());
    }
  }, [selectedId]);

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