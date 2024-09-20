import authPic from '../../../src/assets/AuthImage.jpg';
import {Outlet} from "react-router-dom"

const AuthElement = () => {
  return (
    <div className='flex'>
        <div className="h-screen  bg-black w-5/12">
           <img src={authPic} className='w-full h-screen' alt="" />
        </div>
        <div className='w-7/12'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthElement