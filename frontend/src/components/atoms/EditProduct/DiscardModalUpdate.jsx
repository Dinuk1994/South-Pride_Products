/* eslint-disable react/prop-types */
import { FaQuestionCircle } from "react-icons/fa";
const DiscardModalUpdate = ({discardRef, closeModal}) => {
  return (
    <div>
         <dialog ref={discardRef} id="discard_update_modal" className="modal">
                <div className="modal-box bg-base-200">
                    <div className="flex ">
                        <FaQuestionCircle className="size-8 items-center text-blue-600" />
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to discard the update?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button  className="btn bg-blue-400 text-white hover:text-black " onClick={closeModal}>Yes</button>
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

export default DiscardModalUpdate