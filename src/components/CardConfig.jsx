import React from 'react'
import { AiFillSetting } from 'react-icons/ai';
import ButtonBlue from './buttons/ButtonBlue';

const CardConfig = ({title, text}) => {
  return (

<div className="flex justify-center items-center pt-8">
    <div>
       
        <div className="relative bg-sky-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white text-2xl flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-sky-600 left-4 -top-6">
                <AiFillSetting />
            </div>
            <div className="mt-8">
                <p className="text-base text-center text-gray-600 font-bold my-2">{title}</p>      
            </div>
            <div className='text-center'>
                <ButtonBlue text="Ejecutar"/>
            </div>
            
        </div>
        
        
    </div>
</div>

  )
}

export default CardConfig