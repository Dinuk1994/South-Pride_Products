import { Navigate, Route, Routes } from "react-router-dom";
import LoginElement from "./pages/auth/LoginElement";
import RegisterElement from "./pages/auth/RegisterElement";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/admin/AdminLayout";
import Features from "./pages/admin/Features";
import Products from "./pages/admin/Products";
import AuthLayout from "./components/auth/AuthLayout";
import ShoppingLayout from "./components/shopping/ShoppingLayout";
import NotFound from "./pages/not-available/NotFound";
import Account from "./pages/shopping/Account";
import CheckOut from "./pages/shopping/CheckOut";
import Home from "./pages/shopping/Home";
import Listing from "./pages/shopping/Listing";
import CheckAuth from "./components/common/CheckAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import LoadingComponent from "./components/sample/LoadingComponent";
import { checkAuth } from "./api/authApi/checkAuth";
import AllProducts from "./pages/shopping/sub-pages/AllProducts";
import Nuts from "./pages/shopping/sub-pages/Nuts";
import Spices from "./pages/shopping/sub-pages/Spices";
import OtherProducts from "./pages/shopping/sub-pages/OtherProducts";
import Baking from "./pages/shopping/sub-pages/Baking";
import Herbs from "./pages/shopping/sub-pages/Herbs";
import AdminOrders from "./pages/admin/AdminOrders";
import ShoppingOrders from "./pages/shopping/ShoppingOrders";
import PaymentReturnPage from "./pages/shopping/PaymentReturnPage";
import PaymentSuccess from "./pages/shopping/PaymentSuccess";
import Feeback from "./pages/shopping/local-pages/Feeback";

export default function App() {

  const { user, isAuthenticate, isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())

  }, [dispatch])

  if (isLoading) return <><LoadingComponent /></>

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={
          <CheckAuth isAuthenticate={isAuthenticate} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<LoginElement />} />
          <Route path="register" element={<RegisterElement />} />
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticate={isAuthenticate} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="features" element={<Features />} />
          <Route path="adminOrders" element={<AdminOrders />} />
          <Route path="Products" element={<Products />} />
        </Route>

        <Route path="/shopping" element={
          <CheckAuth isAuthenticate={isAuthenticate} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        } >
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="shoppingOrders" element={<ShoppingOrders />} />
          <Route path="paypal-return" element={<PaymentReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="feedback" element={<Feeback />} />
          <Route path="home" element={<Home />}>
            <Route path="all-products" element={<AllProducts />} />
            <Route path="nuts" element={<Nuts />} />
            <Route path="spices" element={<Spices />} />
            <Route path="baking" element={<Baking />} />
            <Route path="herbs" element={<Herbs />} />
            <Route path="other" element={<OtherProducts />} />      
          </Route>
          <Route path="listing" element={<Listing />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  )
}