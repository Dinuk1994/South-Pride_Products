import { useDispatch } from "react-redux";
import ProductDrawer from "../../components/admin/ProductDrawer";
import { useEffect } from "react";
import { allProducts } from "../../api/productAPI/allProducts";

const Dashboard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch]);

  return (
    <div className="flex w-full">
      <div className="flex w-11/12">
        <label className="flex items-center ml-4 text-2xl font-semibold text-gray-400" htmlFor="">
          Dashboard
        </label>
      </div>
      <div className="w-1/12 mr-10 mobile:mr-24 mt-3">
        <ProductDrawer />
      </div>
    </div>
  );
};

export default Dashboard;
