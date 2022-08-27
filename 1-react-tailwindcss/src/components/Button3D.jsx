import React from 'react'

// https://www.youtube.com/watch?v=svIgDeO0CQU

export const Button3D = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-600'>
      {/* button goes here */}
      <button className='relative  font-thin text-xl'>
      {/* background goes here */}
      <div className='absolute inset-x-0 h-full -bottom-2 bg-gray-100 border border-gray-500 rounded-lg'>

      </div>
      {/* text goes here */}
      <div className='relative bg-gray-100 border border-gray-500 rounded-lg py-4 px-10 transition transform duration-500 hover:translate-y-2'>Click me!</div>
      </button>
    </div>
  )
}
