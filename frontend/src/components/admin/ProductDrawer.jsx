import { useState } from "react";
import { ImageUploader } from "../atoms/ImageUploader";
import toast from 'react-hot-toast';

const ProductDrawer = () => {
    const [loading, setLoading] = useState(false);
    const [weightInput, setWeightInput] = useState("");
    const [stockQtyInput, setStockQtyInput] = useState("");

    const [productData, setProductData] = useState({
        productName: "",
        description: "",
        category: "",
        salePrice: "",
        weightStock: [],
        image: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddWeightStock = () => {
        if (weightInput && stockQtyInput) {
            setProductData((prevData) => ({
                ...prevData,
                weightStock: [...prevData.weightStock, { weight: weightInput, stockQty: stockQtyInput }],
            }));
            setWeightInput('');
            setStockQtyInput('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (
            !productData.productName ||
            !productData.description ||
            !productData.category ||
            !productData.salePrice ||
            productData.weightStock.length === 0 ||
            productData.image.length === 0
        ) {
            toast.error("Please fill in all required fields before submitting.");
            return;
        }

        const folderName = `southpride/${productData.category}/${productData.productName.replace(/\s+/g, '_')}`;
        setLoading(true);

        console.log(productData.category);

        const uploadPromises = productData.image.map((file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "south_pride_products");
            formData.append("folder", folderName);

            return fetch("https://api.cloudinary.com/v1_1/doyd9gnzc/image/upload", {
                method: "POST",
                body: formData,
            }).then((response) => response.json());
        });

        try {
            const uploadedImages = await Promise.all(uploadPromises);
            const imageUrls = uploadedImages.map((img) => img.secure_url);

            const finalProductData = {
                ...productData,
                salePrice : Number(productData.salePrice),
                weightStock: productData.weightStock.map(item => ({
                    weight: Number(item.weight),  
                    stockQty: Number(item.stockQty)  
                })),
                image: imageUrls,
            };

            console.log("Final product data:", finalProductData);
            toast.success("Product added successfully with images!");
        } catch (error) {
            console.error("Error uploading images:", error);
            toast.error("Error uploading images. Please try again.");
        } finally {
            setLoading(false);
        }
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
                                <div className="grid grid-cols-1 gap-y-1 mobile:gap-y-1 p-2 w-full">
                                    <label className="text-2xl font-semibold text-gray-700">Add New Product</label>

                                    <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Product Name</label>
                                    <input type="text" name="productName" onChange={handleChange} value={productData.productName} placeholder="Enter product name" className="input mobile:text-sm input-bordered h-10 mobile:h-8 w-full" />

                                    <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Description</label>
                                    <textarea name="description" onChange={handleChange} value={productData.description} placeholder="Enter product description" className="input mobile:text-sm input-bordered h-20 mobile:h-16 w-full" />

                                    <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Category</label>
                                    <select name="category" value={productData.category} onChange={handleChange} className="select text-gray-500 text-base h-10 mobile:h-8 w-full">
                                        <option value="" disabled>Category</option>
                                        <option>Spices</option>
                                        <option>Nuts</option>
                                        <option>Other</option>
                                    </select>

                                    <div className="grid grid-cols-2 gap-y-2 mobile:gap-y-1 mt-3">
                                        <div className="col-span-1 mr-1">
                                            <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Sale Price</label>
                                            <input type="number" name="salePrice" onChange={handleChange} value={productData.salePrice} placeholder="Sale price" className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full" />
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-2 gap-y-2 mobile:gap-y-1 mt-3">
                                        <div className="col-span-1 mr-1">
                                            <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Product Weight</label>
                                            <input
                                                type="number"
                                                value={weightInput}
                                                onChange={(e) => setWeightInput(e.target.value)}
                                                placeholder="Product weight"
                                                className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full"
                                            />
                                        </div>
                                        <div className="col-span-1 ml-1">
                                            <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Stock Quantity</label>
                                            <input
                                                type="number"
                                                value={stockQtyInput}
                                                onChange={(e) => setStockQtyInput(e.target.value)}
                                                placeholder="Stock Quantity"
                                                className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-10">
                                        <div className="col-span-3 flex items-center">
                                            <button type="button" onClick={handleAddWeightStock} className="btn btn-outline flex items-center mt-2 justify-center text-sm hover:!text-white btn-accent">Add Stock</button>
                                        </div>
                                        <div className="col-span-7">
                                            <ul className="mt-2 grid grid-cols-3 mobile:grid mobile:grid-cols-2 gap-4">
                                                {productData.weightStock.length > 0 && productData.weightStock.map((item, index) => (
                                                    item.weight && item.stockQty ? (
                                                        <li key={index} className="mt-1">
                                                            <div className="flex mobile:ml-4 items-center justify-between text-nowrap">                       
                                                                <span>{item.weight}g :</span>
                                                                <span>{item.stockQty}</span>
                                                                {index !== productData.weightStock.length - 1 && <span>|</span>}
                                                            </div>
                                                        </li>
                                                    ) : null 
                                                ))}
                                            </ul>
                                        </div>
                                    </div>



                                    <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Add Images</label>
                                    <ImageUploader
                                        setImages={(images) => {
                                            console.log("Images received from uploader:", images);
                                            setProductData((prevData) => ({ ...prevData, image: Array.isArray(images) ? images : [] }));
                                        }}
                                    />

                                    <button
                                        type="submit"
                                        className={`btn btn-outline flex items-center justify-center text-lg mobile:text-sm hover:!text-white btn-accent`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="loading loading-spinner"></span>
                                            </>
                                        ) : (
                                            "Add Product"
                                        )}
                                    </button>
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
