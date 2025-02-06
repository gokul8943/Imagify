import React from 'react'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
       <form >
        <h1>Login</h1>
        <p>Welcome back! Please sign in to continue</p>
        <div>
            <input type='text' placeholder='Full name' required/>
        </div>
       </form>
    </div>
  )
}

export default Login
