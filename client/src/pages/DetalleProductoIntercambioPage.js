import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import markUwu from "../img/markUwu.jpg";
import taylor2 from "../img/taylor2.png";
import taylor1 from "../img/taylor1.jpg";
import heart from "../img/heart.png";
import like from "../img/like.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./Styles/DetalleProducto.css";
// import { validas } from'./Scripts/Script'

import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import {articuloIntercambio_getById} from '../services/ArticuloService';
import {usuario_getById} from '../services/UsuarioService';


const DetalleProductoIntercambioPage =()=>{

  const { user } = useAuth0();

  let {id} = useParams();
  const [articulo, setArticulo] = useState([]);
  const [subnivel, setSub] = useState([]);
  const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await articuloIntercambio_getById(id);
            setArticulo(res); 
            setSub(res.id_articulo);
            //AQUI IRA LA INFORMACION DEL USUARIO QUE ESTA VENDIENDO EL ARTICULO
            const res2 = await usuario_getById(res.id_articulo.id_usuario);
            setUsuario(res2);
        }
    fetchData();
    }, [])

    return(
        <div className="main-wrapper">
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <div>
                  {" "}
                  <img
                    className="imgDetalleProducto"
                    src={taylor1}
                    alt="Imagen"
                  />{" "}
                </div>
              </div>
              <div className="hover-container">
                <div className="divOpcionesDetalle">
                  {" "}
                  <img
                    className="imgOpcionesDetalle"
                    src={taylor2}
                    alt="Imagen"
                  />{" "}
                </div>
                <div className="divOpcionesDetalle">
                  {" "}
                  <img
                    className="imgOpcionesDetalle"
                    src={taylor1}
                    alt="Imagen"
                  />{" "}
                </div>
                <div className="divOpcionesDetalle">
                  {" "}
                  <img
                    className="imgOpcionesDetalle"
                    src={taylor1}
                    alt="Imagen"
                  />{" "}
                </div>
                <div className="divOpcionesDetalle">
                  {" "}
                  <img
                    className="imgOpcionesDetalle"
                    src={taylor2}
                    alt="Imagen"
                  />{" "}
                </div>
                <div className="divOpcionesDetalle">
                  {" "}
                  <img
                    className="imgOpcionesDetalle"
                    src={taylor1}
                    alt="Imagen"
                  />{" "}
                </div>
              </div>
              <span className="product-description ofrecidoPor">
                Ofrecido por:
              </span>
              <div className="parrafo">
              <Link className="linkNavBar" to="/PerfilResenas">
                <img className="imgVendedorDetalle" src={markUwu} alt="Imagen"/>
              </Link>
                <span className="product-description descripcionExtra nombreVendedorDetalle">
                {usuario.nombre}
                </span>{" "}
                <br></br>
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
              <span className="product-name">{subnivel.titulo}</span>
              <span className="product-price"> 
              {articulo.sugerencias}
              </span>
              <div className="product-rating">
                {/* <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star-half-alt"></i></span> */}

                <Link className="linkNavBar" to="/">
                  <span>#Etiqueta1</span>
                </Link>
                <Link className="linkNavBar" to="/">
                  <span>#Etiqueta2</span>
                </Link>
              </div>
              <p className="product-description descripcionExtra">
              {subnivel.descripcion}
              </p>
              <p className="product-description ">Notas: {subnivel.notas}</p>

              {(() => {
              if (user){
                return(
                  <div className="btn-groups">
                    {/* <button type="button" className="add-cart-btn">
                      Ofrecer intercambio
                    </button> */}
                    <button type="button" className="buy-now-btn">
                      <img src={heart} alt="Bootstrap" className="btnLikeDetalle" />
                    </button>
                    <button type="button" className="like-item-btn">
                      <img src={like} alt="Bootstrap" className="btnLikeDetalle" />12 likes
                    </button>
                  </div>
                )
              }
            })()}

              {(() => {
              if (user){
                return(
                  <div className="contendorCAS">
                    <h5 className="letraFooter alinearIzquier">
                      Ingrese la información de su artículo a sugerir
                    </h5>
                    <InputGroup className="mb-3">
                      <InputGroup.Text
                        className="inputArticuloSugerido"
                        id="basic-addon1"
                      >
                        Título
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Título"
                        className="inputArticuloSugeridoTexto"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Text className="inputArticuloSugerido">
                        Descripción
                      </InputGroup.Text>
                      <Form.Control
                        className="inputArticuloSugeridoTexto"
                        as="textarea"
                        placeholder="Descripción"
                        aria-label="With textarea"
                      />
                    </InputGroup>
                    <Button className="btnAgregarImagenCAS" variant="dark">
                      Agregar Imágenes
                    </Button>{" "}
                    <br></br>
                    <div className="divOpcionesDetalle imgOpcionExtra">
                      <img className="imgOpcionesDetalle " src={taylor1} alt="Imagen"/>
                    </div>
                    <div className="divOpcionesDetalle imgOpcionExtra">
                      <img className="imgOpcionesDetalle " src={taylor1} alt="Imagen"/>
                    </div>
                    <div className="divOpcionesDetalle imgOpcionExtra">
                      <img className="imgOpcionesDetalle " src={taylor1} alt="Imagen"/>
                    </div>
                    <br></br>
                    <Link className="linkNavBar" to="/EscribirResena">
                    <Button className="btnEnviarCAS" variant="dark">Enviar oferta</Button>
                  </Link>
                  </div>
                )
              }
            })()}

            </div>
          </div>
        </div>
      </div>
    )
}

export default DetalleProductoIntercambioPage