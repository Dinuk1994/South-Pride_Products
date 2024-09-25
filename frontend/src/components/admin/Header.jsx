
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-AdminHeader ">
        <div className="flex-1">
          <a className="pl-3 text-xl text-white mobile:text-sm font-bold">Administration - <span className="text-yellow-200 mobile:text-sm text-nowrap">South Pride Products</span></a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn group btn-ghost btn-circle avatar hover:text-white hover:bg-red-500">             
                <IoMdLogOut className="text-2xl group" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header