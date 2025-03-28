import { Routes, Route} from 'react-router-dom'
import React, { useContext } from 'react'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const { showLogin, theme} = useContext(AppContext)

  return (
    <div className={`px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b ${theme==='light'? "from-teal-100 to-orange-100" : "from-teal-900 to-orange-900" }`}>
      <Navbar />
      {showLogin && (<Login />)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App