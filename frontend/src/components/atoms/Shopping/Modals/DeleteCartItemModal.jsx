/* eslint-disable react/prop-types */
import { FaQuestionCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../../api/cartAPI/deleteItem";
import { getCartItems } from "../../../../api/cartAPI/getCartItems";

const DeleteCartItemModal = ({ deleteCartItemRef, item }) => {

    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()

    const productData = {
        productId: item.productId,
        weight: item.weight
    }


    const deleteCartItem = async (e) => {
        e.preventDefault()
        console.log("userID", user.id);
        console.log("productData", productData);
        await dispatch(deleteItem({ userId: user.id, productData: productData })).then(() => {
            dispatch(getCartItems({ id: user.id }));
        })
    }

    return (

        <div>
            <dialog ref={deleteCartItemRef} id="confirm_delete_cart_item" className="modal backdrop-blur-sm">
                <div className="modal-box bg-red-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
                    <div className="flex ">
                        <FaQuestionCircle className="size-8 items-center text-red-600" />
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to delete {item.productName} ?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={deleteCartItem} className="btn bg-blue-400 text-white hover:text-black">Yes</button>
                        </form>
                        <form method="dialog">
                            <button className="btn bg-red-400 text-white hover:text-black">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    )
}

export default DeleteCartItemModal