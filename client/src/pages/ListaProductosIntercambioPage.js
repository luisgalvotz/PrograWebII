import React, { Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ListaProductosVenta.css'
import {Link} from 'react-router-dom'

import { useEffect, useState } from "react";
import {articuloIntercambio_getAll} from '../services/ArticuloService';

const ListaProductosIntercambioPage =()=>{

    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await articuloIntercambio_getAll();
            setArticulos(res.data); 
        }
    fetchData();
    }, [])

    return(
        <div className= "main-wrapperTwo">
         <div className= "listaVentaContainer">
         <h3 className="tituloListaVenta">Productos para intercambio:</h3>
         <div className= "productVenta-div quitarBackgroundProductoVenta">
            {articulos.map((articulo) => {
            return (
              <div>
                    <div className="cartaListaProductoVenta cartaListaProductoIntercambio">
                    <Link className="linkNavBar" to={`/DetalleProductoIntercambio/${articulo.id_articulo._id}`}>
                     <img src={articulo.id_articulo.imagenes} alt="Imagen"/>
                     </Link>
                     <h4 className="tituloListaProductoVenta">{articulo.id_articulo.titulo}</h4>
                    <div className= "moverLinkIzq">
                        <Link className="linkNavBar moverLinkIzq" to="">
                        <span>#{articulo.id_articulo.etiquetas.nombre}</span>
                        </Link>
                    </div>
                    </div>
              </div>
            )
            })}
         </div>
        </div>
        </div>
    )
}

export default ListaProductosIntercambioPage