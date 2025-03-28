import React, { useState } from 'react'
import {assets} from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
   const [user, setUser] = useState(true)

   const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
         <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>
      <div>
         {user ? <div>
            <button>
               <img src={assets.credit_star} className='w-5' alt="" />
               <p>Credit Left: 50</p>
            </button>
            <p>Hi, GreatStack</p>
         </div> : 
         <div className='flex items-center gap-2 sm:gap-5 '>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button className='bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full'>Login</button>
         </div>}
      </div>
    </div>
  )
}

export default Navbar