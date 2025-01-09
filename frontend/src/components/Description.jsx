import React from 'react'
import cat from '../assets/cat.png'

const Description = () => {
    return (
        <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Image</h1>
            <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
            <div className='flex flex-col gap-4 md:gap-14 md:flex-row item-center'>
                <img src={cat} alt="cat" className='w-80 xl:w-96 rounded-lg' />
                <div >
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to image Generator</h2>
                    <p className='text-gary-600'>Easily bring your ideas to life with our free AI image generator.Whether you need stunning visuals or unique imagery, our tool transforms your text inti eye-catching images with just a few clicks.Imagine it, describe it, and watch it come to lifr insatantly.</p>
                    <p>Simply type in a text prompt,and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even cocepts that don't yet exist can be visualized effortlessly.Powered by advanced AI technology, yhe creat9ive possibilities are limitless!</p>
                </div>
            </div>

        </div>
    )
}

export default Description
