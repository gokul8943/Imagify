import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Navbar = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleMove = () =>{
    navigate('/buy')
  }
  return (
    <div className='flex item-center justify-between py-4'>
      <Link to='/'>
        <img src="" alt="imagify" className='w-28 sm:w-32 lg:w-40' />
      </Link>
      <div>
        {user ?
          <div></div> :
          <div className='flex item-center gap-2 sm:gap-5'>
            <p onClick={handleMove} className='cursor-pointer'>Pricing</p>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
