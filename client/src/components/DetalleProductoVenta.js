import React, { Component } from "react";
import { Link } from "react-router-dom";
import markUwu from "../img/markUwu.jpg";
import taylor2 from "../img/taylor2.png";
import taylor1 from "../img/taylor1.jpg";
import heart from "../img/heart.png";
import like from "../img/like.png";

import "./Styles/DetalleProducto.css";
// import { validas } from'./Scripts/Script'

export default class DetalleProductoVenta extends Component {
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
                  <img className="imgOpcionesDetalle" src={taylor2}alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor1} alt="Imagen"/>{" "}
                </div>
              </div>
              <span className="product-description ofrecidoPor">Ofrecido por:</span>
              <div className="parrafo">
                <img className="imgVendedorDetalle" src={markUwu} alt="Imagen"/>
                <span className="product-description descripcionExtra nombreVendedorDetalle">Pancho Pantera Barbosa</span>{" "}<br></br>
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
            </div>
            <div className="product-div-right">
              <span className="product-name">Sudadera de Taylor Swift</span>
              <span className="product-price">$ 50.25</span>
              <div className="product-rating">
                <Link className="linkNavBar" to="/"><span>#Etiqueta1</span></Link>
                <Link className="linkNavBar" to="/">
                  <span>#Etiqueta2</span>
                </Link>
              </div>
              <p className="product-description descripcionExtra">
                DESCRIBIENDO QUE Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae animi ad minima veritatis dolore.
                Architecto facere dignissimos voluptate fugit ratione molestias
                quis quidem exercitationem voluptas.
              </p>
              <p className="product-description ">Nota: tiene una mancha</p>
              <div className="btn-groups">
                <button type="button" className="add-cart-btn">Comprar ahora</button>
                <button type="button" className="buy-now-btn">
                  <img src={heart} alt="Bootstrap" className="btnLikeDetalle" />
                </button>
                <button type="button" className="like-item-btn">
                  <img src={like} alt="Bootstrap" className="btnLikeDetalle" /> 12 Likes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
