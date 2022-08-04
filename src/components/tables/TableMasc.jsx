import React, { useMemo, useState } from 'react'
import DataTable from "react-data-table-component";
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ButtonBlue from '../buttons/ButtonBlue';
import ModalUser from '../modals/ModalUser';

const TableMasc = () => {

    const [text, setText] = useState("");

    const colums = [
        {
          name: "id mascota",
          selector: row => row.idMascota,
        },
        {
          name: "id cliente",
          selector: row => row.idCliente,
        },
        {
          name: "# ficha",
          selector: row => row.nFicha,
        },
        {
            name: "Nombre",
            selector: row => row.nombreMascota,
        },
        {
            name: "Especie",
            selector: row => row.especie,
        },
        {
            name: "Raza",
            selector: row => row.raza,
        },
        {
            name: "Sexo",
            selector: row => row.sexo,
        },
        {
            name: "Nacimiento",
            selector: row => row.nacimiento,
        },
        {
            name: "Cliente Nombre",
            selector: row => row.nombreCliente,
        },
        {
            name: "Cedula",
            selector: row => row.identidad,
        },
        {
            name: "Telefono",
            selector: row => row.telefono,
        },
        {
          name: "Dirección",
          selector: row => row.direccion,
        },
        {
            name: "Correo",
            selector: row => row.email,
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
        },
        {
            name: "Ver ficha",
            cell: (data) => (
                <Link to="/ficha-paciente">
                <ButtonBlue text="Ver ficha"/>
                </Link>
            ),
            button: true,
        },
        ,
        {
            name: "Nueva consulta",
            cell: (data) => (
                <Link to="/nueva-consulta">
                <ButtonBlue text="Consulta"/>
                </Link>
            ),
            button: true,
        }
      ];

      const data = [
        {
            idMascota: 1,
            idCliente: 1,
            nFicha: 1,
            nombreMascota: 'Pepe',
            especie: 'Perro',
            raza: 'Labrador',
            sexo: 'Hembra',
            nacimiento: '20/04/1999',
            nombreCliente: 'Carlos',
            identidad: 12345,
            telefono: 37474764,
            direccion: 'calle 3 n 43',
            email: 'usuario@gmail.com'

        },
        {
            idMascota: 2,
            idCliente: 2,
            nFicha: 2,
            nombreMascota: 'Copito',
            especie: 'Gato',
            raza: 'Persa',
            sexo: 'Macho',
            nacimiento: '20/04/1999',
            nombreCliente: 'Valemar',
            identidad: 12345,
            telefono: 37474764,
            direccion: 'calle 3 n 43',
            email: 'usuario@gmail.com'
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
        <div>
            <div>
                <ModalUser />
            </div>
        </div>
        <DataTable
                  title={"Pacientes"}
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

export default TableMasc