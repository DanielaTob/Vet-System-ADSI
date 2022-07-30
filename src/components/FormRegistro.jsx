import React from 'react'
import { Link } from "react-router-dom";
import ButtonBlue from './buttons/ButtonBlue';
import ButtonWhite from './buttons/ButtonWhite';

const FormRegistro = ({ text }) => {
  return (
    <div className='max-w-screen-2xl mx-auto'>

        <div className='pt-8 text-center'>
          <Link to="/iniciar-sesion">
            <ButtonBlue text="Iniciar Sesión"/>
          </Link>
        </div>


        
        <div className='flex justify-center items-center px-4 pt-4'>

            <div class="bg-sky-600 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  
                <div className='text-center pb-6'>
                    <h1 className='text-3xl text-white font-bold'>Registro</h1>
                </div>
  
            <form>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Tipo de usuario
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Tipo de usuario"/>
                    </div>
    
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Acceso
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Acceso"/>
                    </div>

                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Contraseña
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="******"/>
                    </div>

                </div>

                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Documento de identidad
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
    
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Correo electronico
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="name@flowbite.com"/>
                    </div>

                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Telefono
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>

                </div>

                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Nombre
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
    
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Apellidos
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>

                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Dirección
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>

                </div>

                <div className='text-center'>
                    <ButtonWhite text="Ingresar"/>
                </div>

  

            </form> 

  
    
  

        </div>
    </div>



    </div>
  )
}

export default FormRegistro