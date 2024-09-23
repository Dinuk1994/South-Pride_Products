import { Route, Routes } from "react-router-dom";
import LoginElement from "./pages/auth/LoginElement";
import RegisterElement from "./pages/auth/RegisterElement";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/admin/AdminLayout";
import Features from "./pages/admin/Features";
import Orders from "./pages/admin/Orders";
import Products from "./pages/admin/Products";
import AuthLayout from "./components/auth/AuthLayout";
import ShoppingLayout from "./components/shopping/ShoppingLayout";
import NotFound from "./pages/not-available/NotFound";
import Account from "./pages/shopping/Account";
import CheckOut from "./pages/shopping/CheckOut";
import Home from "./pages/shopping/Home";
import Listing from "./pages/shopping/Listing";


export default function App() {
  return (
    <div>
      {/* <h1>Header Component</h1> */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginElement />} />
          <Route path="register" element={<RegisterElement />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="features" element={<Features />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Products" element={<Products />} />
        </Route>

        <Route path="/shopping" element={<ShoppingLayout />} >
          <Route path="account" element={<Account/>}/>
          <Route path="checkout" element={<CheckOut/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="listing" element={<Listing/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

    </div>
  )
}