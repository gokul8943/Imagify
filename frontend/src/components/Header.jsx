import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const [slidePosition, setSlidePosition] = useState(0)

  const imgConst = [
    "https://miro.medium.com/v2/resize:fit:512/1*XfgfioxVVqXoftCUCN0LRg.png",
    "https://forum.endeavouros.com/uploads/default/476508c73970811f7ea89ff12cd144a416f3edec",
    "https://miro.medium.com/v2/resize:fit:512/1*I5Je7iihvHvIXdpuzplkjw.png",
    "https://cdn.openart.ai/published/dKOb2q4NHzOorebxhOHn/vsbIf0JF_GOzA_512.webp",
    "https://outland.art/wp-content/uploads/2022/08/Claire-Silver-Pieces-1024x1024.png",
    "https://easst.net/wp-content/uploads/2024/11/512px-Mask_emotions.jpg",
    "https://miro.medium.com/v2/resize:fit:512/1*AcukVR8alTbYRHXCM4k3qg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleTBe3lv9YaA-WbMn3rm5nRg5dGW_FM6d2g&s",
    "https://dalle3.ai/wp-content/uploads/2023/09/captain.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/220928180903-03-dall-e-ai.jpg?c=original",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwVu2TFj_5wLTtYq6yAGMxSf5m9n0ZbpLPQ&s",
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/DALL_-_E_Panting_in_Surrealism_style_by_Salvador_Dal%C3%AD%2C_Rhinoceros_wearing_a_business_suit_screaming_aloud_while_seeing_the_stock_price_crash.jpg",
    "https://forum.tuxdigital.com/uploads/default/original/2X/f/fb638f7ccfe5e0be5793b9a9f630d64b0496698c.jpeg",
    "https://neuralimaginarium.com/wp-content/uploads/2023/05/3725955959_a-futuristic-gallery-space-where-AI-generated-artw_512-v2-1.png",
    "https://miro.medium.com/v2/resize:fit:512/1*JK0SRuzQRM5YO-G-3rG_WA.png",
    "https://forum.makerforums.info/uploads/default/original/3X/0/2/02b53bac199b6713787bb869ff2c517a1f4482e8.png",
    "https://eu5.dh-cdn.net/uploads/db8181/original/3X/e/7/e77608a5efe1e06d34192f2e065d47056f883bb7.jpeg",
  ]

  // Slideshow animation effect
  useEffect(() => {
    const interval = setInterval(() => {

      setSlidePosition((prevPos) => 
        prevPos > -(imgConst.length * 300) + window.innerWidth ? prevPos - 1 : 0
      )
    }, 50) 

    return () => clearInterval(interval)
  }, [imgConst.length])

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .2, duration: 1 }}
      className='flex flex-col justify-between items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-nuetral-500'>
        <motion.p>Best text to image generator</motion.p>
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          repeatType: "mirror",
          delay: Math.random() * .5,
        }}
        className='text-4xl font-semibold max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center drop-shadow-md'>Turn text to <span className='text-blue-500'>image</span>,in seconds</motion.h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds just type, and watch the magic happen.</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex item-center gap-2 rounded-full'>Generate Images</motion.button>
      
      <div className='mt-16 w-full overflow-hidden'>
        <div 
          className='flex whitespace-nowrap'
          style={{ transform: `translateX(${slidePosition}px)` }}
        >
          {[...imgConst, ...imgConst].map((imgUrl, index) => (
            <img
              className='rounded hover:scale-105 transition-all duration-300 cursor-pointer inline-block mx-2'
              src={imgUrl}
              alt={`Generated ${index + 1}`}
              key={index}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
      
      <p className='mt-2 text-neutral-600'>Generated image from picGen</p>
    </motion.div>
  )
}

export default Header