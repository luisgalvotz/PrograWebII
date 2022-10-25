import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
/*
import markUwu from '../img/markUwu.jpg'
import taylor2 from '../img/taylor2.png'
import taylor1 from '../img/taylor1.jpg'
*/
import mujerPosando from '../img/mujerPosando.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Styles/Perfil.css'


export default class Perfil extends Component {

    render() {

    return (

    <div className= "container-perfil">
        <div className= "row" >
            <div className="img-izqperfil col-sm-4">
            <img className= "img_perfil img-fluid" src={mujerPosando} alt="Usuario"/>
            <p className= "rating-perfil">RATING</p>
            <p className= "rating-perfil">*****</p>
            <Form.Group className="btn-perfil mb-3">
                    <Form.Label className= "user-perfil">Editar foto de perfil</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            <Button className= "btn-perfil" type="submit">
            Eliminar
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
                    <div className="juntar-perfil row">
                        <div className="juntar-perfil col-sm-6">
                            <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Control className= "input-perfil" type="text" placeholder="DIRECCION" />
                            </Form.Group>
                        </div>
                        <div className="juntar-perfil col-sm-6">
                            <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Control className= "input-perfil" type="number" size="5" placeholder="C.P" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="juntar-perfil row">
                        <div className="juntar-perfil col-sm-4">
                            <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Control className= "input-perfil" type="text" placeholder="ESTADO" />
                            </Form.Group>
                        </div>
                        <div className="juntar-perfil col-sm-4">
                            <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Control className= "input-perfil" type="text" placeholder="CIUDAD" />
                            </Form.Group>
                        </div>
                        <div className="juntar-perfil col-sm-4">
                            <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Control className= "input-perfil" type="text" placeholder="PAIS" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="text" placeholder="EMAIL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="date" max="2004-12-31" min="1940-12-31"placeholder="CUMPLEAÑOS" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="text" placeholder="GENERO" />
                    </Form.Group>

                    <Button className= "btn-perfil-editar " type="Submit">
                    Guardar
                    </Button>
                    </Form>

                    
            </div>
        </div>
    </div>
        )
    }
}