import React from 'react';
import NavBar from './Componants/NavBar'
import CTA from './Componants/CTA'
import Whoami from './Componants/Whoami'

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <NavBar />
      <div className="flex h-full w-full">
        <div className="flex w-1/2 bg-red-900 p-4 items-center justify-center fixed top-0 bottom-0 left-0">
          <CTA />
        </div>
        
        <div className="flex w-1/2 ml-auto h-screen overflow-y-auto bg-black relative">
          <Whoami />
        </div>
      </div>
    </div>
  )
}

export default App
