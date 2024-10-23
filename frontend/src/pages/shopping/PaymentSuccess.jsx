import PaymentSuccessImage from "../../assets/Payment-Success-Image.png"
import SuccessImage from "../../assets/Success.png"

const PaymentSuccess = () => {


  return (
    <div className="h-screen relative flex justify-center">
      <div className="absolute bg-cover bg-center inset-0" style={{ backgroundImage: `url(${PaymentSuccessImage})`, filter: `blur(2px)` }}>
      </div>
      <div className="h-screen flex items-center">
        <div className="h-[550px] w-[850px] mobile:h-[400px] mobile:w-auto bg-green-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100">
          <div className="grid">
            <label className="pt-7 text-white mobile:text-2xl  text-4xl font-semibold flex justify-center " htmlFor="">Payment Successfull !</label>
            <div className="flex justify-center mt-6">
              <img className="z-50 text-center size-48 mobile:size-32" src={SuccessImage} alt="" />
            </div>
            <div className=" mobile:flex  flex justify-center  mobile:px-6 mt-10">
              <label className="text-white font-semibold text-2xl mobile:text-lg  mobile:text-center" htmlFor="">Your payment for the South-Pride is successfully completed</label>
            </div>
            <div className="flex justify-center mt-14">
              <a href="/shopping/shoppingOrders" className="btn btn-ghost bg-blue-400 text-white hover:bg-blue-600">
                  View My Orders
              </a>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default PaymentSuccess