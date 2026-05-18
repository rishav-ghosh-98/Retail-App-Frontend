import { useContext, createContext } from "react";

export const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);