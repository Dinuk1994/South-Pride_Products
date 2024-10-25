 
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OrderDetailsModal from "../../components/atoms/Orders/OrderDetailsModal";
import { getAllOrders } from "../../api/orderAPI/getAllOrders";
const AdminOrders = () => {
  const adminOrderDetailRef = useRef()
  const dispatch = useDispatch()
  const [orderDetail , setOrderDetail] = useState(null)

  const allOrders = useSelector((state) => state.shopOrder.orders)

  const openAdminOrderDetailRef = (order) => {
    if (adminOrderDetailRef.current) {
      adminOrderDetailRef.current.showModal();
      setOrderDetail(order)
    }
  }

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])



  console.log("Admin orders", allOrders?.orders);



  return (
    <div>
      <div className="relative bg-base-300 h-screen bg-cover bg-center">
        <div className="flex justify-center py-14 backdrop-blur-xl">
          <div className="grid">
            <label className="text-gray-700 text-2xl" htmlFor=""> Order History</label>
            <div className="w-[1200px] mobile:w-[400px] mt-5   bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
              <div className="overflow-x-auto">

                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Order Date</th>
                      <th>Order Status</th>
                      <th>Order Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Array.isArray(allOrders?.orders) && allOrders?.orders.length > 0 ? (
                        allOrders?.orders
                        .slice()
                        .reverse()
                        .map((order, index) => (
                          <tr key={index}>
                            <th>{order?._id}</th>
                            <td>{order?.address?.name}</td>
                            <td>{new Date(order?.orderDate).toLocaleDateString()}</td>
                            <td>{order?.orderStatus}</td>
                            <td>Rs. {order?.totalPrice.toFixed(2)}</td>
                            <td>
                              <div onClick={()=>openAdminOrderDetailRef(order)} className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
                                Details
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : ( <tr>
                        <td colSpan="5" className="text-center">
                          No orders found.
                        </td>
                      </tr>)
                    }

                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <OrderDetailsModal adminOrderDetail={adminOrderDetailRef} order={orderDetail} visible={true} />
    </div>
  )
}

export default AdminOrders