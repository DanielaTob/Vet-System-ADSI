import React from 'react'

const FormConsulta = () => {
  return (

    <div className="shadow-lg relative flex flex-col w-full ">
              <div className="text-sky-600 flex items-start justify-between p-5 ">
               

              <div className="relative p-6 flex-auto">
                <form className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                
                
                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm ">
                      Numero de consulta
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Numero de consulta"
                      required
                      className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                     Ficha
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="100"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                     Id Usuario
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="100"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm ">
                      Id Paciente
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="12345"
                      required
                      className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Id cliente
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="644677"
                      required
                      className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Fecha de la consulta
                    </label>
                    <input
                      type="date"

                        placeholder="dd/mm/yyyy"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>


                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Sintomas
                    </label>
                    <textarea
                        rows="5"
                      type="text"
                      name="user_phone"
                      placeholder="Escriba sintomas"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Diagnostico del paciente
                    </label>
                    <textarea
                        rows="5"
                      type="text"
                      name="user_phone"
                      placeholder="Escriba diagnostico"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>
                
                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Tratamiento
                    </label>
                    <textarea
                        rows="5"
                      type="text"
                      name="user_phone"
                      placeholder="Escriba tratamiento"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>


                  <div className="pt-2">
                    <button
                      className="bg-sky-600 text-white rounded-lg font-normal  text-base px-6 py-2 mr-1 mb-1"
                      type="submit"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

  )
}

export default FormConsulta