import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
/*
import markUwu from '../img/markUwu.jpg'
import taylor2 from '../img/taylor2.png'
import taylor1 from '../img/taylor1.jpg'
*/
import abriendocaja from '../img/abriendocaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Styles/Login.css'


export default class Register extends Component {

    render() {

    return (

    <div className= "container-login">
        <div className= "row" >
            <div className="img-izq col-sm-8">
            <p className= "texto-sobreimagen">Registrate a TRUE FAN</p>
                <img className= "img_login_large img-fluid" src={abriendocaja} alt="Personas abriendo una caja"/>
            </div>
            <div className="sesion-login col-sm-4">
                <img className= "img_login" src={truefanlogo} alt="Logo TrueFan"/>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className= "input-login" type="text" placeholder="USERNAME" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className= "input-login" type="email" placeholder="EMAIL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className= "input-login" type="password" placeholder="PASSWORD" />
                    </Form.Group>
                    <Button className= "btn-login" type="submit">
                    REGISTER
                    </Button>
                    </Form>

            </div>
        </div>
    </div>
        )
    }
}