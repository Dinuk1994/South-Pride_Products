import { useRef } from "react"
import OrderDetailsModal from "../../components/atoms/Orders/OrderDetailsModal";
const AdminOrders = () => {
  const adminOrderDetailRef = useRef()

  const openAdminOrderDetailRef = () =>{
    if(adminOrderDetailRef.current){
      adminOrderDetailRef.current.showModal();
    }
  }

  


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
                      <th>Order Date</th>
                      <th>Order Status</th>
                      <th>Order Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>OR001</th>
                      <td>10/20/2024</td>
                      <td>In Process</td>
                      <td>Rs.1000.00</td>
                      <td>
                        <div onClick={openAdminOrderDetailRef} className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
                          Details
                        </div>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>OR002</th>
                      <td>10/20/2024</td>
                      <td>In Process</td>
                      <td>Rs.1000.00</td>
                      <td>
                        <div onClick={openAdminOrderDetailRef} className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
                          Details
                        </div>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>OR003</th>
                      <td>10/20/2024</td>
                      <td>In Process</td>
                      <td>Rs.1000.00</td>
                      <td>
                        <div onClick={openAdminOrderDetailRef} className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
                          Details
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <OrderDetailsModal adminOrderDetail={adminOrderDetailRef} visible={true}/>
    </div>
  )
}

export default AdminOrders