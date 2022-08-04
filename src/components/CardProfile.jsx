import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

const CardProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-sky-600 shadow-xl rounded">
        <div className="flex justify-center items-center py-6">
            <FaUserCircle  className='text-6xl text-white'/>
        </div>
        
        <div className="bg-sky-200 pt-8 pb-16">
            <div className="text-center text-gray-600 mb-6">Nombre del usuario</div>
                <div className="w-4/5 mx-auto text-gray-600">
                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Id usuario</p>
                    </div>

                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Tipo de usuario</p>
                    </div>
      
                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Nombre de usuario</p>
                    </div>

                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Documento de identidad</p>
                    </div>
      
                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Dirección</p>
                    </div>
      
                    <div className="flex items-center bg-white rounded shadow-md mb-4 p-2">
                        <p>Telefono</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CardProfile