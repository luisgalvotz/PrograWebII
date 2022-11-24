import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import mujerPosando from '../img/mujerPosando.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import { useEffect, useState } from "react";
import {articuloVenta_reporte,articuloIntercambio_reporte,comentarios_reporte,
    etiquetas_reporte,resenas_reporte,likes_reporte} from '../services/ReportesService';
import './Styles/Reportes.css'

const ReportsPage =()=>{
    const [ventas, setVentas] = useState([]);
    const [intercambios, setIntercambios] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    
    const [etiquetas, setEtiquetas] = useState([]);
    const [resenas, setResenas] = useState([]);
    const [likes, setLikes] = useState([]);

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    useEffect(() => {
        
        async function fetchData() {
            const res = await articuloVenta_reporte();
            setVentas(res); 
            const res2 = await articuloIntercambio_reporte();
            setIntercambios(res2); 
            const res3 = await comentarios_reporte();
            setComentarios(res3); 
        }
    fetchData();
    }, [])

    return(
        <div className= "container-perfil">
        <div className="reporte-filtrado row">
            <Form>
                <fieldset>
                    <Form.Group as={Row} className="eleccionrep mb-3">
                        <Form.Label as="legend" className="formRadios-rep">
                            ELIGE TU REPORTE
                        </Form.Label>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton className="btn-rep" id="tbg-radio-1" value={1}>
                                Ventas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-3" value={2}>
                                Intercambios
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-4" value={4}>
                                Etiquetas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-5" value={5}>
                                Comentarios
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-6" value={6}>
                                Mejores reseñas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-7" value={7}>
                                Mas Likes
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" className="formRadios" column sm={2}>
                            FILTRA LA FECHA
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Label as="legend" className="formRadios" column sm={2}>
                            Desde
                        </Form.Label>
                        </Col>
                        <Col sm={2}>
                        <Form.Control type="date" className="fechasreporte" placeholder="Enter email" />
                        </Col>
                        <Col sm={2}>
                        <Form.Label as="legend" className="formRadios" column sm={2}>
                            Hasta
                        </Form.Label>
                        </Col>
                        <Col sm={2}>
                        <Form.Control type="date" className="fechasreporte" placeholder="Enter email" />
                        </Col>
                        <Col sm={2}>
                            <Link className="registro-login" to="/Reports">
                                <Button type="submit">Generar</Button>
                            </Link>
                        </Col>
                    </Form.Group>
                </fieldset>
            </Form>
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Reporte Ventas</h2>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Cantidad</h3>
                    
                    <div className= "datos row" >
                    {ventas.map((venta) => {
            return (
                        <p className= "datos-reporte">{venta.cantidad}</p>
                        )
                    })}
                    </div>
                   

                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Mes</h3>
                    <div className= "datos row" >
                    {ventas.map((venta) => {
            return (
                        
                        <p className= "datos-reporte">{venta._id.month}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Año</h3>
                    <div className= "datos row" >
                    {ventas.map((venta) => {
            return (
                        <p className= "datos-reporte">{venta._id.year}</p>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Reporte Intercambios</h2>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Cantidad</h3>
                    <div className= "datos row" >
                    {intercambios.map((intercambio) => {
            return (
                        <p className= "datos-reporte">{intercambio.cantidad}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Mes</h3>
                    <div className= "datos row" >
                    {intercambios.map((intercambio) => {
            return (
                        <p className= "datos-reporte">{intercambio._id.month}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Año</h3>
                    <div className= "datos row" >
                    {intercambios.map((intercambio) => {
            return (
                    
                        <p className= "datos-reporte">{intercambio._id.year}</p>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Etiquetas</h2>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Etiqueta</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">Pam</p>
                        <p className= "datos-reporte">Astrid</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Uso</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">34 veces</p>
                        <p className= "datos-reporte">21 veces</p>
                    </div>
                </div>
               
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Comentarios</h2>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Cantidad</h3>
                    <div className= "datos row" >
                    {comentarios.map((comentario) => {
            return (
                        <p className= "datos-reporte">{comentario.cantidad}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Mes</h3>
                    <div className= "datos row" >
                    {comentarios.map((comentario) => {
            return (
                        <p className= "datos-reporte">{comentario._id.month}</p>
                        )
                    })}
                    </div>
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Año</h3>
                    <div className= "datos row" >
                    {comentarios.map((comentario) => {
            return (
                        <p className= "datos-reporte">{comentario._id.year}</p>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Mejores reseñas</h2>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Usuario</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">Pam</p>
                        <p className= "datos-reporte">Astrid</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Estrellas</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">5</p>
                        <p className= "datos-reporte">4</p>
                    </div>
                </div>
                
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Más likes</h2>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Artículo</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">Playera</p>
                        <p className= "datos-reporte">Gorra</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Likes</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">50</p>
                        <p className= "datos-reporte">45</p>
                    </div>
                </div>
                
            </div>
    </div>
    )
}

export default ReportsPage