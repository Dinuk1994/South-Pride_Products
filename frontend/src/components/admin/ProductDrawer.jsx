import { ImageUploader } from "../atoms/ImageUploader"

const ProductDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-[250px]">
                    <label htmlFor="my-drawer-4" className="drawer-button btn bg-green-600 hover:bg-green-800 text-white font-bold">Add Product</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-orange-100 text-base-content min-h-full w-[500px] mobile:w-[320px] mobile:mr-28 p-4">
                        <div className="flex justify-start">
                            <div className="grid grid-cols-1 gap-y-2 mobile:gap-y-1 p-2 w-full">
                                <label className="text-2xl font-semibold text-gray-700" htmlFor="">Add New Product</label>

                                <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Product Name</label>
                                <input type="text" placeholder="Enter product name" className="input mobile:text-sm input-bordered h-10 mobile:h-8 w-full mobile:w-full" />

                                <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Description</label>
                                <textarea type="" placeholder="Enter product name" className="input mobile:text-sm input-bordered h-20 mobile:h-16 w-full mobile:w-full" />

                                <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Category</label>
                                <select className="select h-10 mobile:h-8 w-full ">
                                    <option disabled selected>Category</option>
                                    <option>Spices</option>
                                    <option>Nuts</option>
                                    <option>Other</option>
                                </select>

                                <div className="grid grid-cols-2 gap-y-2 mobile:gap-y-1 mt-3">
                                    <div className="col-span-1 ">
                                        <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Sale Price</label>
                                        <input type="number" placeholder="Sale price" className="input mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full mobile:w-full" />
                                    </div>
                                    <div className="col-span-1 ">
                                        <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Stock Qty</label>
                                        <input type="number" placeholder="Stock Qty" className="input ml-1 mt-1 mobile:text-sm input-bordered h-10 mobile:h-8 w-full mobile:w-full" />
                                    </div>
                                </div>
                                <label className="mt-3 font-semibold text-lg mobile:text-sm" htmlFor="">Add Images</label>
                                <ImageUploader/>

                                <button className="btn btn-outline hover:!text-white mobile:text-sm mobile:mt-2 text-lg font-!semibold btn-accent">Add Product</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDrawer