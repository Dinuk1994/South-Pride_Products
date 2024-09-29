import { IoMdLogOut } from "react-icons/io";
import MobileDrawer from "./MobileDrawer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logoutUser } from "../../api/authApi/logoutUser";

const Header = () => {
  const userEmail = useSelector((state) => state.auth.user.email);

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
  
      toast.success("Logout Successful");
      window.location.href = "/auth/login"; 
    } catch (error) {
      toast.error("Logout Failed", error.message);
      console.log(error);
    }
  };
  

  return (
    <div>
      <div className="navbar bg-AdminHeader">
        <div className="flex-1">
          <div className="desktop-or-laptop:hidden">
            <MobileDrawer />
          </div>
          <a className="pl-3 text-xl mobile:ml-5 text-white mobile:text-sm font-bold">
            Administration -{" "}
            <span className="text-yellow-200 mobile:text-sm text-nowrap">
              South Pride Products
            </span>
          </a>
        </div>
        <div className="flex">
          <div className="dropdown dropdown-end flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 mobile:w-5 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
          <label
            className="text-[15px] mobile:text-[10px] mobile:ml-0 ml-2 text-yellow-200"
            htmlFor=""
          >
            {userEmail}
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              onClick={handleLogOut}
              role="button"
              className="btn group btn-ghost btn-circle avatar hover:text-white hover:bg-red-500"
            >
              <IoMdLogOut className="text-2xl group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
