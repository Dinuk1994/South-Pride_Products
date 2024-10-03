import ProductDrawer from "../../components/admin/ProductDrawer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allProducts } from "../../api/productAPI/allProducts";
import ProductCard from "../../components/atoms/ProductCard";


const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.adminProducts.products);
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }


  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All Categories") {
      return true;
    }
    return product.category === selectedCategory
  })

  return (
    <div className="flex w-full overflow-scroll">
      <div className="flex w-11/12">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <label className="flex items-center ml-4 mt-5 text-2xl font-semibold text-gray-50000">
                Products
              </label>
            </div>
            <div className="col-span-3 flex items-center mt-2">
              <select
                className="select select-bordered w-full max-w-xs"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option disabled>Select Category</option>
                <option>All Categories</option>
                <option>Spices</option>
                <option>Nuts</option>
                <option>Herbs</option>
                <option>Baking</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="mt-10 gap-y-5 gap-x-36 w-full  mobile:gap-x-32 ml-5 mobile:ml-3  mb-10 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/12 mr-10 mobile:mr-24 mt-3">
        <ProductDrawer />
      </div>
    </div>
  );
};

export default Products;
