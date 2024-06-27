import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home'
import Cart from './Components/pages/Cart'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
