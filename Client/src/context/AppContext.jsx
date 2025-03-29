import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [showLogin, setShowLogin] = useState(false)
   const [token, setToken] = useState(localStorage.getItem('token'))
   const [credit, setCredit] = useState(false)
   const [theme, setTheme] = useState('light')
   const backendUrl = import.meta.env.VITE_BACKEND_URL
   const navigate = useNavigate()

   const loadCreditsData = async () => {
      try {
         const {data} = await axios.get(backendUrl + "/api/user/credits", {headers: {token}})

         if(data.success) {
            setCredit(data.credits)
            setUser(data.user)
         }
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   }

   const logout = () => {
      localStorage.removeItem("token")
      setToken("")
      setUser(null)
   }

   const generateImage = async (prompt) => {
      try {
         const {data} = await axios.post(backendUrl + "/api/image/generateImage", {prompt},{headers: {token}})
         console.log(data)

         if(data.success) {
            loadCreditsData()
            return data.resultImage
         }else{
            toast.error(data.message)
            loadCreditsData()
            if(data.creditBalance === 0 ) {
               navigate("/buy")
            }
         }
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
   }  

   const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };

   useEffect(() => {
      if(token) {
         loadCreditsData()
      }
   }, [token])

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
   }, [])

   return <AppContext.Provider value={{user, setUser, showLogin, setShowLogin, backendUrl, token, setToken,
      credit, setCredit, loadCreditsData, logout, generateImage, toggleTheme, theme
   }}>
      {children}
   </AppContext.Provider>
}

export default AppContextProvider