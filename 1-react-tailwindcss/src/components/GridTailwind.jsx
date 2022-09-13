import React from 'react'

// https://www.youtube.com/watch?v=43x3kg99ipk

export const GridTailwind = () => {


  return (
    <div className='bg-blue-400 min-h-screen flex items-center justify-center'>
      {/* <div className='grid grid-cols-3 gap-2'> */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'> mobile */}
      <div className='grid grid-cols-3 gap-2'>
        {/* div{$}*9 */}
        <div className='col-span-2 bg-white p-3 rounded'>1</div>
        {/* <div className='bg-white p-3 rounded'>1</div> */}
        <div className='bg-white p-3 rounded'>2</div>
        <div className='row-span-3 bg-white p-3 rounded'>3</div>
        {/* <div className='bg-white p-3 rounded'>3</div> */}
        <div className='bg-white p-3 rounded'>4</div>
        <div className='bg-white p-3 rounded'>5</div>
        <div className='bg-white p-3 rounded'>6</div>
        <div className='col-span-2 bg-white p-3 rounded'>7</div>
        {/* <div className='bg-white p-3 rounded'>7</div> */}
        <div className='bg-white p-3 rounded'>8</div>
        <div className='bg-white p-3 rounded'>9</div>
        {/* <div className='bg-white p-3 rounded'>9</div> */}
      </div>
    </div>
  )
}
