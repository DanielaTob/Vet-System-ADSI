import React from 'react'
import ButtonBlue from './buttons/ButtonBlue'
import ButtonWhite from './buttons/ButtonWhite'
import imglogin from '/assets/animals1.png'
import { Link } from "react-router-dom";

const FormLogin = ({ text }) => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        
        <div className='pt-8 text-center'>
          <Link to="/registro">
            <ButtonBlue text="Registro"/>
          </Link>
        </div>

        <div className='grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

          <div className='flex justify-center items-center'>
            <img src={imglogin}/>
          </div>

          <div className='flex justify-center items-center'>
          <div className='w-full max-w-xs'>
            <div className='bg-sky-600 py-8 px-4 shadow rounded-lg'>

              <div className='text-center pb-6'>
                <h1 className='text-3xl text-white font-bold'>
                  Iniciar Sesión
                </h1>
              </div>
              

              <form className='space-y-5'>

                <div>
                  <label className='block text-sm uppercase text-white mb-3 font-bold'>
                    Nombre de usuario
                  </label>
                  <input className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400' placeholder="name@flowbite.com" required/>
                </div>

                <div>
                  <label className='block text-sm uppercase text-white mb-3 font-bold'>
                    Contraseña
                  </label>
                  <input className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400' placeholder="name@flowbite.com" required/>
                </div>

                <div className='text-center pt-4'>
                  <Link to="/dashboard">
                  <ButtonWhite text="Ingresar"/> 
                  </Link>
                </div>

              </form>

            </div>
          </div>
          </div>
        
        
        
        </div>    


    </div>
  )
}

export default FormLogin