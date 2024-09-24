import authPic from '../../../src/assets/AuthImage.jpg';
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='flex h-screen mobile:grid'>
      <div className="bg-black w-5/12 mobile:hidden">
        <img src={authPic} className='w-full h-screen' alt="" />
      </div>
      
      <div 
        className="w-full bg-black hidden mobile:block mobile:w-full mobile:bg-[url('/src/assets/AuthImage.jpg')] mobile:bg-cover mobile:bg-center">
      </div>

      <div className='w-7/12 mobile:w-full bg-AuthBackground pt-20 mobile:pt-11'>
        <div className='flex justify-center'>
          <label 
            className="text-[50px] text-nowrap font-serif mobile:text-[25px] text-AuthText font-semibold" 
            htmlFor="">
            SOUTH PRIDE PRODUCTS
          </label>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
