
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/Shipping-Detail-Image.png";
import { useDispatch, useSelector } from "react-redux";
import { getShippingDetailById } from "../../api/shippingAPI/getShippingDetails";
import { addShippingDetails } from "../../api/shippingAPI/addShippingDetails";
import ShippingDetailEditModal from "../../components/atoms/Shipping/ShippingDetailEditModal";


const Account = () => {

  const [countries, setCountries] = useState([]);

  const [shippingDetail, setShippingDetail] = useState({
    fullName : "",
    address: '',
    country: '',
    phone: '',
    city: '',
    postalCode: '',
  })

  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const shippingDetailEditRef = useRef();


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
    dispatch(getShippingDetailById(user.id)).then((action) => {
      console.log("Account page", action.payload);
      setShippingDetail(action.payload)
    })

  }, [dispatch, user])

  const handleShippingData = (e) => {
    e.preventDefault()
    const shippingData = {
      ...shippingDetail,
      userId: user.id
    };
    console.log(shippingData);
    dispatch(addShippingDetails(shippingData))
  }

const openShippingDetailModal = ()=>{
  if(shippingDetailEditRef.current){
    shippingDetailEditRef.current.showModal()
  }
}


  return (
    <div className="h-full relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(2px)' }}></div>

      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="h-[670px] shadow-lg  w-[850px]  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <div className="text-white text-center py-4">
            <div className="grid grid-cols-10 mobile:grid-cols-2 px-24 mobile:px-6">
              <div className="col-span-7 mobile:col-span-1 flex justify-start">
                <label className="text-4xl font-semibold mobile:text-3xl text-nowrap" htmlFor="">Shipping Details</label>
              </div>
              <div className="col-span-3 mobile:col-span-1 flex justify-end">
                <div onClick={openShippingDetailModal} className="btn btn-ghost bg-red-400 mobile:text-sm hover:bg-red-600 text-white text-lg ">
                  Edit Details
                </div>
              </div>
            </div>

          </div>
          <form onSubmit={handleShippingData} className="grid gap-y-4 mt-2 px-24 mobile:px-6" action="">
            <div>
              <label className="text-white text-lg" htmlFor="">Full Name </label>
              <input   type="text" onChange={(e) => setShippingDetail({ ...shippingDetail, fullName: e.target.value })} placeholder={shippingDetail?.fullName || "Fullname"} className="input mt-2 grow input-bordered  w-full " />
            </div>
            <div>
              <label className="text-white text-lg" htmlFor="">Postal Address </label>
              <input  type="text" onChange={(e) => setShippingDetail({ ...shippingDetail, address: e.target.value })} placeholder={shippingDetail.address || "Address"} className="input mt-2 grow input-bordered bg-gray-300 w-full " />
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <label className="text-white text-lg" htmlFor="">Country</label>
                <select
                  className="select mt-2 text-gray-600 select-bordered bg-gray-300  w-full max-w-xs"
                  value={shippingDetail?.country}
                  onChange={(e) => setShippingDetail({ ...shippingDetail, country: e.target.value })}
                
                >
                  <option >Select Coutry</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">Email Address</label>
                <input value={user?.email || "Email"} disabled type="text" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
              <div className="col-span-1 ">
                <label className="text-white text-lg" htmlFor="">Contact number</label>
                <input onChange={(e) => setShippingDetail({ ...shippingDetail, phone: e.target.value })} type="number" placeholder={shippingDetail?.phone || "Mobile Number"} className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">City</label>
                <input onChange={(e) => setShippingDetail({ ...shippingDetail, city: e.target.value })} type="text" placeholder={shippingDetail?.city || "City"} className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">Postal Code</label>
                <input onChange={(e) => setShippingDetail({ ...shippingDetail, postalCode: e.target.value })} type="number" placeholder={shippingDetail.postalCode || "Postal Code"} className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>

            </div>

            <button type="submit" className="btn mobile:text-sm mt-2 col-span-1 text-white text-lg btn-ghost bg-blue-500 hover:bg-blue-600">
             Submit Detail
            </button>

          </form>
        </div>
      </div>
        <ShippingDetailEditModal shippingDetailEditRef={shippingDetailEditRef} shippingDetails={shippingDetail} user={user}/>
    </div>
  );
}

export default Account;
