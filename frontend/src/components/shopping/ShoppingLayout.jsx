import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const ShoppingLayout = () => {

  return (
    <div className="flex flex-col overflow-hidden">
      <div >
        <Header />
      </div>
      <main className="h-screen">
        <Outlet />
      </main>
      <hr className="border-t-2 border-gray-300" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ShoppingLayout