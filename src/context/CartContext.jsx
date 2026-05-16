import { useState } from "react";
import { CartContext } from "../hooks/useCart";
import toast from "react-hot-toast";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantityToAdd = 1) => {
    const exists = cart.find((item) => item._id === product._id);

    if (exists) {
      if (quantityToAdd > 0) toast.success("Quantity increased!");
      if (quantityToAdd < 0) toast.success("Quantity decreased!");
    } else if (quantityToAdd > 0) {
      toast.success("Added to cart! 🛒");
    }

    setCart((prev) => {
      const existsInPrev = prev.find((item) => item._id === product._id);

      if (existsInPrev) {
        return prev
          .map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + quantityToAdd }
              : item
          )
          .filter((item) => item.quantity > 0);
      }

      if (quantityToAdd <= 0) return prev;

      return [...prev, { ...product, quantity: quantityToAdd }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
    toast.error("Removed from cart!");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};