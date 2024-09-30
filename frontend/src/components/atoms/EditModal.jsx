/* eslint-disable react/prop-types */

const EditModal = ({modalRef , closeModal , product}) => {
    return (
        <div>      
            <dialog ref={modalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h1 className="flex justify-center text-3xl ">EDIT SECTION</h1>
                    <h3 className="font-bold text-lg">{product?.productName}</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button  className="btn btn-primary">Apply</button>
                        </form>
                        <form method="dialog">
                            <button onClick={closeModal} className="btn btn-error text-white">Discard</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default EditModal