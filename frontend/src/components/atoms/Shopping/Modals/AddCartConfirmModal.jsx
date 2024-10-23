/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../../../../api/cartAPI/addCartItems";
import toast from "react-hot-toast";
import { getCartItems } from "../../../../api/cartAPI/getCartItems";

const AddCartConfirmModal = ({ addToCartRef, loading, product, cartProduct, detailModalRef, user }) => {

    const cartItems = useSelector((state) => state.cart.cartItems);


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

    const addCartItem = (e) => {
        e.preventDefault();
              
        console.log(cartProduct.selectedWeight);
        
        cartItems?.data?.forEach(item => {
            console.log("Cart Product Weight:", item.weight);
        });
      
        const existingCartItem = cartItems?.data?.find(item =>
            item.productId === cartProduct.productId && item.weight === cartProduct.selectedWeight
        );

        if (existingCartItem) {
            toast.error("This item is already in your cart.");
            addToCartRef.current.close();
            return;
        } else {
            if (cartProduct.availableQty > 0) {
                const { availableQty, ...rest } = cartProduct;
                const updatedCartItem = {
                    ...rest,
                    quantity: quantity 
                };
   
                console.log("Updated Cart Item:", updatedCartItem);

                dispatch(addCartItems(updatedCartItem)).then(() => {
                    dispatch(getCartItems({ id: user.id }));
                });

                setTimeout(() => {
                    addToCartRef.current.close();
                    detailModalRef?.current.close();
                }, 1000);
            } else {
                addToCartRef.current.close();
                toast.error("Sorry, product is out of stock.");
            }
        }
    }

    useEffect(() => {
        if (cartProduct) {
           // console.log({ "cart Items in Drawer": cartProduct });
        }
    }, [cartProduct]);

    return (
        <div>
            <div>
                <dialog ref={addToCartRef} id="confirm_modal_1" className="modal backdrop-blur-sm">
                    <div className="modal-box  bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
                        <div className="grid gap-2">
                            <div className="flex justify-center">
                                <FaQuestionCircle className="size-8  items-center text-blue-600" />
                            </div>
                            <label className="font-semibold text-nowrap text-lg ml-2 text-gray-800  flex justify-center">
                                Do you want to add <span className="px-2 text-red-500">{product?.productName}</span> to your cart?
                            </label>
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
