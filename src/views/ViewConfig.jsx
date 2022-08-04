import React from 'react'
import CardConfig from '../components/CardConfig'

const ViewConfig = ({title}) => {
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <CardConfig title="CAMBIAR NOMBRE DE USUARIO"/>
        <CardConfig title="CAMBIAR CONTRASEÑA DE USUARIO"/>
        <CardConfig title="CREAR RESPALDO DE LA BASE DE DATOS"/>
        <CardConfig title="RESTAURAR LA BASE DE DATOS"/>
      </div>
        
    </div>
  )
}

export default ViewConfig