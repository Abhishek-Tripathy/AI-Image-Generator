import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

function BuyCredit() {
  const {user, theme} = useContext(AppContext)


  return (
    <motion.div
  initial={{ opacity: 0.2, y: 100 }}
  transition={{ duration: 1 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="min-h-[80vh] text-center pt-14 mb-10"
>
  <button
    className={`border px-10 py-2 rounded-full mb-6 ${
      theme === "dark" ? "border-gray-600 text-gray-300" : "border-gray-400 text-black"
    }`}
  >
    Our Plans
  </button>

  <h1
    className={`text-center text-3xl font-semibold mb-6 sm:mb-10 ${
      theme === "dark" ? "text-gray-100" : "text-black"
    }`}
  >
    Choose The Plan
  </h1>

  <div className="flex flex-wrap justify-center text-left gap-6">
    {plans.map((item, index) => (
      <div
        key={index}
        className={`drop-shadow-sm border rounded-lg py-12 px-8 transition-all duration-500 hover:scale-105 ${
          theme === "dark" ? "bg-gray-900 text-gray-300 border-gray-700" : "bg-white text-gray-600 border-gray-300"
        }`}
      >
        <img width={40} src={assets.logo_icon} alt="" />
        <p className="mt-3 mbb-1 font-semibold">{item.id}</p>
        <p className="text-sm">{item.desc}</p>
        <p className="mt-6">
          <span className="text-3xl font-medium">${item.price}</span> / {item.credits} credits
        </p>
        <button
          className={`w-full text-white mt-8 text-sm rounded-md py-2.5 min-w-52 ${
            theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-black"
          }`}
        >
          {user ? "Purchase" : "Get Started"}
        </button>
      </div>
    ))}
  </div>
</motion.div>

  )
}

export default BuyCredit