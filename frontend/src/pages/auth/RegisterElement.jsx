/* eslint-disable react/no-unescaped-entities */

import InputField from "../../components/atoms/InputField"
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const RegisterElement = () => {

  return (
    <div className="flex justify-center overflow-hidden ">
      <div className="grid  grid-cols-1 justify-center">
        <label className="text-4xl flex text-white mt-10 mobile:mt-5 justify-center font-serif font-semibold mobile:text-[20px]" htmlFor="">Create new account</label>
        <form className="mt-10 mobile:mt-5 " >
          <div className="grid grid-cols-1 gap-y-4">
            <InputField className="grow" type="text" image={<FaUser className="text-gray-500" />} placeholder="Fullname" />
            <InputField className="grow" type="text" image={<FaUser className="text-gray-500" />} placeholder="Username" />
            <InputField className="grow" type="email" image={<MdEmail className="text-gray-500" />} placeholder="Email" />
            <InputField className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Password" />
            <InputField className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Confirm password" />
            <label className="text-white" htmlFor="signin">Already have an account? <a className="underline ml-2 text-blue-950" href="login">Login</a></label>
            <button className="btn btn-active text-lg font-semibold text-white btn-accent hover:bg-green-600">Register</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default RegisterElement