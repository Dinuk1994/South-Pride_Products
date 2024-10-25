import { CarouselElement } from "../../components/atoms/CarouselElement";
import backgroundImage from "../../assets/Shipping-Detail-Image.png";
import { useEffect, useRef, useState } from "react";
import OrderDetailsModal from "../../components/atoms/Orders/OrderDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../api/orderAPI/getOrderByUserId";

const ShoppingOrders = () => {

  const adminOrderDetailRef = useRef();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const orders = useSelector((state) => state.shopOrder.orders)
  const [selectedOrderDetail, setSelectedOrderDetail] = useState(null)


  const openAdminOrderDetailRef = (order) => {
    console.log("Open Order Detail MOdal");
    setSelectedOrderDetail(order)

    if (adminOrderDetailRef.current) {
      adminOrderDetailRef.current.showModal();
    }
  }

  useEffect(() => {
    console.log("Order page", user);
    dispatch(getOrdersByUserId(user.id))

  }, [dispatch, user])

  console.log("Orders", orders?.orders);


  return (
    <div>
      <CarouselElement />
      <div className="relative bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex justify-center py-14 backdrop-blur-xl">
          <div className="grid">
            <label className="text-white text-2xl" htmlFor=""> Order History</label>
            <div className="w-[1300px] mobile:w-[400px] mt-5 h-auto  bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
              <div className="overflow-x-auto">

                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Name</th>
                      <th>Order Date</th>
                      <th>Order Status</th>
                      <th>Order Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(orders?.orders) && orders?.orders.length > 0 ? (
                      orders?.orders
                        .slice()
                        .reverse()
                        .map((order, index) => (
                          <tr key={index}>
                            <th>{order?._id}</th>
                            <td>{order?.address?.name}</td>
                            <td>{new Date(order?.orderDate).toLocaleDateString()}</td>
                            <td className={`flex justify-center px-4 text-white font-semibold rounded-lg mt-4 ${getStatusClass(order?.orderStatus)}`}>
                                {order?.orderStatus}
                              </td>
                            <td>Rs. {order?.totalPrice?.toFixed(2)}</td>
                            <td>
                              <div
                                onClick={() => openAdminOrderDetailRef(order)}
                                className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600"
                              >
                                Details
                              </div>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No orders found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <OrderDetailsModal adminOrderDetail={adminOrderDetailRef} visible={false} order={selectedOrderDetail} />
    </div>
  );
};

export default ShoppingOrders;


const getStatusClass = (status) => {
  switch (status) {
    case 'Delivering':
      return 'bg-yellow-300';
    case 'Completed':
      return 'bg-green-500';
    case "Confirmed":
      return 'bg-blue-500';
    case "In Process":
      return 'bg-orange-500';
    case "Pending":
      return 'bg-gray-500';
    default:
      return '';
  }
};
