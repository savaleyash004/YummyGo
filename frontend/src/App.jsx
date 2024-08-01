import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPop/LoginPopup'
import Verify from './pages/Verrify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
