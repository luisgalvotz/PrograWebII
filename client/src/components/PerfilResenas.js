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
import markUwu from "../img/markUwu.jpg";
import './Styles/Perfil.css'


export default class PerfilResenas extends Component {

    render() {

    return (

    <div className= "container-perfil">
        <div className= "row" >
            <div className="img-izqperfil col-sm-4">
            <img className= "img_perfil img-fluid" src={mujerPosando} alt="Usuario"/>
            <p className= "rating-perfil">Nombre Del Usuario</p>
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
            <p className= "user-perfil">Reseñas:</p>

            <div className="contendorCAS2">
            <Link className="linkNavBar" to="/PerfilResenas">
            <img className="imgResena" src={markUwu} alt="Imagen"/>
              </Link>
              <h5 className="letraFooter alinearIzquier whiteTe">Juancho Barbosa Fuentes</h5>
              <p className="notaListaProductoAdquirido whiteTe">Es buena persona, es bonita y me gusta mucho, yo creo que estamos hechos el 
              uno para el otro, no cabe duda alguna de que nosotros dos debemos ser almas gemelas separadas que deben estar unidas, y 
              su producto estaba en buen estado, pero no tanto como su radiante belleza, estar contigo es un sueño, el cual planeo hacer 
              realidad, de verdad hare lo que sea posible e imposible por estar a tu lado.</p><br></br>

              <h6 className="letraFooter alinearIzquier whiteTe">Calificación :</h6>
              <form className="estrellasOutR">
                  <p className="clasificacion">
                    <input id="radio1" type="radio" className="estrellasOutR" value="5"/>
                    <label className="estIndividual" htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" className="estrellasOutR" value="4"/>
                    <label className="estIndividual" htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" className="estrellasOutR" value="3"/>
                    <label className="estIndividual" htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" className="estrellasOutR" value="2"/>
                    <label className="estIndividual" htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" className="estrellasOutR" value="1"/>
                    <label className="estIndividual" htmlFor="radio5">★</label>
                  </p>
                </form>
            </div>            
            <div className="contendorCAS2">
            <Link className="linkNavBar" to="/PerfilResenas">
            <img className="imgResena" src={markUwu} alt="Imagen"/>
              </Link>              <h5 className="letraFooter alinearIzquier whiteTe">Juancho Barbosa Fuentes 2</h5>
              <p className="notaListaProductoAdquirido whiteTe">Excelente atención...</p><br></br>

              <h6 className="letraFooter alinearIzquier whiteTe">Calificación :</h6>
              <form className="estrellasOutR">
                  <p className="clasificacion">
                    <input id="radio1" type="radio" className="estrellasOutR" value="5"/>
                    <label className="estIndividual" htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" className="estrellasOutR" value="4"/>
                    <label className="estIndividual" htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" className="estrellasOutR" value="3"/>
                    <label className="estIndividual" htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" className="estrellasOutR" value="2"/>
                    <label className="estIndividual" htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" className="estrellasOutR" value="1"/>
                    <label className="estIndividual" htmlFor="radio5">★</label>
                  </p>
                </form>
            </div> 
            </div>
        </div>
    </div>
        )
    }
}