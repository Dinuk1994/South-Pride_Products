/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../api/cartAPI/addCartItems";

const AddCartConfirmModal = ({ addToCartRef, loading, product, user, cartProduct }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    const increaseQuantity = () => {
        if (quantity < cartProduct.availableQty) {
            setQuantity((prevQty) => prevQty + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQty) => prevQty - 1);
        }
    };

    const addCartItem = (e)=>{
        e.preventDefault();
        const {availableQty , ...rest} = cartProduct
        const updatedCartItem = {
            ...rest , 
           quantity : quantity
        }
        dispatch(addCartItems(updatedCartItem))
        console.log(updatedCartItem);   
        addToCartRef.current.close()
    }

    return (
        <div>
            <div>
                <dialog ref={addToCartRef} id="confirm_modal_1" className="modal">
                    <div className="modal-box bg-base-200">
                        <div className="flex">
                            <FaQuestionCircle className="size-8 items-center text-blue-600" />
                            <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">
                                Do you want to add
                                <span className="px-2 text-red-500">{product?.productName}</span>
                                to your cart?
                            </h3>
                        </div>

                        <div className="flex justify-center items-center mt-4">
                            <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 px-4" onClick={decreaseQuantity}>
                                -
                            </button>

                            <input type="text" readOnly className="mx-2 text-center border border-gray-300 rounded-md w-12" value={quantity} />

                            <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 px-4" onClick={increaseQuantity}>
                                +
                            </button>
                        </div>

                        <div className="modal-action mt-4">
                            <form method="dialog">
                                <button onClick={addCartItem} className={`btn bg-blue-400 text-white hover:text-black ${loading ? 'loading' : ''}`}> Yes </button>
                            </form>
                            <form method="dialog">
                                <button className="btn bg-red-400 text-white hover:text-black">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddCartConfirmModal;
