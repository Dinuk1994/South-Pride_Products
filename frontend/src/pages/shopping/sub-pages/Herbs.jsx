import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allProducts } from "../../../api/productAPI/allProducts"
import ProductCard from "../../../components/atoms/ProductCard"

const Herbs = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.adminProducts.products)
 
  useEffect(()=>{
    dispatch(allProducts())
  },[dispatch])

  const herbsProducts = products.filter((product)=>{
    return product.category === "Herbs"
  })

  return (
    <div className="p-5 h-screen">
      <div className="grid grid-cols-4 mb-5 gap-y-5 mobile:grid mobile:grid-cols-2 mobile:justify-between gap-x-6 tablet:grid tablet:grid-cols-2">
          {
            herbsProducts && herbsProducts.length > 0 ? (
              herbsProducts.map((product)=>(
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

export default Herbs