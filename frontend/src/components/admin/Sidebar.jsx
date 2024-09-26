import { MdAdminPanelSettings } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiBasket } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center pt-8">
        <a href="/admin/dashboard" className="btn btn-ghost flex items-center space-x-2">
          <MdAdminPanelSettings className="text-green-500 size-10" />
          <span className="text-white text-xl font-bold">Admin Panel</span>
        </a>
      </div>
      <div className="grid grid-cols-1 pt-10 gap-y-7">
        <div className="flex justify-center">
          <a href="/admin/dashboard" className="btn btn-ghost flex justify-start group w-44">
            <LuLayoutDashboard className="text-white text-xl group-hover:text-yellow-300" />
            <span className="text-white text-lg font-bold group-hover:text-yellow-300">Dashboard</span>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/admin/products" className="btn btn-ghost flex justify-start group w-44">
            <GiBasket className="text-white text-xl group-hover:text-yellow-300" />
            <span className="text-white text-lg font-bold group-hover:text-yellow-300">Products</span>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/admin/orders" className="btn btn-ghost flex justify-start group w-44">
            <MdProductionQuantityLimits className="text-white text-xl group-hover:text-yellow-300" />
            <span className="text-white text-lg font-bold group-hover:text-yellow-300">Orders</span>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="/admin/features" className="btn btn-ghost flex justify-start  group w-44">
            <MdOutlineFeaturedPlayList className="text-white text-xl group-hover:text-yellow-300" />
            <span className="text-white text-lg font-bold group-hover:text-yellow-300">Features</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
