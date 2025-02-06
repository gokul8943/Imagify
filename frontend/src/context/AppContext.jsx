import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) =>{
  const [user,setUser] = useState(null);
  const [token,setToken] = useState(localStorage.getItem('token'))
  const [credit,setCredit] = useState(false)
  const [showLogin ,setShowLogin] = useState(false)

 const backendUrl = import.meta.env.VITE_BACKEND_URL


  const value = {
    user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit
  }



  return (
    <AppContext.Provider value={value} >
        {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider