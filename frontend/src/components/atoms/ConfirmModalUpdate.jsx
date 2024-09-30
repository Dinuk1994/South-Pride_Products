/* eslint-disable react/prop-types */


const ConfirmModalUpdate = ({ confirmRef, onConfirm, loading }) => {
    return (
        <div>
            <dialog ref={confirmRef} id="confirm_modal_1" className="modal">
                <div className="modal-box bg-base-200">
                    <div className="flex ">
                        <h3 className="font-semibold text-lg text-gray-800 ml-5 flex items-center">Do you want to update this product?</h3>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={onConfirm} className={`btn bg-blue-400 text-white hover:text-black ${loading ? 'loading' : ''}`}>Yes</button>
                        </form>
                        <form method="dialog">
                            <button className="btn bg-red-400 text-white hover:text-black">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};


export default ConfirmModalUpdate