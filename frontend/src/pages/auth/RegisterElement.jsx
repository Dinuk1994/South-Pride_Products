import InputField from "../../components/atoms/InputField"
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { registerUser } from "../../api/apiService";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const RegisterElement = () => {

  const [registerData, setRegisterData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  async function submitData(e) {
    e.preventDefault()
    const success = await dispatch(registerUser(registerData))
    if(registerUser.fulfilled.match(success)){
      navigate("/auth/login")
    }

  }


  return (
    <div className="flex justify-center overflow-hidden ">
      <div className="grid  grid-cols-1 justify-center">
        <label className="text-4xl flex text-white mt-10 mobile:mt-5 justify-center font-serif font-semibold mobile:text-[20px]" htmlFor="">Create new account</label>
        <form onSubmit={submitData} className="mt-10 mobile:mt-5 " >
          <div className="grid grid-cols-1 gap-y-4">
            <InputField name="userName" value={registerData.userName} onChange={handleChange} className="grow" type="text" image={<FaUser className="text-gray-500" />} placeholder="Username" />
            <InputField name="email" value={registerData.email} onChange={handleChange} className="grow" type="email" image={<MdEmail className="text-gray-500" />} placeholder="Email" />
            <InputField name="password" value={registerData.password} onChange={handleChange} className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Password" />
            <InputField className="grow" type="password" image={<FaKey className="text-gray-500" />} placeholder="Confirm password" />
            <label className="text-white" htmlFor="signin">Already have an account? <a className="hover:underline ml-2 text-blue-950" href="login">Login</a></label>
            <button className="btn btn-active text-lg font-semibold text-white btn-accent hover:bg-green-600">Register</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default RegisterElement