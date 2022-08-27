import React from 'react'

// https://www.youtube.com/watch?v=tcK38Simjaw

export const ResponsiveTailwind = () => {
  return (
    <div className='min-h-screen bg-yellow-300 p-32 p-10'>
     <div className='space-y-10 md:space-x-0 md:grid md:grid-cols-2'>
       {/* left */}
       <div className='md:flex md:flex-col md:justify-center'>
        {/* h2.text-black.text-4xl.font-bold{Whow Responsive!} */}
        <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Whow Responsive!</h2>
        <p className="text-lg text-gray-900">Responsive can be done using Tailwind.</p>
       </div>
       <div className='bg-white rounded p-4'>
         {/* div.w-full-h-64.round-lg.shadow-2xl-bg-black{hi} */}
         <div className="w-full h-64 round-lg shadow-2xl bg-black md:bg-red-400">hi</div>
       </div>
     </div>
    </div>
  )
}
