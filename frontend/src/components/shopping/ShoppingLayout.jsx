import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCartItems } from "../../api/cartAPI/getCartItems"


const ShoppingLayout = () => {

  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();


  useEffect(() => {
    if (user.id === undefined) {
      window.location.href = "/shopping/home";
    }
  }, [user.id]); 

  useEffect(() => {
   
    console.log("User ID:", user?.id);
    
    if (user && user?.id) {
      dispatch(getCartItems({ id: user.id }));
    }
  }, [user, user?.id, dispatch]);
  
  


  console.log(cartItems);

  return (
    <div className="flex flex-col overflow-hidden">
      <div >
        <Header />
      </div>
      <main className="h-screen">
        <Outlet />
      </main>
      <hr className="border-t-2 border-gray-300" />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ShoppingLayout