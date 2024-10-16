/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { FaQuestionCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../../api/cartAPI/getCartItems";
import { updateCartItem } from "../../../../api/cartAPI/updateCartItems";

export const UpdateCartConfirmModal = ({updateCartItemRef ,item,updatedQty}) => {

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.auth.user);

    const handleUpdateCartItem = async()=>{
        if(item.quantity !==updatedQty){
            const updatedCartItem={
                productId : item.productId,
                quantity :updatedQty,
                weight : item.weight
            }

           await dispatch(updateCartItem({userId : user.id , updatedCartItem : updatedCartItem})).then(()=>[
                dispatch(getCartItems({id : user.id}))
            ])
            console.log(user.id,updatedCartItem);
        }else{
            toast.error("Quantity is same. cannot be updated")
            updateCartItemRef.current.close()
        }      
    }
   
    return (
        <div>
            <dialog ref={updateCartItemRef} id="confirm_delete_cart_item" className="modal">
                <div className="modal-box bg-base-200">
                    <div className="flex ">
                        <FaQuestionCircle className="size-8 items-center text-red-600" />
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to update {item.productName} quantity?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleUpdateCartItem} className="btn bg-blue-400 text-white hover:text-black">Yes</button>
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
