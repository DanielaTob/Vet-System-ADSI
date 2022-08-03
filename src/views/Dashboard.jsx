import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ViewCitas from './ViewCitas'
import ViewConfig from './ViewConfig'
import ViewMascotas from './ViewMascotas'
import ViewPerfil from './ViewPerfil'

const Dashboard = () => {

    const [component, setComponent] = useState(1)

  return (

        <div>
            <div className="">
                <div className="flex flex-row min-h-screen ">

                <SideBar handleShow={setComponent}/>

                <main className="overflow-scroll bg-dark flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <div className="flex flex-col flex-grow p-4">
                    
                        {component === 1 && <ViewMascotas/>}
                        {component === 2 && <ViewCitas />}
                        {component === 3 && <ViewPerfil />}
                        {component === 4 && <ViewConfig />}


                    </div>

                </main>
                </div>
            </div>
        </div>

  )
}

export default Dashboard