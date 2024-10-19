/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import EditModal from './EditProduct/EditModal';
import { useSelector } from 'react-redux';
import DetailModal from './DetailModal';
import AddCartConfirmModal from './Shopping/Modals/AddCartConfirmModal';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedWeight, setSelectedWeight] = useState(product.weightStock[0]);
    const [isHovered, setIsHovered] = useState(false);
    const modalRef = useRef();
    const detailModalRef = useRef();
    const cartConfirmRef = useRef();
    const user = useSelector((state) => state.auth.user)

    const [cartProducts, setCartProducts] = useState({
        userId: null,
        productId: null,
        quantity: null,
        selectedWeight: null
    })

    const setCartItem = () => {
        if (user) {
            setCartProducts({
                userId: user?.id,
                productId: product._id,
                quantity: 1,
                selectedWeight: selectedWeight.weight,
                availableQty: selectedWeight.stockQty
            })
        }
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const openDetailModal = () => {
        if (detailModalRef.current) {
            detailModalRef.current.showModal();
        }
        console.log(product);

    }

    const openModal = () => {
        setSelectedProduct(product);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
        console.log(product);
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        setSelectedProduct(null);
    };

    const openCartConfirmModal = (e) => {
        e.stopPropagation()
        setCartItem();
        if (cartConfirmRef.current) {
            cartConfirmRef.current.showModal();
        }
    }

    const handleWeightChange = (e) => {
        const selectedWeightObject = product.weightStock.find(
            (weightObj) => weightObj.weight === parseInt(e.target.value)
        );
        setSelectedWeight(selectedWeightObject);
    };

    useEffect(() => {
        if (selectedProduct && modalRef.current && cartProducts.productId) {
            modalRef.current.showModal();
        }
        // console.log(user._id);
        // console.log({ "before Render ": cartProducts });
        // console.log({ "user": user });
    }, [user, selectedProduct, cartProducts]);

    return (
        <div>
            <div onClick={openDetailModal} className="card bg-base-200 mobile:-z-10 w-72 mobile:h-80 h-[400px]  mobile:w-48 shadow-xl shadow-gray-500 ">
                <figure className="relative h-48 w-full">
                    <img
                        className="w-full h-full object-cover"
                        src={product.images[currentImageIndex]}
                        alt={product.productName}
                    />
                    {product.images.length > 1 && (
                        <>
                            <button
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-ghost text-white p-1 rounded-full"
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            >
                                ❮
                            </button>
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost text-white p-1 rounded-full"
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            >
                                ❯
                            </button>
                        </>
                    )}
                </figure>
                <div className="card-body h-auto -mt-7 text-gray-700">
                    <h2 className="card-title text-wrap mobile:text-sm">{product?.productName}</h2>

                    <p
                        className="mobile:text-sm text-pretty relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {product.description.length > 25 ? `${product.description.slice(0, 25)}...` : product.description}
                    </p>

                    {isHovered && (
                        <div className="absolute left-0 top-10 bg-black bg-opacity-75 text-white text-xs p-2 shadow-lg border border-gray-300 rounded-md z-50 w-full mobile:text-xs">
                            <p>{product.description}</p>
                        </div>

                    )}

                    <div className="mb-4 grid grid-cols-8">
                        <div className='col-span-4 flex items-center'>
                            <label htmlFor="weight-select" className="block text-sm font-medium mobile:text-xs">
                                Select Weight:
                            </label>
                        </div>
                        <div className='col-span-4 '>
                            <select
                                id="weight-select"
                                value={selectedWeight.weight}
                                onClick={(e) => { e.stopPropagation(); }}
                                onChange={handleWeightChange}
                                className="mt-1 block w-auto p-2 border border-gray-300 rounded-md mobile:text-xs"
                            >
                                {product.weightStock.map((weightObj) => (
                                    <option key={weightObj.weight} value={weightObj.weight}>
                                        {weightObj.weight}g
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mobile:grid-cols-5">
                        <div className='col-span-1 mobile:col-span-3'>
                            <p className="mobile:text-xs text-pretty ">Price: ${selectedWeight.salePrice}</p>
                            <p className="mobile:text-xs text-pretty">Quantity: {selectedWeight.stockQty}</p>
                        </div>
                        <div className=' col-span-1 '>
                            {user.role === "admin" ? (
                                <button className="btn justify-end bg-blue-400 text-white hover:text-black" onClick={openModal}>
                                    Edit Product
                                </button>
                            ) : (
                                <button onClick={openCartConfirmModal} className="btn mobile:col-span-2 justify-end bg-blue-400 hover:bg-blue-600 text-white  mobile:text-xs " >
                                    Add to cart
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <EditModal modalRef={modalRef} closeModal={closeModal} product={selectedProduct} />
            {
                user.role === "user" ? (<DetailModal detailModal={detailModalRef} product={product} user={user} cartProduct={cartProducts} />) : (null)
            }
            <AddCartConfirmModal addToCartRef={cartConfirmRef} product={product} user={user} cartProduct={cartProducts} />
        </div>
    );
};

export default ProductCard;
