import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import markUwu from '../img/markUwu.jpg'
import taylor2 from '../img/taylor2.png'
import taylor1 from '../img/taylor1.jpg'
import heart from '../img/heart.png'
import like from '../img/like.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './Styles/DetalleProducto.css'
// import { validas } from'./Scripts/Script'

export default class DetalleProductoSugerido extends Component {
  
  render() {
    
    return (
      <div className= "main-wrapper">
        <div className= "container">

            <div className= "product-div">
                <div className= "product-div-left">
                    <div className= "img-container">
                    <div>     <img className= "imgDetalleProducto" src={taylor1} alt="Imagen"/> </div>
                    </div>
                    <div className= "hover-container">
                        <div className= "divOpcionesDetalle">     <img className= "imgOpcionesDetalle" src={taylor2} alt="Imagen"/> </div>
                        <div className= "divOpcionesDetalle">     <img className= "imgOpcionesDetalle" src={taylor1} alt="Imagen"/> </div>
                        <div className= "divOpcionesDetalle">     <img className= "imgOpcionesDetalle" src={taylor1} alt="Imagen"/> </div>
                        <div className= "divOpcionesDetalle">     <img className= "imgOpcionesDetalle" src={taylor2} alt="Imagen"/> </div>
                        <div className= "divOpcionesDetalle">     <img className= "imgOpcionesDetalle" src={taylor1} alt="Imagen"/> </div>
                    </div>

                  
                </div>
                <div className= "product-div-right">
                    <span className= "product-name">(New) A Watch - For Men</span>

                    <p className= "product-description descripcionExtra">DESCRIBIENDO QUE Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    
                    <span className= "product-description ofrecidoPor">Ofrecido por:</span>
                    <div className="parrafo">
                    <img className= "imgVendedorDetalle" src={markUwu} alt="Imagen"/>
                    <span className= " descripcionExtra nombreVendedorDetalle">Pancho Pantera Barbosa</span>
                    <span className= " calificacionVendedorDetalle">Calificación de 6.9</span><br></br>
                    </div>
                    
                    <div className= "btn-groups">
                        <button type = "button" className= "buy-now-btn">   
                        Rechazar intercambio
                        </button>
                        <button type = "button" className= "like-item-btn"> 
                        Aceptar intercambio
                        </button>
                    </div>

               

                </div>
            </div>
        </div>
    </div>
    )
  }
}
