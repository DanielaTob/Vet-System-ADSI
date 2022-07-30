import React from 'react'
import { MdOutlinePets } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="w-screen max-w-screen-2xl mx-auto">
        <div className="relative" id="relative">
            <header>
                <div className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-30">
                    <div className="flex items-center space-x-2 gap-2">
                        <button className="text-sky-600 text-4xl">
                            <MdOutlinePets />
                        </button>
                        <p className="text-sky-600 font-bold text-2xl flex items-center">Pets System</p>
                    </div>
                </div>
            </header>
    </div>
</div>
  )
}

export default Navbar