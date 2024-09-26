import { useState } from "react";
import { ImageUploader } from "../atoms/ImageUploader";

const ProductDrawer = () => {
    const [productData, setProductData] = useState({
        productName: "",
        description: "",
        category: "",
        salePrice: "",
        stockQty: "",
        image: [] 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (images) => {
        setProductData((prevData) => ({
            ...prevData,
            image: [...prevData.image, ...images], 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();     
        const imageUrls = productData.image.map((file) => URL.createObjectURL(file));  
        const productDataWithImages = {
            ...productData,
            image: imageUrls, 
        };
    
        console.log(productDataWithImages);
    };
    
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-[250px]">
                    <label htmlFor="my-drawer-4" className="drawer-button btn bg-green-600 hover:bg-green-800 text-white font-bold">Add Product</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-300 text-base-content min-h-full w-[500px] mobile:w-[320px] mobile:mr-28 p-4">
                        <div className="flex justify-start">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-y-2 mobile:gap-y-1 p-2 w-full">
                                    <label className="text-2xl font-semibold text-gray-700">Add New Product</label>

                                    <label className="mt-3 font-semibold text-lg mobile:text-sm">Product Name</label>
                                    <input type="text" name="productName" onChange={handleChange} value={productData.productName} placeholder="Enter product name" className="input mobile:text-sm input-bordered h-10 mobile:h-8 w-full" />

                                    <label className="mt-3 font-semibold text-lg mobile:text-sm">Description</label>
                                    <textarea name="description" onChange={handleChange} value={productData.description} placeholder="Enter product description" className="input mobile:text-sm input-bordered h-20 mobile:h-16 w-full" />

                                    <label className="mt-3 font-semibold text-lg mobile:text-sm">Category</label>
                                    <select name="category" value={productData.category} onChange={handleChange} className="select h-10 mobile:h-8 w-full">
                                        <option disabled>Category</option>
                                        <option>Spices</option>
                                        <option>Nuts</option>
                                        <option>Other</option>
                                    </select>

                                    <div className="grid grid-cols-2 gap-y-2 mobile:gap-y-1 mt-3">
                                        <div className="col-span-1">
                                            <label className="mt-3 font-semibold text-lg mobile:text-sm">Sale Price</label>
                                            <input type="number" name="salePrice" onChange={handleChange} value={productData.salePrice} placeholder="Sale price" className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full" />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="mt-3 font-semibold text-lg mobile:text-sm">Stock Qty</label>
                                            <input type="number" name="stockQty" onChange={handleChange} value={productData.stockQty} placeholder="Stock Qty" className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full" />
                                        </div>
                                    </div>

                                    <label className="mt-3 font-semibold text-lg mobile:text-sm">Add Images</label>
                                    <ImageUploader setImages={handleImageChange} />

                                    <button type="submit" className="btn btn-outline mobile:mt-2 hover:!text-white mobile:text-sm text-lg font-!semibold btn-accent">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDrawer;
