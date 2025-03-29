import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {
   const [state, setState] = useState('Login')
   const {showLogin, setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onSubmitHandler = async (e) => {
      e.preventDefault()
      try {
         if(state==='Login'){
            const {data} = await axios.post(`${backendUrl}/api/user/login`, {email, passsword})

            if(data.success) {
               setToken(data.token)
               setUser(data.user)
               localStorage.setItem("token", data.token)
               setShowLogin(false)
            }else{
               toast.error(data.message)
            }
         }else{
            const {data} = await axios.post(`${backendUrl}/api/user/register`, {name, email, password})
            console.log(data)
            if(data.success) {
               setToken(data.token)
               setUser(data.user)
               localStorage.setItem("token", data.token)
               setShowLogin(false)
            }else{
               toast.error(data.message)
            }
         }
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   }

   useEffect(() => {
      document.body.style.overflow = 'hidden'

      return () => {
         document.body.style.overflow = 'unset'
      }
   }, []) 

  return (
    <div className=' fixed left-0 top-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form initial={{opacity:0.2, y:50}} transition={{duration:0.3}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
      className='relative bg-white p-10 text-slate-500 rounded-xl' onSubmit={onSubmitHandler}>
         <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
         <p className='text-sm'>Welcome back! Please Sign in to continue</p>

         {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} width={25} alt="" />
            <input className='outline-none text-sm' value={name} onChange={(e)=>setName(e.target.value)}
             type="text" placeholder='FullName' required />
         </div>}
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.email_icon} alt="" />
            <input className='outline-none text-sm' value={email} onChange={(e)=>setEmail(e.target.value)}
             type="email" placeholder='Email Id' required />
         </div>
         <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.lock_icon} alt="" />
            <input className='outline-none text-sm' value={password} onChange={(e)=>setPassword(e.target.value)}
             type="password" placeholder='Password' required />
         </div>

         <p className='text-sm text-blue-600 my-4  cursor-pointer'>Forgot Password</p>
         <button className='bg-blue-600 w-full text-white py-2 rounded-full '>{state === 'Login' ? "Login" : "Create Account"}</button>

         {state === 'Login' ? (
            <p className='mt-5 text-center'>Don't have an account? 
            <span className= 'cursor-pointer text-blue-600' onClick={() => setState("Signup")}>Sign Up</span></p>
         ) : (
            <p className='mt-5 text-center'>Already have an account? 
            <span className= 'cursor-pointer text-blue-600'  onClick={() => setState("Login")}>Login</span></p>
         ) }

         <img onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
      </motion.form>
    </div>
  )
}

export default Login