import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from "./context/CartContext";
import { WishListProvider } from './context/WishlistContext.jsx';
import { AddressProvider } from './context/AddressContext.jsx';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from './pages/Categories.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Wishlist from './pages/Wishlist.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Checkout from './pages/Checkout.jsx';
import OrderSuccess from './pages/OrderSuccess.jsx';
import Address from "./pages/Address.jsx"
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

  },
  {
    path: "/profile",
      element: < UserProfile />
  },
  {
    path: "/checkout",
      element: < Checkout />
  },
  {
  path: "/order-success",
  element: <OrderSuccess />
},
{
  path:"/address",
  element: <Address />
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddressProvider>
    <CartProvider> 
      <WishListProvider> 
        <Toaster position="top-center" />  
      <RouterProvider router={router} />
      </WishListProvider>  
    </CartProvider>
    </AddressProvider>
  </StrictMode>,
)
