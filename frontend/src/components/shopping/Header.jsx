/* eslint-disable react/prop-types */

import SouthPrideProducts from "../../assets/South-Pride-Products.png"
import { useRef } from "react";
import ConfirmModalLogout from "../atoms/ConfirmModalLogout";
import CartDrawer from "./CartDrawer";
import { useLocation } from "react-router-dom";
const Header = ({ cartItems }) => {

  const location = useLocation()

  const confirmRef = useRef();

  const isCheckoutPage = location.pathname == "/shopping/checkout"
  const isAccountPage = location.pathname == "/shopping/account"

  const confirm = () => {
    if (confirmRef.current) {
      confirmRef.current.showModal();
    }
  }

  return (
    <div>
      <div className="navbar bg-ShoppingHeader">
        <div className="flex-1">
          <img src={SouthPrideProducts} className="size-12 flex items-center" alt="" />
          <a href="/shopping/home" className="btn btn-ghost text-xl text-headerText mobile:text-[16px] flex items-center">South Pride Products</a>
        </div>
        <div className="flex-none">
          {!isCheckoutPage && !isAccountPage && (
            <div className="dropdown dropdown-end mr-8 mobile:mr-2">
              <CartDrawer cartItems={cartItems} />
            </div>
          )}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-50 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Account
                  <span className="badge">New</span>
                </a>
                <a href="/shopping/account" className="justify-between">
                  Shipping details
                </a>
                
                <a href="/shopping/shoppingOrders" className="justify-between">
                  My orders
                </a>
                <a href="/shopping/checkout" className="justify-between">
                  Checkout
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={confirm}><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <ConfirmModalLogout confirmRef={confirmRef} />
    </div>
  )
}

export default Header