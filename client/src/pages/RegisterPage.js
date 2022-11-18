import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import abriendocajita from '../img/abriendocajita.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './Styles/Login.css'

const RegisterPage =()=>{
    return(
        <div className= "container-login">
        <div className= "row" >
            <div className="img-izq col-sm-8">
                <img className= "img_login_large img-fluid" src={abriendocajita} alt="Personas abriendo una caja"/>
            </div>
            <div className="sesion-login col-sm-4">
                <img className= "img_login" src={truefanlogo} alt="Logo TrueFan"/>
                    <Form className="inicio">
                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <FloatingLabel  label="Nombre completo" className="mb-3">
                        <Form.Control type="text" placeholder="nombre" />
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <FloatingLabel  label="Teléfono" className="mb-3">
                        <Form.Control type="number" placeholder="telefono" />
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-perfil" type="date" max="2004-12-31" min="1940-12-31"placeholder="CUMPLEAÑOS" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel  label="Email" className="mb-3">
                        <Form.Control type="Email" placeholder="email" />
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel  label="Contraseña" className="mb-3">
                        <Form.Control type="password" placeholder="password" />
                    </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="btn-perfil3 mb-3">
                        <Form.Label className= "user-perfil">Subir foto de perfil</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Link className="linkbotones" to="/Dashboard">
                    <Button className= "btn-login" type="submit">
                    REGISTER
                    </Button>
                    </Link>
                    </Form>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage