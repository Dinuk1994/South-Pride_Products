
/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateOrderStatus } from "../../../api/orderAPI/updateOrderStatus";
import { getAllOrders } from "../../../api/orderAPI/getAllOrders";

const OrderDetailsModal = ({ adminOrderDetail, visible, order }) => {
    const [orderStatus, setOrderStatus] = useState();
    const dispatch = useDispatch()

    const handleOrderStatus = (e) => {
        const updatedStatus = e.target.value;
        setOrderStatus(updatedStatus);
        console.log(updatedStatus);
    };

    const submitUpdatedStatus = async (e) => {
        e.preventDefault();
        await dispatch(updateOrderStatus({ orderId: order?._id, orderStatus: orderStatus })).then(() => {
            dispatch(getAllOrders())
            setTimeout(() => {
                adminOrderDetail.current.close()
            }, 800)
        });

    }


    return (
        <div>
            <dialog ref={adminOrderDetail} id="my_modal_3" className="modal backdrop-blur-sm z-50">
                <div className="modal-box h-auto w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
                    <form method="dialog">
                        <button className="btn text-white hover:bg-red-500 btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid grid-cols-2 gap-y-4 p-2 mt-4 ">
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order ID
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            {order?._id}
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Date
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            {new Date(order?.orderDate).toLocaleDateString()}
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Price
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            Rs.{order?.totalPrice?.toFixed(2)}
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex mb-2 font-semibold text-gray-100 col-span-1 justify-start">
                            Order Status
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            {order?.orderStatus}
                        </div>

                        <hr /><hr />


                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Details
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">

                        </div>

                        <div className=" mb-2 font-semibold text-gray-300 text-sm col-span-2 justify-start">
                            {order?.cartItems && order.cartItems.length > 0 ? (
                                order.cartItems.map((item, index) => (
                                    <div key={index} className="grid grid-cols-2 w-full">
                                        <div className="flex col-span-1 justify-start">
                                            {item?.title} ({item?.quantity})
                                        </div>
                                        <div className="flex col-span-1 justify-end">
                                            Rs. {item?.salePrice?.toFixed(2)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-300">No items in the cart.</div>
                            )}
                        </div>



                        <hr /><hr />

                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Shipping Details
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">

                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Name
                        </div>

                        <div className="flex text-end col-span-1 text-gray-300 justify-end">
                            {
                                order?.address?.name
                            }
                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Address
                        </div>

                        <div className="flex text-end col-span-1 text-gray-300 justify-end">
                            {
                                order?.address?.address
                            }
                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Country
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">
                            {
                                order?.address?.country
                            }
                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            City
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">
                            {
                                order?.address?.city
                            }
                        </div>
                        <div className="flex  font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Pincode
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">
                            {
                                order?.address?.postalCode
                            }
                        </div>
                    </div>

                    {
                        visible ? (

                            <div>
                                <hr /><hr />
                                <div className="mt-5">
                                    <label className="font-semibold text-gray-100 " htmlFor=""> Order Status</label>
                                </div>
                                <select
                                    value={orderStatus}
                                    onChange={handleOrderStatus}
                                    className="select mt-2 grow select-bordered w-full" defaultValue="Status">
                                    <option value="Status" disabled>Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="In Process">In Process</option>
                                    <option value="Delivering"> Delivering</option>
                                    <option value="Completed">Completed</option>
                                </select>

                                <div onClick={submitUpdatedStatus} className="btn text-white mt-5 btn-ghost w-full bg-blue-400 hover:bg-blue-600 ">
                                    Update Status
                                </div>
                            </div>
                        ) : ("")
                    }
                </div>
            </dialog>
        </div>
    )
}

export default OrderDetailsModal