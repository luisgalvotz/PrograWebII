import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
/*
import markUwu from '../img/markUwu.jpg'
import taylor2 from '../img/taylor2.png'
import taylor1 from '../img/taylor1.jpg'
*/
import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Styles/Login.css'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

import { useEffect } from "react";
import { usuario_crear, usuario_getByEmail } from '../services/UsuarioService';

const LoginPage =()=>{

    const { user, getAccessTokenSilently } = useAuth0();

    const usuario = ({ nombre: '', email: '' })
    useEffect(() => {
        async function fetchData() {
            const token = await getAccessTokenSilently();
            const us = await usuario_getByEmail(user.email, token);
            if (!us) {
                usuario.nombre = user.nickname;
                usuario.email = user.email;
                const res = await usuario_crear(usuario, token);
            }
            window.location.href = "http://localhost:3000";
        }
    fetchData();
    }, [])

    return(
        <div className= "container-login">
        <div className= "row" >
            <div className="img-izq col-sm-8">
                <img className= "img_login_large img-fluid" src={logincaja} alt="Personas abriendo una caja"/>
                <p className= "sobreimagen">¡Encuentra tu mercancía favorita de tus artistas favoritos en un solo lugar!</p>
            </div>
            <div className="sesion-login col-sm-4">
                <img className= "img_login" src={truefanlogo} alt="Logo TrueFan"/>
                    <Form className="inicio">
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
                    <Link className="linkbotones" to="/Dashboard">
                    <Button className= "btn-login" type="submit">
                    LOGIN
                    </Button>
                    </Link>
                    </Form>

                    <p className= "info-login">DON'T HAVE AN ACCOUNT YET?</p>
                    <Link className="registro-login" to="/Register">
                    <p href="#action1" className= "create-login">CREATE AN ACCOUNT</p>
                    </Link>
            </div>
        </div>
    </div>
    )
}

//export default LoginPage
export default withAuthenticationRequired(LoginPage, {
    onRedirecting: () => <Loading/>,
});