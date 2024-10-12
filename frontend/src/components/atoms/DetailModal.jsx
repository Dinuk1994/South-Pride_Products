/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { DetailCarousel } from "./DetailCarousel"
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import AddCartConfirmModal from "./Shopping/AddCartConfirmModal";
import { useSelector } from "react-redux";

const DetailModal = ({ detailModal, product ,cartProducts,user }) => {
    const cartConfirmRef = useRef();

    const [selectedWeight, setSelectedWeight] = useState(product.weightStock[0]);

    const [cartProduct,setCartProduct]=useState({    
        userId : null,
        productId : null,
        quantity : null,
        selectedWeight : null
    })

    const setCartItem = ()=>{
        if(user){
            setCartProduct({
                userId: user._id,
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

    const openCartConfirmModal=(e)=>{
        console.log({"UserID" : user._id});
        setCartItem()
        console.log(cartProduct);
        e.preventDefault()
        if(cartConfirmRef.current){
            cartConfirmRef.current.showModal();
        }
    }

    return (
        <div>
            <dialog ref={detailModal} id="detail_box" className="modal">
                <div className="modal-box w-full h-full bg-gray-300 max-w-3xl max-h-[430px]">
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
                                            <IoStarHalf/>
                                            <label className="flex items-center text-sm -mt-1 ml-1 " htmlFor="">(4.5)</label>
                                        </div>
                                       
                                    </div>
                                    <p className="text-gray-500  text-pretty max-h-[150px] overflow-y-auto">{product.description}</p>
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
                                            <p className="mobile:text-xs text-pretty">Quantity: {selectedWeight.stockQty}</p>
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
            <AddCartConfirmModal addToCartRef={cartConfirmRef} product={product} user={user} cartProduct={cartProduct} />
        </div>
    )
}

export default DetailModal