import React, { Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ListaProductosVenta.css'
import {Link} from 'react-router-dom'

const ListaProductosBusquedaPage =()=>{
    return(
        <div className= "main-wrapperTwo">
        <div className= "listaVentaContainer">
        <h3 className="tituloListaVenta">Resultados de búsqueda:</h3>
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
                   <div className="cartaListaProductoVenta cartaListaProductoIntercambio">
                   <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                    <img src={taylor1} alt="Imagen"/>
                    </Link>
                    <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                   <h6 className="tituloListaProductoVenta">Producto para intercambio</h6>
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
             </div>            
             <div>
                   <div className="cartaListaProductoVenta cartaListaProductoIntercambio">
                   <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                    <img src={taylor1} alt="Imagen"/>
                    </Link>
                    <h4 className="tituloListaProductoVenta">Sudadera de Taylor Swift</h4>
                   <h6 className="tituloListaProductoVenta">Producto para intercambio</h6>
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

export default ListaProductosBusquedaPage