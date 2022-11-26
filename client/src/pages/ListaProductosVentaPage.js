import React, { Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ListaProductosVenta.css'
import {Link} from 'react-router-dom'

import { useEffect, useState } from "react";
import {articuloVenta_getAll} from '../services/ArticuloService';

const ListaProductosVentaPage =()=>{

    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await articuloVenta_getAll();
            setArticulos(res.data); 
        }
    fetchData();
    }, [])

    return(
    <div className= "main-wrapperTwo">
      <div className= "listaVentaContainer">
         <h3 className="tituloListaVenta">Productos en venta:</h3>
         <div className= "productVenta-div quitarBackgroundProductoVenta">
            {articulos.map((articulo) => {
            return (    
                <div>
                    <div className="cartaListaProductoVenta">
                        <Link className="linkNavBar" to={`/DetalleProductoVenta/${articulo.id_articulo._id}`}>
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

export default ListaProductosVentaPage