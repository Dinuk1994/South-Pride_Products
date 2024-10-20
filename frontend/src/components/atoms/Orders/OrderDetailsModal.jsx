
/* eslint-disable react/prop-types */

const OrderDetailsModal = ({ adminOrderDetail, visible }) => {
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
                            OR123
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Date
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            10/20/2024
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Price
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            Rs. 1000.00
                        </div>
                        {/* ---------------------------------- */}
                        <div className="flex mb-2 font-semibold text-gray-100 col-span-1 justify-start">
                            Order Status
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">
                            In Process
                        </div>

                        <hr /><hr />


                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Order Details
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">

                        </div>

                        <div className="flex mb-2 font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Products1
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">
                            Rs. 1500.00
                        </div>

                        <hr /><hr />

                        {/* ---------------------------------- */}
                        <div className="flex font-semibold text-gray-100 col-span-1 justify-start">
                            Shipping Details
                        </div>
                        <div className="flex col-span-1 text-gray-100 justify-end">

                        </div>

                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Kasundara
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">

                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Address
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">

                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Country
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">

                        </div>
                        <div className="flex font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            City
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">

                        </div>
                        <div className="flex  font-semibold text-gray-300 text-sm col-span-1 justify-start">
                            Pincode
                        </div>
                        <div className="flex col-span-1 text-gray-300 justify-end">

                        </div>
                    </div>

                    {
                        visible ? (

                            <div>
                                <hr /><hr />
                                <div className="mt-5">
                                    <label className="font-semibold text-gray-100 " htmlFor=""> Order Status</label>
                                </div>
                                <select className="select mt-2 grow select-bordered w-full" defaultValue="Status">
                                    <option value="Status" disabled>Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="In Process">In Process</option>
                                    <option value="Completed">Completed</option>
                                </select>

                                <div className="btn text-white mt-5 btn-ghost w-full bg-blue-400 hover:bg-blue-600 ">
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