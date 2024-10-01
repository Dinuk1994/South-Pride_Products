/* eslint-disable react/prop-types */
import { IoIosWarning } from "react-icons/io";
const ConfirmDeleteModal = ({deleteRef,onConfirmDelete}) => {
    return (
        <div>
            <dialog ref={deleteRef} id="confirm_delete_modal" className="modal">
                <div className="modal-box bg-base-200">
                    <div className="flex ">
                        <IoIosWarning className="size-8 items-center text-red-600" />
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to delete this product?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button  className="btn bg-blue-400 text-white hover:text-black" onClick={onConfirmDelete}>Yes</button>
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

export default ConfirmDeleteModal