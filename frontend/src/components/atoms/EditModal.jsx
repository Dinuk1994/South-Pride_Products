/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../api/productAPI/updateProduct';

const EditModal = ({ modalRef, closeModal, product }) => {
    const [weightStock, setWeightStock] = useState([]);
    const [images, setImages] = useState([]); 
    const [newImages, setNewImages] = useState([]); 
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setWeightStock(product.weightStock);
            setImages(product.images); 
            setProductName(product.productName);
            setDescription(product.description);
            setCategory(product.category);
        }
    }, [product]);

    const handleWeightStockChange = (index, field, value) => {
        const updatedWeightStock = weightStock.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setWeightStock(updatedWeightStock);
    };

    const handleImageUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        setNewImages((prevImages) => [...prevImages, ...uploadedFiles]); 
    };

    const handleDeleteImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const folderName = `southpride/${category}/${productName.replace(/\s+/g, '_')}`;
        setLoading(true);

        const uploadPromises = newImages.map((file) => {
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
            const updatedProductData = {
                productName,
                description,
                category,
                weightStock: weightStock.map(item => ({
                    salePrice: Number(item.salePrice),
                    weight: Number(item.weight),
                    stockQty: Number(item.stockQty),
                })),
                images: [...images, ...imageUrls], 
            };

            await dispatch(updateProduct({ id: product?._id, newUpdatedData: updatedProductData })).unwrap();
            toast.success("Product updated successfully");

            setWeightStock([]);
            setImages([]); 
            setNewImages([]); 
            setProductName('');
            setDescription('');
            setCategory('');

        } catch (error) {
            console.error("Error uploading images:", error);
            toast.error("Error uploading images. Please try again.");
            
        } finally {
            setLoading(false);
            window.location.href="/admin/products"
        }
    };

    if (!product) {
        return null;
    }

    return (
        <div>
            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box p-8 m-6 border-4 border-green-700 bg-slate-300">
                    <h1 className="flex justify-center text-gray-600 text-3xl font-semibold">Update Product</h1>
                    <form onSubmit={handleSubmit} className="grid grid-col-1 gap-y-2">
                        <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="input mobile:text-sm input-bordered h-10 mobile:h-8 w-full"
                        />

                        <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input mobile:text-sm input-bordered h-10 mobile:h-8 w-full"
                        />

                        <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Category</label>
                        <select
                            className="select select-bordered text-gray-500 text-base h-10 mobile:h-8 w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option disabled>{product.category}</option>
                            <option>Spices</option>
                            <option>Nuts</option>
                            <option>Other</option>
                        </select>

                        {weightStock.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-2 mt-3">
                                <div>
                                    <label className="font-semibold text-gray-500 text-base mobile:text-sm">Weight (g)</label>
                                    <input
                                        type="number"
                                        value={item.weight}
                                        onChange={(e) => handleWeightStockChange(index, 'weight', e.target.value)}
                                        className="input mobile:text-sm mt-2 input-bordered h-10 mobile:h-8 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-500 text-base mobile:text-sm">Stock Qty</label>
                                    <input
                                        type="number"
                                        value={item.stockQty}
                                        onChange={(e) => handleWeightStockChange(index, 'stockQty', e.target.value)}
                                        className="input mobile:text-sm mt-2 input-bordered h-10 mobile:h-8 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-500 text-base mobile:text-sm">Sale Price</label>
                                    <input
                                        type="number"
                                        value={item.salePrice}
                                        onChange={(e) => handleWeightStockChange(index, 'salePrice', e.target.value)}
                                        className="input mobile:text-sm mt-2 input-bordered h-10 mobile:h-8 w-full"
                                    />
                                </div>
                            </div>
                        ))}

                        <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Images</label>
                        <div className='grid grid-cols-2 gap-4'>
                            {images.map((image, index) => (
                                <div key={index} className="mt-3 ">
                                    <img
                                        src={image}
                                        alt={`Product Image ${index + 1}`}
                                        className="w-full h-20 object-cover border-2 border-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteImage(index)}
                                        className="mt-1 btn btn-error text-white btn-xs"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            {newImages.map((image, index) => (
                                <div key={index} className="mt-3 ">
                                    <img
                                        src={URL.createObjectURL(image)} // Display the uploaded file directly
                                        alt={`New Product Image ${index + 1}`}
                                        className="w-full h-20 object-cover border-2 border-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteImage(images.length + index)} // Handle delete for new images
                                        className="mt-1 btn btn-error text-white btn-xs"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                        <label className="mt-3 font-semibold text-gray-500 text-base mobile:text-sm">Upload New Images</label>
                        <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="file-input file-input-bordered w-full mobile:w-full" />
                        
                        <div className="modal-action mt-5">
                            <button type="button" onClick={closeModal} className="btn">Cancel</button>
                            <button type="submit" className={`btn ${loading ? 'loading' : ''}`}>Update Product</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default EditModal;
