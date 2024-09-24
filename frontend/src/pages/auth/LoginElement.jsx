/* eslint-disable react/no-unescaped-entities */
import InputField from "../../components/atoms/InputField"
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginElement = () => {
    return (
        <div className="flex justify-center overflow-hidden ">
            <div className="grid  grid-cols-1 justify-center">
                <label className="text-4xl flex text-white mt-14 mobile:mt-5 justify-center font-serif font-semibold mobile:text-[20px]" htmlFor="">Login to your account</label>
                <form className="mt-10 mobile:mt-5 " >
                    <div className="grid grid-cols-1 gap-y-4">
                        <InputField className="grow" type="text" image={<FaUser className="text-gray-500" />} placeholder="Username" />
                        <InputField className="grow" type="email" image={<MdEmail className="text-gray-500" />} placeholder="Email" />
                        <InputField className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Password" />
                        <label className="text-white" htmlFor="signin">Don't have an account? <a className="underline ml-2 text-blue-950" href="register">Register</a></label>
                        <button className="btn btn-active text-lg font-semibold text-white btn-accent hover:bg-green-600">Login</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginElement