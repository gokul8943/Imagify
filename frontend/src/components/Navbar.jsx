import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import polo from '../assets/polo1.png'

const Navbar = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleMove = () => {
    navigate('/buy')
  }
  return (
    <div className='flex item-center justify-between py-4'>
      <Link to='/' className='flex gap-0'>
        <p className='text-orange-600 drop-shadow-lg font-bold'>IMA</p>
        <p className='text-blue-500 drop-shadow-md font-bold'>GIFY</p>
      </Link>
      <div>
        {user ?
          <div className='flex text-cneter gap-2 sm:gap-3'>
            <button className='flex item-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <p className='text-xsd sm:text-sm font-medium text-gray-600'>Credit left :50</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 '>Gouri</p>
            <div className='relative group'>
              <img src={polo} alt="profile" className='w-10 drop-shadow' />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div> :
          <div className='flex item-center gap-2 sm:gap-5'>
            <button onClick={handleMove} className='border border-blue-500 bg-white text-gray-600 px-7 py-2 sm:px-10 text-sm font-semibold rounded-full'>Pricing</button>
            <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm font-semibold rounded-full'>Login</button>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
