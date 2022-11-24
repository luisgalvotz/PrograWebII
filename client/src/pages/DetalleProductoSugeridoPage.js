import React, { Component } from "react";
import { Form, Link, useParams } from "react-router-dom";
import markUwu from "../img/markUwu.jpg";
import taylor2 from "../img/taylor2.png";
import taylor1 from "../img/taylor1.jpg";

import "./Styles/DetalleProducto.css";
// import { validas } from'./Scripts/Script'
import { useAuth0 } from "@auth0/auth0-react";
import {usuario_getByEmail} from '../services/UsuarioService';
import { useEffect, useState } from "react";
import {oferta_getById,oferta_negar} from '../services/OfertasService';
import {usuario_getById} from '../services/UsuarioService';
import {articuloIntercambio_getById} from '../services/ArticuloService';

const DetalleProductoSugeridoPage =()=>{

  //TRAER LA INFORMACION DE LA OFERTA
  let {id} = useParams();
  const [ofertas, setOfertas] = useState([]);
  const [ofertas2, setOfertas2] = useState([]);
  const [ofertas3, setOfertas3] = useState([]);
  const [ofertas4, setOfertas4] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //SACAR DATOS DE LA OFERTA
        const res = await oferta_getById(id);
        setOfertas(res);
        //SACAR DATOS DEL OFERTANTE 
        const res2 = await usuario_getById(res.id_ofertante);
        setOfertas2(res2);
        //SACAR TITULO DEL PRODUCTO QUE OFERTO PARA HACER EL CAMBIO
        const res3 = await articuloIntercambio_getById(res.id_articulo);
        setOfertas3(res3);
        setOfertas4(res3.id_articulo)


    }
fetchData();
}, [])


//FUNCION PARA RECHAZAR OFERTA
//ES DECIR, CAMBIAR SU ESTADO DE PENDIENTE A RECHAZADO
const enviarDatos = async (event) =>{
  event.preventDefault();
  const res = await oferta_getById(id);
  await oferta_negar(res)
  window.location.href = "http://localhost:3000/AdministrarIntercambios";

}





    return(
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
            <span className="product-name">Producto ofertado: {ofertas4.titulo}</span>
            <span className="product-name">Producto a cambio: {ofertas.titulo}</span>

              <p className="product-description descripcionExtra">
                {ofertas.descripcion}
              </p>

              <span className="product-description ofrecidoPor">
                Ofrecido por: 
              </span>
              <div className="parrafo">
              <Link className="linkNavBar" to={`/PerfilResenas/${ofertas.id_ofertante}`}>
                <img className="imgVendedorDetalle" src={markUwu} alt="Imagen"/>
              </Link>                <span className=" descripcionExtra nombreVendedorDetalle">
              {ofertas2.nombre}
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
                
                <button type="submit" className="buy-now-btn" onClick={enviarDatos}>
                  Rechazar intercambio
                </button>
                <Link className="linkNavBar"  to={`/EscribirResena2/${id}`}>
                <button  className="like-item-btn">
                  Aceptar intercambio
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DetalleProductoSugeridoPage