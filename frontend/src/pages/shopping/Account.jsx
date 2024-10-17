import { useEffect, useState } from "react";
import backgroundImage from "../../assets/Shipping-Detail-Image.png";

const Account = () => {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Sri Lanka");


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



  return (
    <div className="h-full relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(2px)' }}></div>

      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="h-[670px] shadow-lg  w-[850px]  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <div className="text-white text-center p-4">
            <label className="text-4xl font-semibold" htmlFor="">Shipping Details</label>
          </div>
          <form className="grid gap-y-4 mt-2 px-24 mobile:px-6" action="">
            <div>
              <label className="text-white text-lg" htmlFor="">Full Name </label>
              <input type="text" placeholder="Fullname" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
            </div>
            <div>
              <label className="text-white text-lg" htmlFor="">Postal Address </label>
              <input type="text" placeholder="Address" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <label className="text-white text-lg" htmlFor="">Country</label>
                <select
                  className="select mt-2 text-gray-600 select-bordered bg-gray-300  w-full max-w-xs"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option disabled>Sri Lanka</option>
                  {countries.map((country, index) => (
                    <option  key={index} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">Email Address</label>
                <input type="text" placeholder="Email" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
              <div className="col-span-1 ">
                <label className="text-white text-lg" htmlFor="">Contact number</label>
                <input type="number" placeholder="Mobile" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3">
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">City</label>
                <input type="text" placeholder="City" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>
              <div className="col-span-1">
                <label className="text-white text-lg" htmlFor="">Postal Code</label>
                <input type="number" placeholder="code" className="input mt-2 grow input-bordered bg-gray-300 w-full " />
              </div>

            </div>
            <div className="btn mt-2 text-white text-lg btn-ghost bg-blue-500 hover:bg-blue-600">
              Submit Detail
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
