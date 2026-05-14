import { useContext, createContext } from "react";

export const WishListContext = createContext();

export const useWishist = () => useContext(WishListContext);