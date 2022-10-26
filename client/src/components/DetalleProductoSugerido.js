import React, { Component } from "react";
import {Link} from 'react-router-dom'
import markUwu from "../img/markUwu.jpg";
import taylor2 from "../img/taylor2.png";
import taylor1 from "../img/taylor1.jpg";

import "./Styles/DetalleProducto.css";
// import { validas } from'./Scripts/Script'

export default class DetalleProductoSugerido extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <div>{" "}
                  <img className="imgDetalleProducto" src={taylor1} alt="Imagen"/>{" "}
                </div>
              </div>
              <div className="hover-container">
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor2} alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor1} alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor1} alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor2} alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor1} alt="Imagen"/>{" "}
                </div>
              </div>
            </div>
            <div className="product-div-right">
              <span className="product-name">Sudadera de Taylor Swift</span>

              <p className="product-description descripcionExtra">
                DESCRIPCION Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Vitae animi ad minima veritatis dolore. Architecto facere
                dignissimos voluptate fugit ratione molestias quis quidem
                exercitationem voluptas.
              </p>

              <span className="product-description ofrecidoPor">
                Ofrecido por:
              </span>
              <div className="parrafo">
              <Link className="linkNavBar" to="/PerfilResenas">
                <img className="imgVendedorDetalle" src={markUwu} alt="Imagen"/>
              </Link>                <span className=" descripcionExtra nombreVendedorDetalle">
                  Pancho Pantera Barbosa
                </span>
                <form className="estrellasOut">
                  <p className="clasificacion">
                    <input id="radio1" type="radio" className="estrellasOut" value="5"/>
                    <label className="estIndividual" htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" className="estrellasOut" value="4"/>
                    <label className="estIndividual" htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" className="estrellasOut" value="3"/>
                    <label className="estIndividual" htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" className="estrellasOut" value="2"/>
                    <label className="estIndividual" htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" className="estrellasOut" value="1"/>
                    <label className="estIndividual" htmlFor="radio5">★</label>
                  </p>
                </form>
              </div>

              <div className="btn-groups">
                <button type="button" className="buy-now-btn">
                  Rechazar intercambio
                </button>
                <button type="button" className="like-item-btn">
                  Aceptar intercambio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
