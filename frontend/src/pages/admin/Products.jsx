import ProductDrawer from "../../components/admin/ProductDrawer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "../../api/productAPI/allProducts";
import ProductCard from "../../components/atoms/productCard";

const Products = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.adminProducts.products);

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  console.log(products);
  return (
    <div className="flex w-full ">
      <div className="flex w-11/12">
        <div className="grid grid-cols-1">
          <label className="flex items-center ml-4  mt-5 text-2xl font-semibold text-gray-50000" htmlFor="">
            Products
          </label>
          <div className=" mt-10 gap-y-5  gap-x-36 mobile:gap-x-32  ml-5 mobile:ml-3 mb-10 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
            {products && products.length > 0 ? (
              products.map((product,index)=>(
                <ProductCard key={index} product={product} />
              ))
            ): (  <p>No products available</p> )}
   
          </div>
        </div>

      </div>
      <div className="w-1/12 mr-10 mobile:mr-24 mt-3">
        <ProductDrawer />
      </div>
    </div>
  )
}

export default Products