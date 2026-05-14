import { useState } from "react";
import { WishListContext } from "../hooks/useWishist";
export  const WishListProvider  = ({ children }) =>  {

      const [wishlist, setWishist] = useState([]);
      const addToWishList = (product) => {
    setWishist((prev) =>{
        const exists = prev.find((item) => item._id === product._id)
        if (exists)  return prev;
        return [...prev, product]
    } )
}
const removeFromWishList = (product) => {
    setWishist((prev) => prev.filter((item) => item._id !== product._id))
}

  const isInWishlist = (productId) => wishlist.some((item) => item._id === productId);

      return (
    <WishListContext.Provider value={{ wishlist, addToWishList, removeFromWishList, isInWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}

  

