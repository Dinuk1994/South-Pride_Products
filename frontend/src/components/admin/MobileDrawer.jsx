import { GiHamburgerMenu } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiBasket } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
const MobileDrawer = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <GiHamburgerMenu
                        className="size-8 cursor-pointer text-white"
                        onClick={() => {
                            const drawerToggle = document.getElementById('my-drawer');
                            drawerToggle.checked = !drawerToggle.checked;
                        }}
                    />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-slate-500 text-base-content min-h-full mt-16 fixed w-48 p-4">
                        <div className="flex justify-center">
                            <MdAdminPanelSettings className="text-green-500 size-8" />
                            <label className="flex items-center ml-1 text-white text-lg font-semibold" htmlFor="">Admin Panel</label>
                        </div>
                        <div className="grid grid-cols-1 mt-5 gap-y-3">
                            <div className="flex justify-start">
                                <li><a href="/admin/dashboard" className="text-white font-bold">
                                    <LuLayoutDashboard className="size-4 text-white" />
                                    Dashboard
                                </a></li>
                            </div>
                            <div className="flex justify-start ">
                                <li><a href="/admin/products" className="text-white font-bold">
                                    <GiBasket className="size-4 text-white" />
                                    Products
                                </a></li>
                            </div>
                            <div className="flex justify-start ">
                                <li><a href="/admin/orders" className="text-white font-bold">
                                    <MdProductionQuantityLimits className="size-4 text-white" />
                                    Orders
                                </a></li>
                            </div>
                            <div className="flex justify-start ">
                                <li><a href="/admin/features" className="text-white font-bold">
                                    <MdOutlineFeaturedPlayList className="size-4 text-white" />
                                    Features
                                </a></li>
                            </div>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileDrawer;
