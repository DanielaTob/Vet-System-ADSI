import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBlue from '../components/buttons/ButtonBlue'
import FormConsulta from '../components/FormConsulta'

const NuevaConsulta = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='text-center pt-6'>
            <h1 className='text-sky-600 text-4xl font-bold'>Nueva Consulta</h1>
      </div>
      <div className='px-10 pt-4'>
            <Link to="/dashboard">
            <ButtonBlue text="Regresar"/>
            </Link>
        </div>

        <div>
          <FormConsulta/>
        </div>
    </div>
  )
}

export default NuevaConsulta