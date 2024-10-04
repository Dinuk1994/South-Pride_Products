/* eslint-disable react/prop-types */

import { DetailCarousel } from "./DetailCarousel"


const DetailModal = ({ detailModal, product }) => {
    return (
        <div>
            <dialog ref={detailModal} id="detail_box" className="modal">
                <div className="modal-box w-full h-full bg-gray-300 max-w-3xl max-h-[380px]">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="grid grid-cols-1">
                        <div className="grid grid-cols-6 mt-2 gap-x-2">
                            <div className="col-span-3 mt-6">
                                <DetailCarousel product={product} />
                            </div>
                            <div className="col-span-3 ml-8 mt-4">
                                <div className="grid gap-y-2">
                                    <h3 className="font-bold text-2xl">{product.productName}</h3>
                                    <p className="text-gray-500  text-pretty max-h-[220px] overflow-y-auto">{product.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </dialog>
        </div>
    )
}

export default DetailModal