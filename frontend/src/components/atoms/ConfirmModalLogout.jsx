/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../api/authApi/logoutUser";
import { Navigate, useNavigate } from "react-router-dom";
const ConfirmModalLogout = ({ confirmRef }) => {

    const dispatch = useDispatch();

    const logout =async () => {
        try {
            await dispatch(logoutUser())       
            return <Navigate to='/auth/login' />
        } catch (error) {
            toast.error("Failed to logout")
        }
    }

    return (
        <div>
            <dialog ref={confirmRef} id="my_modal_1" className="modal backdrop-blur-md">
                <div className="modal-box bg-red-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
                    <div className="flex ">
                        <IoIosWarning className="size-8 items-center text-red-600"/>
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to logout ?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={logout} className="btn btn-primary">Yes</button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-error text-white">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ConfirmModalLogout