import React, { useEffect, useRef } from "react";

export const NavBarTop = () => {
   // Grab everything we need
  const btnMobile = useRef()
  const menuMobile = useRef()

  // addEventListener
  useEffect(() => {
    const handleClickMenuMobile = event => {
      // console.log("button clicked.")
      // elementMenu.classList.toggle('-translate-x-full')
      elementMenu.classList.toggle('hidden')
    }

    const btnMenu = btnMobile.current
    const elementMenu = menuMobile.current

    btnMenu.addEventListener('click', handleClickMenuMobile)
  
    return () => {
      btnMenu.removeEventListener('click', handleClickMenuMobile)
    }
  }, [])
  


  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              {/* <div div className="flex items-center space-x-1">
              <a className="py-5 px-2 text-gray-600 hover:text-gray-900" href="#">Features</a>
              <a className="py-5 px-2 text-gray-600 hover:text-gray-900" href="#">Pricing</a>
            </div> */}
              {/* logo */}
              <div className="mr-4">
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  <span className="font-bold">Better Dev</span>
                </a>
              </div>
              {/* primary nav */}
              <div div className="hidden md:flex items-center space-x-1">
                <a
                  className="py-5 px-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="py-5 px-2 text-gray-600 hover:text-gray-900"
                  href="#"
                >
                  Pricing
                </a>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex  items-center space-x-1">
              <a href="" className="py-5 px-3 hover:text-gray-900">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded transition duration-300 hover:bg-yellow-300 hover:text-yellow-800"
              >
                Signup
              </a>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button 
                ref={btnMobile}
                className="mobile-menu-button
              ">
                <svg
                className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0  24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div 
          ref={menuMobile}
          className="hidden md:hidden absolute bg-gray-100">
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Features
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Pricing
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Contact
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Subscribe
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Subscribe
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Subscribe
          </a>
          <a className="block py-2 px-4 text-sm hover:bg-gray-200" href="#">
            Subscribe another special option
          </a>
        </div>
      </nav>

      {/* content goes here */}
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-6xl">Navbar in tailwind</h2>
      </div>
    </>
  );
};
