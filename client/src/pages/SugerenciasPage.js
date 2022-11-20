import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import mujerPosando from '../img/mujerPosando.jpg'
import './Styles/Sugerencia.css'

import { useEffect, useState } from "react";
import {comentarios_ver,comentarios_revisar} from '../services/ComentariosService';

const SugerenciasPage =()=>{

    const [sugerencias, setSugerencias] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await comentarios_ver();
            setSugerencias(res.data); 
        }
    fetchData();
    }, [])


    return(
        <div className= "container-sug">
        <h2 className= "texto-sug-t">Sugerencias de los usuarios hacia TrueFan</h2>
        <div className= "container-seleccion ">
            <Form.Select className= "sel-op" aria-label="Default select example" >
                <option value="1">Sugerencias pendientes</option>
                <option value="2">Sugerencias revisadas</option>
            </Form.Select>
        </div>
        <div className= "container-com">
            <h2 className= "texto-sug-t">Sugerencias pendientes</h2>
            <div className= "cardsug row" >
                <div className="comentario-usuario col-sm-2">
                    <img className= "img_com img-fluid" src={mujerPosando} alt="Usuario"/>
                </div>
                <div className="comentario-usuario col-sm-10">
                    <p className= "texto-sug-date" >24/10/2022</p>
                    <p className= "texto-sug">Nombre usuario</p>
                    <p className= "texto-sug">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    <Button className= "btn-Revisado" type="Submit">
                        Revisar Sugerencia
                    </Button>
                </div>
            </div>
            <div className= "cardsug row" >
                <div className="comentario-usuario col-sm-2">
                    <img className= "img_com img-fluid" src={mujerPosando} alt="Usuario"/>
                </div>
                <div className="comentario-usuario col-sm-10">
                    <p className= "texto-sug-date">24/10/2022</p>
                    <p className= "texto-sug">Nombre usuario</p>
                    <p className= "texto-sug">Esta es una sugerencia que ya fue revisada, se cambia el boton de revisar sugerencia a sugerencia revisada.</p>
                    <p className= "texto-sug-rev">Sugerencia Revisada</p>
                </div>
            </div>
            <div className= " cardsug row" >
                <div className="comentario-usuario col-sm-2">
                    <img className= "img_com img-fluid" src={mujerPosando} alt="Usuario"/>
                </div>
                <div className="comentario-usuario col-sm-10">
                    <p className= "texto-sug-date">24/10/2022</p>
                    <p className= "texto-sug">Nombre usuario</p>
                    <p className= "texto-sug">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    <Button className= "btn-Revisado" type="Submit">
                    Revisar Sugerencia
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SugerenciasPage