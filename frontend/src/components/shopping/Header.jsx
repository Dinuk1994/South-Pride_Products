import { MdOutlineLocalGroceryStore } from "react-icons/md";
import SouthPrideProducts from "../../assets/South-Pride-Products.png"
import { useRef } from "react";
import ConfirmModalLogout from "../atoms/ConfirmModalLogout";
const Header = () => {

  const confirmRef = useRef();

  const confirm=()=>{
    if(confirmRef.current){
        confirmRef.current.showModal();
    }
  }

  return (
    <div>
      <div className="navbar bg-ShoppingHeader">
        <div className="flex-1">
          <img src={SouthPrideProducts} className="size-12 flex items-center" alt="" />
          <a className="btn btn-ghost text-xl text-headerText mobile:text-[16px] flex items-center">South Pride Products</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-8 mobile:mr-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineLocalGroceryStore className="text-white size-6" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
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
                  Profile
                  <span className="badge">New</span>
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