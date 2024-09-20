import { Route, Routes } from "react-router-dom";
import AuthElement from "./components/auth/AuthElement";
import LoginElement from "./pages/auth/LoginElement";
import RegisterElement from "./pages/auth/RegisterElement";


export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthElement/>}>
        <Route path="login" element={<LoginElement/>}/>
        <Route path="register" element={<RegisterElement/>}/>
      </Route>
    </Routes>
  )
}