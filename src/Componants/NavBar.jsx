import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50">
      <div className="flex h-16 md:h-20 rounded-full bg-opacity-90 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="flex w-1/2 h-full bg-black bg-opacity-90 rounded-l-full items-center pl-6">
          <h1 className="text-white font-noto text-xl md:text-2xl font-extrabold hover:text-red-600 transition-all duration-500 ease-in-out-all duration-900 ease-in-out">
            Nassreddine
          </h1>
        </div>
        <div className="flex w-1/2 h-full bg-red-900 bg-opacity-90 rounded-r-full items-center justify-end pr-6">
        </div>
      </div>
    </div>
  )
}

