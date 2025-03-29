import React, { useContext } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

function Testimonials() {
   const {theme} = useContext(AppContext)
  return (
   <motion.div 
   initial={{ opacity: 0.2, y: 100 }} 
   transition={{ duration: 1 }} 
   whileInView={{ opacity: 1, y: 0 }} 
   viewport={{ once: true }}
   className={`flex flex-col items-center justify-center my-20 py-12 ${
     theme === "dark" ? " text-white" : " text-gray-900"
   }`}
 >
   <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
   <p className={`mb-12 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>What Our Users Are Saying</p>
 
   <div className="flex flex-wrap gap-6">
     {testimonialsData.map((item, index) => (
       <div 
         key={index} 
         className={`p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all ${
           theme === "dark" ? "bg-gray-800/60 border-gray-700" : "bg-white/20"
         }`}
       >
         <div className="flex flex-col items-center">
           <img src={item.image} className="rounded-full w-14" alt="" />
           <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
           <p className={`m-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{item.role}</p>
           <div className="flex mb-4">
             {Array(item.stars).fill().map((_, index2) => (
               <img src={assets.rating_star} key={index2} alt="" />
             ))}
           </div>
           <p className={`text-center text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
             {item.text}
           </p>
         </div>
       </div>
     ))}
   </div>
 </motion.div>
 
  )
}

export default Testimonials