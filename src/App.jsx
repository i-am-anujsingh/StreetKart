import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {

 const [loading, setLoading] = useState(true)
return loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : <h1 className="bg-blue-800 text-white text-5xl">hello world
  </h1>

}

export default App
