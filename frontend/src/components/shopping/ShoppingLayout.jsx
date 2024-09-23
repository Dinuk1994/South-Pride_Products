import { Outlet } from "react-router-dom"
import Header from "./Header"

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header/>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout