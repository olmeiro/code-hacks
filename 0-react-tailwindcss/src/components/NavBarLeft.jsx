import { useEffect, useRef, useState } from "react";



function NavBarLeft() {
  // Grab everything we need
  const btnRef = useRef();
  const sidebar =useRef();
  
  // addEventListener
  useEffect(() => {
    const handleClick = event => {
      // console.log('Button clicked');
      sidebarElement.classList.toggle('-translate-x-full')
    };

    const btnElement = btnRef.current
    const sidebarElement = sidebar.current  

    btnElement.addEventListener('click', handleClick);

    return () => {
      btnElement.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar
         https://heroicons.com/ */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        {/* a.block.p-4.text-white.font-bold{BetterDev} */}
        <a href="" className="block p-4 text-white font-bold">
          BetterDev
        </a>
        {/* mobile menu button */}
        <button 
          ref={btnRef}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      {/* sidebar */}
      <div 
      ref={sidebar}
      className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0  -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* logo */}
        <a className="text-white flex items-center space-x-2 px-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
            />
          </svg>
          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>
        {/* nav */}
        <nav>
          {/* a*4.block.py-2.5.px-4 */}
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Home
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            About
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Features
          </a>
          <a
            href=""
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>
      {/* content */}

      <div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
    </div>
  );
}

export default NavBarLeft;
