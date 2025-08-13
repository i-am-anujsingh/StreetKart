import { useState, useEffect } from 'react'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import {login, logout} from "./store/authSlice.js"
import {getVendorDashboardData} from "./services/vendorService.js"


function App() {
 const [loading, setLoading] = useState(true)
 
 useEffect(() => {
    getVendorDashboardData()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
 
 
return !loading ? (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50">
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ): <div className="min-h-screen flex items-center justify-center text-2xl text-green-700">
        Loading...
      </div>
}

export default App
