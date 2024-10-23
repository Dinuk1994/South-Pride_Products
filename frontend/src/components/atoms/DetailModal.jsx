
/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { DetailCarousel } from "./DetailCarousel"
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import AddCartConfirmModal from "./Shopping/Modals/AddCartConfirmModal";


const DetailModal = ({ detailModal, product, user }) => {
    const cartConfirmRef = useRef();

    const [selectedWeight, setSelectedWeight] = useState(product.weightStock[0]);

    const [cartProduct, setCartProduct] = useState({
        userId: null,
        productId: null,
        quantity: null,
        selectedWeight: null
    })

    const setCartItem = () => {
        if (user) {
            setCartProduct({
                userId: user?.id,
                productId: product._id,
                quantity: 1,
                selectedWeight: selectedWeight.weight,
                availableQty: selectedWeight.stockQty
            })
        }
    }

    const handleWeightChange = (event) => {
        const selectedWeightObject = product.weightStock.find(
            (weightObj) => weightObj.weight === parseInt(event.target.value)
        );
        setSelectedWeight(selectedWeightObject);
    };

    console.log("DetailModal", user?.id);


    const openCartConfirmModal = (e) => {
        console.log({ "UserID": user._id });
        setCartItem()
        //console.log(cartProduct);
        e.preventDefault()
        if (cartConfirmRef.current) {
            cartConfirmRef.current.showModal();
        }
    }

    return (
        <div>
            <dialog ref={detailModal} id="detail_box" className="modal backdrop-blur-sm">
                <div className="modal-box w-full h-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100 bg-gray-300 max-w-3xl max-h-[430px]">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid grid-cols-1">
                        <div className="grid grid-cols-6 mt-3 gap-x-2">
                            <div className="col-span-3 mt-5">
                                <DetailCarousel product={product} />
                            </div>
                            <div className="col-span-3 mt-3 ml-5">
                                <div className="grid gap-y-2">
                                    <div className="grid">
                                        <h3 className="font-bold text-2xl">{product.productName}</h3>
                                        <div className="text-yellow-500  mt-1 flex items-center ">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                            <label className="flex items-center text-sm -mt-1 ml-1 " htmlFor="">(4.5)</label>
                                        </div>

                                    </div>
                                    <p className="text-gray-600  text-pretty max-h-[150px] overflow-y-auto">{product.description}</p>
                                    <label htmlFor="">Select weight</label>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-1">
                                            <select
                                                id="weight-select"
                                                value={selectedWeight.weight}
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
                                        <div className='col-span-1 flex items-center'>
                                            <p className="mobile:text-xs text-pretty ">Price: ${selectedWeight.salePrice}</p>

                                        </div>
                                        <div className="col-span-1  flex items-center">
                                            {
                                                selectedWeight.stockQty !== 0 ? (
                                                    <p className="mobile:text-xs text-pretty">Quantity: {selectedWeight.stockQty}</p>
                                                ) : (
                                                    <p className="mobile:text-xs text-red-500 font-semibold">Out of Stock</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div onClick={openCartConfirmModal} className="btn btn-ghost mt-2 bg-blue-400 hover:bg-blue-600 hover:text-white">
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            <AddCartConfirmModal addToCartRef={cartConfirmRef} detailModalRef={detailModal} product={product} user={user} cartProduct={cartProduct} />
        </div>
    )
}

export default DetailModal