import { Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import AddProducts from "./pages/AddProducts"
import Products from "./pages/Products"
import PrivateComponent from "./components/private/PrivateComponent"
import Policy from "./pages/Policy"
import UpdateProduct from "./pages/UpdateProduct"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="" element={<PrivateComponent />}>
            <Route path="add-product" element={<AddProducts />} />
            <Route path="products" element={<Products />} />
            <Route path="update-product/:id" element={<UpdateProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
