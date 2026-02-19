import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from './pages/Categories.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
