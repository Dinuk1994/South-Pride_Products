import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { allProducts } from "../../../api/productAPI/allProducts";
import ProductCard from "../../../components/atoms/ProductCard";

const Spices = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.adminProducts.products)

  useEffect(()=>{
    dispatch(allProducts());
  },[dispatch])

  const spiceProducts = products.filter((product)=>{
    return product.category === "Spices"
  })

  return (
    <div className="p-5 h-screen">
      <div className="grid grid-cols-4 gap-y-5 mb-5">
          {
            spiceProducts && spiceProducts.length>0 ? (
              spiceProducts.map((product)=>(
                <ProductCard key={product._id} product={product}/>
              ))
            ) : (<p>
              No products available..
            </p>)
          }
      </div>
    </div>
  )
}

export default Spices