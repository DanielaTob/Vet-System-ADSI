import React from 'react'
import ButtonBlue from '../components/buttons/ButtonBlue'
import CardProfile from '../components/CardProfile'

const ViewPerfil = ({ text }) => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-end pb-2'>
        <ButtonBlue text="Actualizar información"/>
      </div>
        <CardProfile />
    </div>
  )
}

export default ViewPerfil