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
import heart from "../img/heart.png";
import './Styles/Perfil.css'


export default class PerfilResenas extends Component {

    render() {

    return (

    <div className= "container-perfil">
        <div className= "row" >
            <div className="img-izqperfil col-sm-4">
            <img className= "img_perfil img-fluid" src={mujerPosando} alt="Usuario"/>
            <p className= "rating-perfil">RATING</p>
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
                    <p className= "user-perfil">Aqui va toda la info</p>
            </div>
        </div>
    </div>
        )
    }
}