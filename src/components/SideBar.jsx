import React from 'react'
import { MdOutlinePets } from 'react-icons/md';
import { MdDateRange } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideBar = ({handleShow}) => {
  return (

    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-sky-600">
            <div className="sidebar-header flex items-center justify-center py-4">
                <div className="inline-flex">
                    <Link to="/">
                    <button className="inline-flex flex-row items-center">
                        <MdOutlinePets className='text-white text-3xl'/>
                        <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">PETS SYSTEM</span>
                    </button>
                    </Link>
                </div>
            </div>

            <div className="sidebar-content px-4 py-6">
                <div className="flex flex-col w-full space-y-7">
                    <button 
                        onClick={() => {
                            handleShow(1);
                        }}
                        className="my-px hover:bg-sky-400 rounded-lg">
                    <div className="flex flex-row items-center h-10 px-3 text-white">
                        <span className="flex items-center justify-center text-lg text-gray-400">
                            <MdOutlinePets className='text-white text-2xl'/>
                        </span>
                        <span className="ml-3 font-bold text-lg">Mascotas</span>
                    </div>
                    </button>


                <div className="my-px hover:bg-sky-400 rounded-lg">
                    <button
                        onClick={() => {
                            handleShow(2);
                        }}
                        className="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-sky-400">
                        <span className="flex items-center justify-center text-lg text-gray-400">
                            <MdDateRange className='text-white text-2xl'/>
                        </span>
                        <span className="ml-3 font-bold text-lg">Citas</span>
                    </button>
                </div>

                <div className="my-px hover:bg-sky-400 rounded-lg">
                    <button
                        onClick={() => {
                            handleShow(3);
                        }}
                        className="flex flex-row items-center h-10 px-3 text-white ">
                        <span className="flex items-center justify-center text-lg text-gray-400">
                            <FaUser className='text-white text-2xl'/>
                        </span>
                        <span className="ml-3 font-bold text-lg">Perfil</span>
                    </button>
                </div>

                <div className="my-px hover:bg-sky-400 rounded-lg">
                    <button
                        onClick={() => {
                            handleShow(4);
                        }}
                        className="flex flex-row items-center h-10 px-3 text-white">
                        <span className="flex items-center justify-center text-lg text-gray-400">
                            <AiFillSetting className='text-white text-2xl'/>
                        </span>
                        <span className="ml-3 font-bold text-lg">Configuración</span>
                    </button>
                </div>

                <div className='my-px hover:bg-red-400 rounded-lg'>
                    <Link to="/">
                        <button className="flex flex-row items-center h-10 px-3 text-white ">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <MdOutlineLogout className='text-red-500 text-2xl'/>
                            </span>
                            <span className="ml-3 font-bold text-lg">Cerrar Sesión</span>
                        </button>
                    </Link>
                </div>
              
                </div>
                </div>
            </aside>
        </div>
  )
}

export default SideBar