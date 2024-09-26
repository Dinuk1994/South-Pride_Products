import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex ">
      <div className="h-screen w-1/6 bg-slate-600 tablet-or-mobile:hidden">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col w-5/6">
        <Header />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout