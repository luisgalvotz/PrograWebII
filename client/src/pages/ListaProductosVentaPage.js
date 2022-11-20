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
              <div>
                    <div className="cartaListaProductoVenta">
                    <Link className="linkNavBar" to="/DetalleProductoVenta">
                     <img src={taylor1} alt="Imagen"/>
                     </Link>
                     <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                    <h6 className="tituloListaProductoVenta">Producto en venta</h6>
                    <div className= "moverLinkIzq">
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta1</span>
                        </Link>
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta2</span>
                        </Link>
                    </div>
                    </div>
              </div>
              <div>
                    <div className="cartaListaProductoVenta">
                    <Link className="linkNavBar" to="/DetalleProductoVenta">
                     <img src={taylor1} alt="Imagen"/>
                     </Link>
                     <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                    <h6 className="tituloListaProductoVenta">Producto en venta</h6>
                    <div className= "moverLinkIzq">
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta1</span>
                        </Link>
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta2</span>
                        </Link>
                    </div>
                    </div>
              </div>              <div>
                    <div className="cartaListaProductoVenta">
                    <Link className="linkNavBar" to="/DetalleProductoVenta">
                     <img src={taylor1} alt="Imagen"/>
                     </Link>
                     <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                    <h6 className="tituloListaProductoVenta">Producto en venta</h6>
                    <div className= "moverLinkIzq">
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta1</span>
                        </Link>
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta2</span>
                        </Link>
                    </div>
                    </div>
              </div>              <div>
                    <div className="cartaListaProductoVenta">
                    <Link className="linkNavBar" to="/DetalleProductoVenta">
                     <img src={taylor1} alt="Imagen"/>
                     </Link>
                     <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                    <h6 className="tituloListaProductoVenta">Producto en venta</h6>
                    <div className= "moverLinkIzq">
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta1</span>
                        </Link>
                        <Link className="linkNavBar moverLinkIzq" to="/">
                        <span>#Etiqueta2</span>
                        </Link>
                    </div>
                    </div>
              </div>
        </div>
        </div>
        </div>
    )
}

export default ListaProductosVentaPage