import ProductDrawer from "../../components/admin/ProductDrawer"

const Dashboard = () => {
  return (
    <div className="flex w-full">
        <div className="flex w-11/12">
            <label className="flex items-center ml-4 text-2xl font-semibold text-" htmlFor="">Dashboard</label>
        </div>
        <div className="w-1/12 mr-10 mobile:mr-24 mt-3">
            <ProductDrawer/>
        </div>
    </div>
  )
}

export default Dashboard
