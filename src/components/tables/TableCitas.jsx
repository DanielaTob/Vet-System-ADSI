import React, { useMemo, useState }  from 'react'
import DataTable from "react-data-table-component";
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import ButtonBlue from '../buttons/ButtonBlue';
import ModalCita from '../modals/ModalCita';


const TableCitas = () => {

    const [text, setText] = useState("");

    const colums = [
        {
          name: "id usuario",
          selector: row => row.idUsuario,
        },
        {
          name: "id Mascota",
          selector: row => row.idMascota,
        },
        {
          name: "id Cliente",
          selector: row => row.idCliente,
        },
        {
            name: "Fecha",
            selector: row => row.fecha,
        },
        {
            name: "Motivo",
            selector: row => row.motivo,
        },
        {
          name: "Editar",
          cell: (data) => (
                <MdModeEdit />
          ),
          button: true,
        },
        {
          name: "Eliminar",
          cell: (data) => (
              <FaTrash />
          ),
          button: true,
        }
      ];

      const data = [
        {
            idMascota: 1,
            idCliente: 1,
            idUsuario: 1,
            fecha: '20/04/2022',
            motivo: 'Cirugia',
            

        },
        {
            idMascota: 2,
            idCliente: 2,
            idUsuario: 2,
            fecha: '20/04/2022',
            motivo: 'Cirugia',
        },
    ]

    const ButtonSearch = useMemo(() => {
        return (
          <input
            type="text"
            className="text-white bg-gray outline-none border-b-2 text-center"
            placeholder="Buscar por nombre"
            value={text}
          />
        );
      });


  return (

    <div className='max-w-screen-2xl mx-auto min-h-screen'>
        <ModalCita />
        <DataTable
                  title={"Citas"}
                  columns={colums}
                  data={data}
                  pagination
                  highlightOnHover
                  responsive="true"
                  subHeader={true}
                  subHeaderComponent={ButtonSearch}
                  persistTableHead
                  progressPending={false}
                />
    </div>
    
  )
}

export default TableCitas