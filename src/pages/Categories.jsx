import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <Header />
      <div className="container mt-4 page-section">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
          <div>
            <h2 className="mb-1">{category?.name.toUpperCase() || "Category"}</h2>
            <p className="text-muted mb-0">Browse products in this category.</p>
          </div>
        </div>

        <div className="row g-4">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((prod) => (
              <div key={prod._id || prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard product={prod} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="mb-0 text-muted">No products found for this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Categories;
