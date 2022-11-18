import React from 'react'
import Dashboard from '../components/Dashboard'
// import TextoResultados from '../components/TextoResultados'

const DashboardPage =()=>{
    return(
        <React.Fragment>    
        <Dashboard></Dashboard>
        </React.Fragment>    
    )
}

export default DashboardPage

/* import React, { useEffect, useState } from "react";
import {articulo_getAll} from '../services/ArticuloService';

export default function DashboardPage(props) {

    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await articulo_getAll();
            setArticulos(res.data); //TENEMOS QUE AGREGAR EL DATA PARA QUE SEPA DE DONDE SACAR LA INFO
        }
    fetchData();
    }, [])
  
    return (
        <>
        <h1>Articulos</h1>
        <table>
          <th>
            <td>Titulo</td>
          </th>
          {articulos.map((articulo) => {
            return (
              <tr>
                <td>{articulo.titulo}</td>
              </tr>
            )
          })}
        </table>
        </>
      )
  
} */