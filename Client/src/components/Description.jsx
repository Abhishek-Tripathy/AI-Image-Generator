import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

function Description() {
     const {theme} = useContext(AppContext)
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
    className={`flex flex-col items-center justify-center my-24 p-6 md:px-28 ${theme === 'light' ? 'text-black' : 'text-white'}`}> 
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} mb-8`}>Turn your imagination into visual</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
         <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg ' />
         <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-4`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, et quod magnam nam distinctio nemo omnis neque reiciendis praesentium, excepturi soluta deleniti aperiam tempora eaque. Quaerat non in quo beatae.</p>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum porro explicabo unde at laudantium cupiditate nisi voluptates minima eaque, beatae tempore, est ad quis sit ducimus rerum officia provident?</p>
         </div>
      </div>
    </motion.div>
  )
}

export default Description