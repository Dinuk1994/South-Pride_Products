/* eslint-disable no-unused-vars */

import Image from "../../assets/Check-Out-image.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getShippingDetailById } from "../../api/shippingAPI/getShippingDetails"
import { getCartItems } from "../../api/cartAPI/getCartItems"
import CartItem from "../../components/atoms/Shopping/CartItem"
import { BsCartCheckFill } from "react-icons/bs";
import { createOrder } from "../../api/orderAPI/createOrder"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const CheckOut = () => {

  const user = useSelector((state) => state.auth.user)
  const shippingDetail = useSelector((state) => state.shipping.shippingDetail)
  const itemsInCart = useSelector((state) => state.cart.cartItems)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [paymentBegun, setPaymentBegun] = useState(false)

  useEffect(() => {
    dispatch(getShippingDetailById(user.id))
    dispatch(getCartItems(user.id))
  }, [dispatch, user.id])

  console.log("checkOut :", shippingDetail);



  const totalPrice = itemsInCart?.data?.reduce((acc, item) => {
    return acc + (parseFloat(item.salePrice) * item.quantity);
  }, 0).toFixed(2);


  const handleCheckOutbtn = async (e) => {
    e.preventDefault();

    if (!shippingDetail?.address || !shippingDetail?.fullName || !shippingDetail?.city || !shippingDetail?.country || !shippingDetail?.postalCode || !shippingDetail?.phone) {
      setLoading(false);
      toast.error("Please fill in all address details.");
      return;
    }

    if (itemsInCart?.length === 0) {
      setLoading(false);
      toast.error("Your cart is empty.");
      return;
    }

    setLoading(true);

    const checkOutData = {
      userId: user.id,
      cartItems: itemsInCart?.data.map(item => ({
        productId: item.productId,
        title: item.productName,
        image: item.images[0],
        salePrice: item.salePrice,
        quantity: item.quantity,
        weight : item.weight
      })),
      address: {
        name : shippingDetail?.fullName,
        address: shippingDetail?.address,
        city: shippingDetail?.city,
        country: shippingDetail?.country,
        postalCode: shippingDetail?.postalCode,
        phone: shippingDetail?.phone
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalPrice: Number(totalPrice),
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: ""
    };

    console.log("Checkout", checkOutData);
    console.log("Cart", itemsInCart);


    try {
      const data = await dispatch(createOrder(checkOutData)).unwrap();
      console.log("Order creation response:", data);

      if (data?.msg === "success") {
        const approvalURL = data?.approvalURL;
        // console.log("Approval URL:", approvalURL); 
        setPaymentBegun(true);
        setTimeout(() => {
          if (approvalURL) {
            window.location.href = approvalURL;
          } else {
            setPaymentBegun(false);
            toast.error("No approval URL returned. Payment initiation failed.");
          }
        }, 50);
      } else {
        setPaymentBegun(false);
        toast.error("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Order creation failed", error);
      toast.error("Failed to create order. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="h-full relative">

      <div className="absolute inset-0 bg-cover bg-center -z-20" style={{ backgroundImage: `url(${Image})`, filter: 'blur(5px)' }}>

      </div>
      <div className="grid grid-cols-8  mobile:grid-cols-1 ">
        <div className="col-span-3 p-2 mobile:p-5 ">
          <div className=" bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl border border-gray-100 bg-opacity-20">
            <div className="p-6">
              <a onClick={()=>navigate("/shopping/account")}className="btn btn-ghost mobile:text-xs shadow-md shadow-gray-500 bg-green-400 text-white hover:bg-green-600">
                Add / Edit Address
              </a>
              <div className="grid px-2 text-gray-200">
                <div className="grid mobile:text-xs grid-cols-8 mt-5 gap-y-6 ">
                  <div className="col-span-3">
                    <label htmlFor="">Full name </label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.fullName}</label>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="">Address</label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.address}</label>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="">Country</label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.country}</label>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="">City</label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.city}</label>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="">Phone</label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.phone}</label>
                  </div>

                  <div className="col-span-3">
                    <label htmlFor="">Postal Code</label>
                  </div>
                  <div className="col-span-5">
                    <label htmlFor="">{shippingDetail?.postalCode}</label>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className="w-full mt-5">
            <a onClick={()=>navigate("/shopping/shoppingOrders")} className="btn btn-ghost text-white text-lg w-full bg-blue-400 hover:bg-blue-600">
              View My Orders
            </a>
          </div>

        </div>
        <div className="col-span-5 h-[800px] p-2 mobile:p-1">
          <div className="bg-purple-500 overflow-y-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl border h-full border-gray-100 bg-opacity-20">
            <div className="grid mt-5 px-24 mobile:px-1">
              <div className="p-6 grid gap-y-6 ">
                {Array.isArray(itemsInCart?.data) && itemsInCart.data.length > 0 ? (
                  itemsInCart.data
                    .slice()
                    .reverse()
                    .map((item, index) => (
                      <div key={`${item.productId}-${index}`} className="flex gap-x-5 mobile:gap-x-2">
                        <div className="flex items-center">
                          <BsCartCheckFill className="flex text-green-400 size-8 mobile:size-6" />
                        </div>
                        <CartItem viewMode={true} item={item} />
                      </div>
                    ))
                ) : (
                  <p className="text-2xl font-semibold text-white">Add Products to your cart</p>
                )}
              </div>

              <div className="grid grid-cols-2 mt-5">
                <div className="col-span-1 flex justify-start">
                  <label className="text-white font-semibold text-2xl pl-20" htmlFor="">Total Amount</label>
                </div>
                <div className="col-span-1 flex justify-end pr-9">
                  <label className="text-white font-semibold text-2xl" htmlFor="">Rs. {totalPrice}</label>
                </div>
              </div>


              <div className="flex pb-6 mt-7 justify-center ml-12 mobile:ml-0">
                <div onClick={handleCheckOutbtn} className="btn w-1/2 btn-ghost text-lg mobile:text-sm text-white bg-blue-400 hover:bg-blue-600 flex items-center justify-center">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm mr-2"></span> 
                  ) : (
                    <span>Proceed to payment</span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut