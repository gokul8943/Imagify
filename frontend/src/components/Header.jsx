import React from 'react'
import cat from '../assets/cat.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

 const navigate = useNavigate()

  const handleMove = () =>{
    navigate('/result')
  }

  return (
    <div className='flex flex-col justify-between items-center text-cnter my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-nuetral-500'>
        <p>Best text to image generator</p>
      </div>
      <h1 className='text-4xl font-semibold max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center drop-shadow-md'>Turn text to <span className='text-blue-500'>image</span>,in seconds</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity  with AI. Turn your imagination into visual art in seconds just type, and watch the magic happen.</p>
      <button onClick={handleMove} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex item-center gap-2 rounded-full'>Generate Images</button>
        <div className='flex flex-wrap justify-center mt-16 gap-3'>
          {Array(6).fill('').map((item,index) =>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
             src={cat} alt="img" key={index} width={70} />
          ))}
        </div>
        <p className='mt-2 text-neutral-600'>Generated image from imagify</p>
    </div>
  )
}

export default Header
