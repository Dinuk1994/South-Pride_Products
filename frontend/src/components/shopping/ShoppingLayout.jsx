import { Outlet } from "react-router-dom"
import Header from "./Header"

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div >
        <Header/>
      </div>
        <main className="h-screen">
          <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout