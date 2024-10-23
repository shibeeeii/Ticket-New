import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Theaters from "./pages/Theaters"


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/theaters" element={<Theaters/>}/>
      <Route path="/category" element={<Category/>}/>
      
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
