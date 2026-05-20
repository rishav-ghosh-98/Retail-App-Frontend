import { useContext, createContext } from "react";

export const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext)