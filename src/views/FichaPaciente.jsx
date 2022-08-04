import React from 'react'
import { Link } from 'react-router-dom'
import ButtonBlue from '../components/buttons/ButtonBlue'
import FormFicha from '../components/FormFicha'

const FichaPaciente = ({text}) => {
  return (
    <div>
        <div className='text-center pt-6'>
            <h1 className='text-sky-600 text-4xl font-bold'>Ficha del paciente</h1>
        </div>
        <div className='px-10 pt-4'>
            <Link to="/dashboard">
            <ButtonBlue text="Regresar"/>
            </Link>
        </div>

        <div>
            <FormFicha />
        </div>
        
    </div>
  )
}

export default FichaPaciente