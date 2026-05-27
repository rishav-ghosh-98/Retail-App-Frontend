import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../api/endpoints";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
const Categories = () => {
  const { categoryId } = useParams();
  const { data: response, loading, error } = useFetch(ENDPOINTS.products);
  const products = response?.products || [];
  const { data: category } = useFetch(`/categories/${categoryId}`);
  const categoryProducts = products.filter((prod) => prod.category === category?.name)
  console.log(categoryProducts)
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>Categories</h2>
      <Header />
      <p>Fix the categories over here</p>
      <div className="row">
                {categoryProducts.map((prod) => (
                  <div key={prod._id || prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <ProductCard product={prod} />
                  </div>
                ))}
     </div>
    </>
  );
};
export default Categories;
