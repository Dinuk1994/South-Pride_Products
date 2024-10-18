import { useEffect, useState } from "react";


/* eslint-disable react/prop-types */
const ShippingDetailEditModal = ({ shippingDetailEditRef, shippingDetails }) => {
    const [countries, setCountries] = useState([]);

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        country: "",
        phone: "",
        city: "",
        postalCode: ""
    })

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const sortedCountries = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                setCountries(sortedCountries);
            })
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    useEffect(() => {
        if (shippingDetails) {
            setFormData({
                fullName: shippingDetails.fullName || "",
                address: shippingDetails.address || "",
                country: shippingDetails.country || "",
                phone: shippingDetails.phone || "",
                city: shippingDetails.city || "",
                postalCode: shippingDetails.postalCode || ""
            });
        }
    }, [shippingDetails]);

    const handleUpdateShippingData = (e) => {
        e.preventDefault()
        console.log(formData?.fullName);

    }

    return (
        <div>
            <dialog ref={shippingDetailEditRef} id="shipping_detail_edit_modal" className="modal backdrop-blur-md">
                <div className="modal-box  max-w-5xl w-[900px] mobile:w-auto bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100 bg-opacity-20">
                    <div className="">
                        <h3 className="font-semibold text-white text-2xl">Edit Shipping Details</h3>
                        <div className="grid gap-y-4 mt-5">
                            <div>
                                <label className=" text-lg mobile:text-sm text-white" htmlFor="">Edit your name</label>
                                <input value={formData?.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} type="text" className="input mobile:text-sm mt-2 grow input-bordered bg-white w-full " />
                            </div>
                            <div>
                                <label className=" text-lg mobile:text-sm  text-white" htmlFor="">Edit postal address </label>
                                <input value={formData?.address} type="text" className="input mobile:text-sm mt-2 grow input-bordered bg-white w-full " />
                            </div>

                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="col-span-1 grid">
                                    <label className=" text-lg mobile:text-sm  text-white" htmlFor="">Edit country </label>
                                    <select
                                        value={formData?.country}
                                        className="select mobile:text-sm mt-2  select-bordered bg-white  w-full "
                                    >
                                        <option disabled>Select Coutry</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.name.common}>
                                                {country.name.common}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className=" text-lg mobile:text-sm  text-white" htmlFor="">Edit contact number</label>
                                    <input value={formData?.phone} type="number" className="input mobile:text-sm mt-2 grow input-bordered bg-white w-full " />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="col-span-1">
                                    <label className=" text-lg mobile:text-sm  text-white" htmlFor="">Edit city</label>
                                    <input value={formData?.city} type="text" className="input mobile:text-sm mt-2 grow input-bordered bg-white w-full " />
                                </div>
                                <div className="col-span-1">
                                    <label className=" text-lg mobile:text-sm text-white" htmlFor="">Edit postal code</label>
                                    <input value={formData?.postalCode} type="number" className="input mobile:text-sm mt-2 grow input-bordered bg-white w-full " />
                                </div>


                            </div>
                        </div>
                        <div className="modal-action">
                            <form>
                                <div className="flex gap-x-4 mobile:mr-4">
                                    <button className="btn bg-red-400 hover:bg-red-600 text-white w-[150px]">Discard</button>
                                    <button onClick={handleUpdateShippingData} className="btn bg-blue-400 hover:bg-blue-600 text-white w-[150px]">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ShippingDetailEditModal