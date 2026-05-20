import Header from "../components/Header";
import { useOrder } from "../hooks/useOrder";
const Orders = () => {
  const { orders } = useOrder();
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="mt-4">My Orders</h1>
        {orders.length === 0 ? (
            <div className="container mt-4">
                 <h2 style={{ textAlign: "center" }}>No orders Yet</h2>
            </div>
         
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                border: "1px solid gray",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h3>{order.id}</h3>
              <p>Date: {new Date(order.date).toLocaleString()}</p>

              <p>Total: ₹{order.totalAmount}</p>
                  <hr />

            {order.items.map((item) => (
              <div
                key={item._id}
                style={{
                  marginBottom: "10px",
                }}
              >
                <h4>{item.title}</h4>

                <p>Price: ₹{item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <img
                  src={`${import.meta.env.VITE_API_URL}${item.image}`}
                  alt={item.title}
                  width="100"
                />
              </div>
            ))}
            </div>
          ))
        )}
      </div>
      {console.log(orders)}
    </>
  );
};
export default Orders;
