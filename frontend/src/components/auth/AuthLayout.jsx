import authPic from '../../../src/assets/AuthImage.jpg';
import { Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className='flex'>
      <div className="h-screen  bg-black w-5/12">
        <img src={authPic} className='w-full h-screen' alt="" />
      </div>
      <div className='w-7/12 bg-AuthBackground py-7'>
        <div className='flex justify-center'>
          <label className="text-[50px] font-serif text-AuthText font-semibold" htmlFor="">SOUTH PRIDE PRODUCTS</label>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout