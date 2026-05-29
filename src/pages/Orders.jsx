import Header from "../components/Header";
import Footer from "../components/Footer";
import { useOrder } from "../hooks/useOrder";
const Orders = () => {
  const { orders } = useOrder();
  return (
    <>
      <Header />
      <div className="container page-section mt-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
          <div>
            <h1 className="mb-1">My Orders</h1>
            <p className="text-muted mb-0">
              Review your recent purchases and order details in one place.
            </p>
          </div>
          <div className="text-muted">
            {orders.length} order{orders.length === 1 ? "" : "s"}
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-5">
            <h2 className="mb-3">No orders yet</h2>
            <p className="text-muted">Once you place an order, it will appear here.</p>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card mb-4 p-4">
              <div className="order-card-header">
                <div>
                  <h3 className="mb-1">Order #{order.id}</h3>
                  <p className="text-muted mb-0">
                    {new Date(order.date).toLocaleString()}
                  </p>
                </div>
                <div className="order-badge">Total: ₹{order.totalAmount}</div>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item._id} className="order-item">
                    <div className="order-item-image">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${item.image}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="order-item-details">
                      <h4>{item.title}</h4>
                      <p className="text-muted mb-1">Price: ₹{item.price}</p>
                      <p className="text-muted mb-1">Quantity: {item.quantity}</p>
                      <p className="text-muted mb-0">Category: {item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};
export default Orders;
