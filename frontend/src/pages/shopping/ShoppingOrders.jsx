import { CarouselElement } from "../../components/atoms/CarouselElement";
import backgroundImage from "../../assets/Shipping-Detail-Image.png";
import { useRef } from "react";
import OrderDetailsModal from "../../components/atoms/Orders/OrderDetailsModal";

const ShoppingOrders = () => {

  const adminOrderDetailRef = useRef();

  const openAdminOrderDetailRef = () =>{
    console.log("Open Order Detail MOdal");
    
    if(adminOrderDetailRef.current){
      adminOrderDetailRef.current.showModal();
    }
  }

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
                        <div  onClick={openAdminOrderDetailRef} className="btn btn-ghost shadow-lg shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
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
      <div>
       
      </div>
      <OrderDetailsModal adminOrderDetail={adminOrderDetailRef} visible={false}/>
    </div>
  );
};

export default ShoppingOrders;
