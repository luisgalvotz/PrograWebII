import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import mujerPosando from '../img/mujerPosando.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import heart from "../img/heart.png";
import markUwu from "../img/markUwu.jpg";
import './Styles/Perfil.css'

import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import { usuario_getById } from '../services/UsuarioService';
import { resenas_ver, resenas_promedio } from '../services/ResenasService';

const PerfilResenasPage =()=>{

  const { user, getAccessTokenSilently } = useAuth0();

  let {id} = useParams(); //AQUI SE RECIBE EL PARAMETRO DE LA URL
  const [usuario, setUsuario] = useState([]);
  const [resenas, setResenas] = useState([]);
  const [promedio, setPromedio] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const token = await getAccessTokenSilently();
            const us = await usuario_getById(id, token);
            setUsuario(us);

            const res = await resenas_ver(id);
            setResenas(res);

            const prom = await resenas_promedio(id);
            setPromedio(prom);
        }
    fetchData();
    }, [])

    return(
        <div className= "container-perfil">
        <div className= "row" >
            <div className="img-izqperfil col-sm-4">
            <img className= "img_perfil img-fluid" src={mujerPosando} alt="Usuario"/>
            <p className= "rating-perfil">{usuario.nombre}</p>
            <form className="estrellasOutP">
            <p className="clasificacion">
                    <input id="estrella1" type="radio" className="estrellasOutP" value="5"/>
                    <label className="estIndividualP" htmlFor="radio1">★</label>
                    <input id="estrella2" type="radio" className="estrellasOutP" value="4"/>
                    <label className="estIndividualP" htmlFor="radio2">★</label>
                    <input id="estrella3" type="radio" className="estrellasOutP" value="3"/>
                    <label className="estIndividualP" htmlFor="radio3">★</label>
                    <input id="estrella4" type="radio" className="estrellasOutP" value="2"/>
                    <label className="estIndividualP" htmlFor="radio4">★</label>
                    <input id="estrella5" type="radio" className="estrellasOutP" value="1"/>
                    <label className="estIndividualP" htmlFor="radio5">★</label>
                  </p>
            </form>
            {/* <Form.Group className="btn-perfil mb-3">
                    <Form.Label className= "user-perfil">Editar foto de perfil</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            <Button className= "btn-perfil" type="submit">
            Eliminar Cuenta
            </Button> */}
            </div>
            <div className="sesion-perfil col-sm-8">
            <p className= "user-perfil">Reseñas:</p>

            {resenas.map((resena) => {
              return(
                <div className="contendorCAS2">
                <Link className="linkNavBar" to="/PerfilResenas">
                <img className="imgResena" src={markUwu} alt="Imagen"/>
                  </Link>
                  <h5 className="letraFooter alinearIzquier whiteTe">{resena.id_usuario.nombre}</h5>
                  <p className="notaListaProductoAdquirido whiteTe">{resena.contenido}</p>
                  <br></br>

                  <h6 className="letraFooter alinearIzquier whiteTe">Calificación :</h6>
                  <form className="estrellasOutR">
                      <p className="clasificacion">
                        {(() => {
                          if(resena.estrellas >= 5){
                            return(
                              <><input id="radio1" type="radio" className="estrellasOutR" value="5"/>
                              <label className="estIndividual" htmlFor="radio1">★</label></>
                            )
                          }
                        })()}
                        {(() => {
                          if(resena.estrellas >= 4){
                            return(
                              <><input id="radio2" type="radio" className="estrellasOutR" value="4"/>
                              <label className="estIndividual" htmlFor="radio2">★</label></>
                            )
                          }
                        })()}
                        {(() => {
                          if(resena.estrellas >= 3){
                            return(
                              <><input id="radio3" type="radio" className="estrellasOutR" value="3"/>
                              <label className="estIndividual" htmlFor="radio3">★</label></>
                            )
                          }
                        })()}
                        {(() => {
                          if(resena.estrellas >= 2){
                            return(
                              <><input id="radio4" type="radio" className="estrellasOutR" value="2"/>
                              <label className="estIndividual" htmlFor="radio4">★</label></>
                            )
                          }
                        })()}
                        <input id="radio5" type="radio" className="estrellasOutR" value="1"/>
                        <label className="estIndividual" htmlFor="radio5">★</label>
                      </p>
                    </form>
                </div>
              )
            })}

            </div>
        </div>
    </div>
    )
}

export default PerfilResenasPage