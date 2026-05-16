import { useState } from "react";
import { WishListContext } from "../hooks/useWishist";
import toast from "react-hot-toast";

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishist] = useState([]);

  const addToWishList = (product) => {
    const exists = wishlist.find((item) => item._id === product._id); 

    if (exists) {
      toast.error("Already in wishlist!");
      return;
    }

    toast.success("Added to wishlist! ❤️");
    setWishist((prev) => [...prev, product]);
  };

  const removeFromWishList = (product) => {
    setWishist((prev) => prev.filter((item) => item._id !== product._id));
    toast.error("Removed from wishlist!");
  };

  const isInWishlist = (productId) => wishlist.some((item) => item._id === productId);

  return (
    <WishListContext.Provider value={{ wishlist, addToWishList, removeFromWishList, isInWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};