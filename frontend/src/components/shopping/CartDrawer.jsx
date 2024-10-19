 
/* eslint-disable react/prop-types */

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import CartItem from "../atoms/Shopping/CartItem";

const CartDrawer = ({ cartItems}) => {

    const totalPrice = cartItems?.data?.reduce((acc, item) => {
        return acc + (item.salePrice * item.quantity);
    }, 0);


    return (
        <div>
            <div className="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer p-2 ">
                        <div className="indicator -z-10">
                            <MdOutlineLocalGroceryStore className="text-white size-6 " />
                            <span className="badge badge-sm indicator-item">{cartItems.data?.length}</span>
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu   min-h-full w-[450px] mobile:w-[350px] p-4 bg-green-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
                        <label htmlFor="" className="font-semibold text-white  text-2xl mt-2 ">Your Cart ({cartItems.data?.length})</label>
                        <div className="grid gap-y-4 mt-6  w-full">
                            {Array.isArray(cartItems?.data) && cartItems.data.length > 0 ? (
                                cartItems.data
                                .slice()
                                .reverse()
                                .map((item, index) => (
                                    <CartItem key={index} item={item} />
                                ))
                            ) : (
                                <p>Your cart is empty</p>
                            )}

                        </div>
                        <div className="flex mt-6 gap-y-3">
                            <div className="grid grid-cols-2 w-full">
                                <div className="col-span-1  flex justify-start font-semibold text-lg text-white">
                                    Total Amount
                                </div>
                                <div className="col-span-1 flex pr-3 justify-end font-semibold text-lg  text-white">
                                    Rs. {totalPrice}
                                </div>

                            </div>
                        </div>
                        <a href="/shopping/checkout" className="btn btn-ghost bg-blue-400 hover:bg-blue-600 text-white font-semibold text-lg mt-8 shadow-lg shadow-gray-700">
                            Checkout
                        </a>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default CartDrawer