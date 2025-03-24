import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {
    const [state, setState] = useState("Login")
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])


    const handleMove = () => {
        if (state === "Login") {
            setState("Sign Up")
        } else {
            setState("Login")
        }
    }

    const handleClose = () => {
        setShowLogin(false)
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            let data;
            if (state === "Login") {
                const response = await axios.post(backendUrl + "/api/user/login", { email, password });
                data = response.data;
            } else {
                const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
                data = response.data;
            }
    
            console.log("Login response:", data);
    
            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem("token", data.token);
                toast.success(data.message);
                setTimeout(() => {
                    console.log("Closing modal...");
                    setShowLogin(false);
                }, 100);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative  bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p>Welcome back! Please sign in to continue</p>
                {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <input type='text' className='outline-none text-sm' onChange={(e) => setName(e.target.value)} value={name} placeholder='Full name' required />
                </div>}
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='outline-none text-sm ' placeholder='Email id' required />
                </div>
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='outline-none text-sm ' placeholder='Password' required />
                </div>
                <p className='text-zm text-blue-600 my-4 cursor-pointer'>forgot password?</p>

                <button 
                    disabled={isLoading}
                    className='bg-blue-600 w-full text-white py-2 rounded-full'
                >
                    {isLoading ? 'Please wait...' : (state === 'Login' ? 'Login' : 'Create account')}
                </button>

                {state === "Login" ? <p className='mt-5 text-center'>Don't have an account <span className='text-blue-600 cursor-pointer' onClick={handleMove}>Sign up</span></p> :
                    <p className='mt-5 text-center'>Already have an account <span className='text-blue-600 cursor-pointer' onClick={handleMove}>Login</span></p>}
                <span className='absolute top-5 right-5 cursor-pointer' onClick={handleClose}>❌</span>
            </form>
        </div>
    )
}

export default Login
