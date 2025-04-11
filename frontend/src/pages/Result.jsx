import React, { useContext, useState } from 'react'
import img from '../assets/cat.png'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {
  const [image, setImage] = useState(img)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const { generateImage } = useContext(AppContext)

  const generateAnother = () => {
    setIsImageLoaded(false)
    setInput('')
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    try {
      const resultImage = await generateImage(input)
      if (resultImage) {
        setImage(resultImage)
        setIsImageLoaded(true)
      }
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className='flex flex-col min-h-[90vh] justify-center items-center'
    >
      <div className='relative'>
        <img
          src={image}
          alt="Generated image"
          className='max-w-sm rounded shadow-lg'
          onLoad={() => setIsImageLoaded(true)}
        />
        {loading && (
          <div className='absolute bottom-0 left-0 w-full h-1 bg-blue-500'>
            <div className='w-full h-full bg-blue-500 animate-progress'></div>
          </div>
        )}
        {loading && <p className='mt-2 text-gray-600'>Generating your image...</p>}
      </div>

      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder='Describe what you want to generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'
          />
          <button
            type='submit'
            disabled={loading}
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <button
            onClick={generateAnother}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-gray-100'
          >
            Generate Another
          </button>
          <a
            href={image}
            download="generated-image.png"
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-800'
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
