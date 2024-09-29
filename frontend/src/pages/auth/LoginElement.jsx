/* eslint-disable react/no-unescaped-entities */
import InputField from "../../components/atoms/InputField"
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authApi/loginUser";


const LoginElement = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function submitData(e) {
        e.preventDefault();
        dispatch(loginUser(loginData))
    }

    return (
        <div className="flex justify-center overflow-hidden ">
            <div className="grid  grid-cols-1 justify-center">
                <label className="text-4xl flex text-white mt-14 mobile:mt-5 justify-center font-serif font-semibold mobile:text-[20px]" htmlFor="">Login to your account</label>
                <form onSubmit={submitData} className="mt-16 mobile:mt-5 " >
                    <div className="grid grid-cols-1 gap-y-4">

                        <InputField name="email" value={loginData.email} onChange={handleChange} className="grow" type="email" image={<MdEmail className="text-gray-500" />} placeholder="Email" />
                        <InputField name="password" value={loginData.password} onChange={handleChange} className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Password" />
                        <label className="text-white" htmlFor="signin">Don't have an account? <a className="hover:underline ml-2 text-yellow-500" href="register">Register</a></label>
                        <button className="btn btn-active text-lg font-semibold text-white btn-accent hover:bg-green-600">Login</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginElement