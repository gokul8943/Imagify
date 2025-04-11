import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

const AppContextProvider = (props) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [credit, setCredit] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })
      if (data.success) {
        setCredit(data.credits)
        setUser(data.user)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } })
      if (data.success) {
        loadCreditsData()
        toast.success(data.message)
        return data.resultImage
      } else {
        toast.error(data.message)
        loadCreditsData()
        if (data.credits === 0) {
          navigate('/buy')
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    setCredit(0);
    toast.success('Logged out successfully');
  }

  useEffect(() => {
    if (token) {
      loadCreditsData()
    }
  }, [token])


  const value = {
    user, setUser, showLogin,
    setShowLogin, backendUrl, token,
    setToken, credit, setCredit,
    generateImage, loadCreditsData, logOut
  }

  return (
    <AppContext.Provider value={value} >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider