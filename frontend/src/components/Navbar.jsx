import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Navbar = () => {

  const [user, setUser] = useState(true)
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
          <div className='flex text-cneter gap-2 sm:gap-3'>
            <button className='flex item-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <p className='text-xsd sm:text-sm font-medium text-gray-600'>Credit left :50</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 '>Gouri</p>
            <div>
              <img src="" alt="profile" className='w-10 drop-shadow'/>
              <div className='absoulte hidden group-hover:block top-0 right-0 z-10 text-black pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div> :
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
