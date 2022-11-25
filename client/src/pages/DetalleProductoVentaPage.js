import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import markUwu from "../img/markUwu.jpg";
import taylor2 from "../img/taylor2.png";
import taylor1 from "../img/taylor1.jpg";
import heart from "../img/heart.png";
import like from "../img/like.png";
import Form from 'react-bootstrap/Form';

import "./Styles/DetalleProducto.css";
// import { validas } from'./Scripts/Script'

import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import { articuloVenta_getById } from '../services/ArticuloService';
import { usuario_getById,usuario_getByEmail } from '../services/UsuarioService';
import { wishlist_ver, wishlist_crear, wishlist_agregar } from '../services/WishlistService';
import { likes_actualizar, likes_ver, likes_estatus } from '../services/LikesService';

const DetalleProductoVentaPage =()=>{

  const { user, getAccessTokenSilently} = useAuth0();

  let {id} = useParams(); //AQUI SE RECIBE EL PARAMETRO DE LA URL
  const [articulo, setArticulo] = useState([]);
  const [subnivel, setSub] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [usuario2, setUsuario2] = useState([]);
  const [deseos, setDeseos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [estatus, setEstatus] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
            const res = await articuloVenta_getById(id);
            setArticulo(res); //AQUI NO USAMOS EL .DATA PORQUE EN EL RESPONSE NO LO USAMOS
            setSub(res.id_articulo);

            //AQUI IRA LA INFORMACION DEL USUARIO QUE ESTA VENDIENDO EL ARTICULO
            const us = await usuario_getById(res.id_articulo.id_usuario);
            setUsuario(us);
            
            //APARTADO PARA COMPARACION DE SI EL USUARIO ES QUIEN LO PUBLICO
            const token = await getAccessTokenSilently();
            const us2 = await usuario_getByEmail(user.email, token);
            setUsuario2(us2);

            const des = await wishlist_ver(us2._id);
            setDeseos(des.articulos);

            const lik = await likes_ver(id);
            setLikes(lik);

            const est = await likes_estatus(us2._id, id);
            setEstatus(est.data);
        }
    fetchData();
    }, [])

    const [deseo, setDeseo] = useState({
      id_usuario: '',
      id_articulo: ''
    });

    const enviarDeseo = async (event) => {
      event.preventDefault();
      deseo.id_usuario = usuario2._id;
      deseo.id_articulo = id;
      if (deseos) {
        const res = await wishlist_agregar(deseo);
      }
      else {
        const crea = await wishlist_crear(deseo);
        const res = await wishlist_agregar(deseo);
      }
      window.location.href = `http://localhost:3000/DetalleProductoVenta/${id}`;
    };

    const [likeSN, setLikeSN] = useState({
      id_usuario: '',
      id_articulo: '',
      estatus: ''
    });

    const enviarLikeSN = async (event) => {
      event.preventDefault();
      likeSN.id_usuario = usuario2._id;
      likeSN.id_articulo = id;
      console.log(likeSN)
      const res = await likes_actualizar(likeSN);
      window.location.href = `http://localhost:3000/DetalleProductoVenta/${id}`;
    };

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
                  <img className="imgOpcionesDetalle" src={taylor2}alt="Imagen"/>{" "}
                </div>
                <div className="divOpcionesDetalle">{" "}
                  <img className="imgOpcionesDetalle" src={taylor1} alt="Imagen"/>{" "}
                </div>
              </div>
              <span className="product-description ofrecidoPor">Ofrecido por:</span>
              <div className="parrafo">
              <Link className="linkNavBar" to={`/PerfilResenas/${usuario._id}`}>
                <img className="imgVendedorDetalle" src={markUwu} alt="Imagen"/>
              </Link>                
              <span className="product-description descripcionExtra nombreVendedorDetalle">{usuario.nombre}</span>{" "}<br></br>
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
              <span className="product-price">${articulo.precio}</span>
              <div className="product-rating">
                <Link className="linkNavBar" to="/"><span>#Etiqueta1</span></Link>
                <Link className="linkNavBar" to="/"><span>#Etiqueta2</span></Link>
              </div>
              <p className="product-description descripcionExtra">{subnivel.descripcion}</p>
              <p className="product-description ">Notas: {subnivel.notas}</p>

              <div className="btn-groups">
              {(() => {
              if (user){
                if (usuario2._id === usuario._id){
                  //console.log ("sin boton")
                }else{
                return(
                  <>
                    <Link className="linkNavBar"  to={`/EscribirResena/${subnivel._id}`}>
                      <button type="button" className="add-cart-btn">Comprar ahora</button>
                    </Link>
                    {(() => {
                      var fav = false;
                      for (var i in deseos) {
                        if (deseos[i]._id == id) {
                          fav = true;
                          break;
                        }
                      }
                      if (!fav) {
                        return(
                          <button type="button" className="buy-now-btn" onClick={enviarDeseo}>
                            <img src={heart} alt="Bootstrap" className="btnLikeDetalle" />
                          </button>  
                        )
                      }
                    })()}
                  </>
                )
              }
              }
            })()}

            {(() => {
              if (estatus) {
                if (estatus.estatus === "si") {
                  likeSN.estatus = "no";
                  return(
                    <>
                    <button type="button" className="like-item-btn-dark" onClick={enviarLikeSN}>
                      <img src={like} alt="Bootstrap" className="btnLikeDetalle" /> {likes.suma} Likes
                    </button>
                    </>
                  )
                }
                else {
                  likeSN.estatus = "si";
                  return(
                    <>
                    <button type="button" className="like-item-btn" onClick={enviarLikeSN}>
                      <img src={like} alt="Bootstrap" className="btnLikeDetalle" /> {likes.suma} Likes
                    </button>
                    </>
                  )
                }
              }
              else {
                likeSN.estatus = "si";
                return(
                  <>
                  <button type="button" className="like-item-btn" onClick={enviarLikeSN}>
                    <img src={like} alt="Bootstrap" className="btnLikeDetalle" /> {likes.suma} Likes
                  </button>
                  </>
                )
              }
            })()}
            
            </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}

export default DetalleProductoVentaPage