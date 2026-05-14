import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from "./context/CartContext";
import { WishListProvider } from './context/WishlistContext.jsx';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from './pages/Categories.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Wishlist from './pages/Wishlist.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories/:categoryId",
    element: <Categories />,
  },
  {
    path:"/products",
    element: <Products />
  },
  {
    path:"/cart",
    element: <Cart />
  }, {
    path: "/products/:productId",
    element: <ProductDetail />
  }, {
      path: "/wishlist",
      element: < Wishlist />

  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <WishListProvider>   
      <RouterProvider router={router} />
      </WishListProvider>  
    </CartProvider>
  </StrictMode>,
)
