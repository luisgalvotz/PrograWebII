import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";
import mujerPosando from '../img/mujerPosando.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import heart from "../img/heart.png";
import './Styles/Perfil.css'

import { useEffect, useState } from "react";
import {usuario_getById,usuario_actualizar,usuario_baja} from '../services/UsuarioService';

const PerfilPage =()=>{

  //let {id} = useParams();
  const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const usua = '6328acf2cbbbf05941a81c56';
            const res = await usuario_getById(usua);
            setUsuario(res); 
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
            <Form.Group className="btn-perfil mb-3">
                    <Form.Label className= "user-perfil">Editar foto de perfil</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            <Button className= "btn-perfil" type="submit">
            Eliminar Cuenta
            </Button>
            </div>
            <div className="sesion-perfil col-sm-8">
                    <p className= "user-perfil">USUARIO</p>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="text" placeholder="NOMBRE COMPLETO" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="number" size="8" placeholder="TELEFONO" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="text" placeholder="EMAIL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="date" max="2004-12-31" min="1940-12-31"placeholder="CUMPLEAÑOS" />
                    </Form.Group>
                    <Link className="registro-login" to="/Perfil">
                    <Button className= "btn-perfil-editar " type="Submit">
                    Guardar
                    </Button>
                    </Link>
                    </Form>

            </div>
        </div>
    </div>   
    )
}

export default PerfilPage