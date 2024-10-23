import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { capturePayment } from "../../api/orderAPI/capturePayment";


const PaymentReturnPage = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {

    if (paymentId && payerId) {
      const getCurrentOrderId = JSON.parse(sessionStorage.getItem('currentOrderId'));

      const paymentData = {
        paymentId: paymentId,
        orderId: getCurrentOrderId,
        payerId: payerId
      }
      dispatch(capturePayment(paymentData)).then((data) => {
        if (data.payload) {
          setTimeout(() => {
            sessionStorage.removeItem('currentOrderId')
            window.location.href = "/shopping/payment-success"
          },1000)
        }
      })
    }

  }, [payerId, paymentId, dispatch])



  return (
    <div className="bg-slate-400 h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="grid gap-y-3 text-white">
          <label className="text-4xl font-semibold" htmlFor="">Payment Processing.... Please wait!</label>
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentReturnPage