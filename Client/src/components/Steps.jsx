import React, { useCallback, useContext } from 'react'
import {  stepsData } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

function Steps() {
   const {theme} = useContext(AppContext)
  return (
   <motion.div initial={{opacity:0., y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
   className='flex flex-col items-center justify-center my-32'>
     <motion.h1 
     className={`text-3xl sm:text-4xl font-semibold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>How it works</motion.h1>
     <p className={`mg-8 text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Transform Words into stunning Images</p>

     <div className='space-y-4 w-full max-w-3xl text-sm '>
        {stepsData.map((item, index) => (
           <div key={index} className={`flex items-center gap-4 p-5 px-8 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg ${theme === 'light' ? 'bg-white/20 text-black' : 'bg-gray-700/30 text-white border-gray-300'}`}>
              <img width={40} src={item.icon} alt="" />
              <div>
                 <h2 className='text-xl font-medium'>{item.title}</h2>
                 <p className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{item.description}</p>
              </div>
           </div>
        ))}
     </div>
   </motion.div>

  )
}

export default Steps