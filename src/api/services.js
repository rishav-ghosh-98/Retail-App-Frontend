import api from "./config";
import { ENDPOINTS } from "./endpoints";
// Users
export const getUsers = ()=> api.get(ENDPOINTS.users);
// Products
export const getProducts = () => api.get(ENDPOINTS.products);
export const getProductById  = (id) => api.get(`${ENDPOINTS.products}/${id}`);
// Orders
export const getOrders = () => api.get(ENDPOINTS.orders);
//categorries
export const getCategories = () => api.get(ENDPOINTS.categories)