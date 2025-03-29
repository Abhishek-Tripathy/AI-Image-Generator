import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { FiSun, FiMoon} from 'react-icons/fi';

function Navbar() {
   
   const {setShowLogin, showLogin, toggleTheme, theme, logout, credit, user} = useContext(AppContext)

   const navigate = useNavigate()

  return (
   <div className='flex items-center justify-between py-4'>
   <Link to={'/'}>
      <img src={theme==='dark' ? assets.logo_wizardo_white : assets.logo_wizardo_black} alt="" className='w-28 sm:w-32 lg:w-40' />
   </Link>
   <div>
      {user ? (
         <div className='flex text-center gap-2 sm:gap-3'>
            <button onClick={() => navigate("/buy")}
               className={`flex text-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 
               ${theme === "dark" ? "bg-gray-800 text-white" : "bg-blue-100 text-gray-600"}`}>
               <img src={assets.credit_star} className='w-5' alt="" />
               <p className='text-xs sm:text-sm font-medium'>Credit Left: {credit}</p>
            </button>
            <p className={`max-sm:hidden pl-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>Hii {user.name}</p>
            <div className='relative group'>
               <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
               <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                  <ul className={`list-none m-0 p-1 rounded-xl border text-sm 
                  ${theme === "dark" ? "bg-red-700 text-white" : "bg-red-400 text-white"}`}>
                     <li onClick={logout} className='py-1 px-2 text-xl cursor-pointer pr-10'>Logout</li>
                  </ul>
               </div>
            </div>
            <button onClick={toggleTheme} className='pl-2 gap-2 sm:gap-3'>
            {theme === 'light' ? <FiMoon size={30} color="black" /> : <FiSun size={30} color="white" />}
            </button>
         </div>
      ) : (
         <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className={`cursor-pointer ${theme === "dark" ? " text-white" : " text-black"}`}>Pricing</p>
            <button onClick={() => setShowLogin(true)}
               className={`py-2 px-7 sm:px-10 text-sm rounded-full 
               ${theme === "dark" ? "bg-gray-300 text-black" : "bg-zinc-800 text-white"}`}>
               Login
            </button>
            <button onClick={toggleTheme} className='pl-2 gap-2 sm:gap-3'>
            {theme === 'light' ? <FiMoon size={30} color="black" /> : <FiSun size={30} color="white" />}
            </button>
         </div>
      )}
   </div>
</div>
  )
}

export default Navbar