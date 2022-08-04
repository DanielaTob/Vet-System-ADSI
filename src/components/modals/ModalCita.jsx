import React, { useState } from 'react'

const ModalCita = () => {

    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
    <div className="">
      <button
      className="rounded font-bold bg-sky-600 px-3 py-2 text-white transition hover:bg-sky-700"
      onClick={() => setShowModal(true)}
      > 
      Agregar Cita
      </button>
    </div>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="text-sky-600 flex items-start justify-between p-5 ">
                <h3 className="text-3xl font-semibold">Agregar Cita</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-sky-600 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="relative p-6 flex-auto">
                <form
                  
                  className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2"
                >
                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Id cliente
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="12345"
                      required
                      className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Id usuario
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
                      Id Mascota
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
                      Nombre Macota
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Nombre mascota"
                      required
                      className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>


                  <div className="mb-2">
                    <label className="block mb-2 font-title text-sm text-colorparagraph">
                      Fecha de la cita
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
                      Motivo
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2 font-title placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                    />
                  </div>

                  <div className="p-2 ">
                    <button
                      className=" text-white bg-red-600 rounded-lg font-bold  px-6 py-2 text-base outline-none  mr-1 mb-1 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-sky-600 text-white rounded-lg font-normal  text-base px-6 py-2 mr-1 mb-1"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
  )
}

export default ModalCita