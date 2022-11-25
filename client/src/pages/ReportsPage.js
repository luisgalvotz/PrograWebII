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
import {articuloVenta_reporte, articuloIntercambio_reporte, comentarios_reporte,
    etiquetas_reporte, resenas_reporte,likes_reporte} from '../services/ReportesService';
import './Styles/Reportes.css'

const ReportsPage =()=>{
    const [ventas, setVentas] = useState([]);
    const [intercambios, setIntercambios] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    
    const [etiquetas, setEtiquetas] = useState([]);
    const [resenas, setResenas] = useState([]);
    const [likes, setLikes] = useState([]);

    var meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    useEffect(() => {
        
        async function fetchData() {
            const res = await articuloVenta_reporte();
            setVentas(res); 
            const res2 = await articuloIntercambio_reporte();
            setIntercambios(res2); 
            const res3 = await comentarios_reporte();
            setComentarios(res3); 
            const res4 = await etiquetas_reporte();
            setEtiquetas(res4);
            const res5 = await resenas_reporte();
            setResenas(res5);
            const res6 = await likes_reporte();
            setLikes(res6);
        }
    fetchData();
    }, [])

    const handleOpc = (event) => {
        var opc = event;
        
        var cuadroVentas = document.getElementById('repVentas');
        var cuadroInters = document.getElementById('repInters');
        var cuadroEtiquetas = document.getElementById('repEtiquetas');
        var cuadroComents = document.getElementById('repComents');
        var cuadroResenas = document.getElementById('repResenas');
        var cuadroLikes = document.getElementById('repLikes');
        
        switch(opc) {
            case 1:
                cuadroVentas.style.display = '';
                cuadroInters.style.display = 'none';
                cuadroEtiquetas.style.display = 'none';
                cuadroComents.style.display = 'none';
                cuadroResenas.style.display = 'none';
                cuadroLikes.style.display = 'none';
                break;
            case 2:
                cuadroVentas.style.display = 'none';
                cuadroInters.style.display = '';
                cuadroEtiquetas.style.display = 'none';
                cuadroComents.style.display = 'none';
                cuadroResenas.style.display = 'none';
                cuadroLikes.style.display = 'none';
                break;
            case 3:
                cuadroVentas.style.display = 'none';
                cuadroInters.style.display = 'none';
                cuadroEtiquetas.style.display = '';
                cuadroComents.style.display = 'none';
                cuadroResenas.style.display = 'none';
                cuadroLikes.style.display = 'none';
                break;
            case 4:
                cuadroVentas.style.display = 'none';
                cuadroInters.style.display = 'none';
                cuadroEtiquetas.style.display = 'none';
                cuadroComents.style.display = '';
                cuadroResenas.style.display = 'none';
                cuadroLikes.style.display = 'none';
                break;
            case 5:
                cuadroVentas.style.display = 'none';
                cuadroInters.style.display = 'none';
                cuadroEtiquetas.style.display = 'none';
                cuadroComents.style.display = 'none';
                cuadroResenas.style.display = '';
                cuadroLikes.style.display = 'none';
                break;
            case 6:
                cuadroVentas.style.display = 'none';
                cuadroInters.style.display = 'none';
                cuadroEtiquetas.style.display = 'none';
                cuadroComents.style.display = 'none';
                cuadroResenas.style.display = 'none';
                cuadroLikes.style.display = '';
                break;  
        }
    };

    return(
        <div className= "container-perfil">
        <div className="reporte-filtrado row">
            <Form>
                <fieldset>
                    <Form.Group as={Row} className="eleccionrep mb-3">
                        <Form.Label as="legend" className="formRadios-rep">
                            ELIGE TU REPORTE
                        </Form.Label>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleOpc}>
                            <ToggleButton className="btn-rep" id="tbg-radio-1" value={1}>
                                Ventas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-3" value={2}>
                                Intercambios
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-4" value={3}>
                                Etiquetas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-5" value={4}>
                                Comentarios
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-6" value={5}>
                                Reseñas
                            </ToggleButton>
                            <ToggleButton className="btn-rep" id="tbg-radio-7" value={6}>
                                Likes
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Group>
                </fieldset>
                {/* <fieldset>
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
                </fieldset> */}
            </Form>
            </div>


            <div className= "reporte-listo row" id="repVentas">
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
                        
                        <p className= "datos-reporte">{meses[venta._id.month]}</p>
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


            <div className= "reporte-listo row" id="repInters" style={{display: 'none'}}>
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
                        <p className= "datos-reporte">{meses[intercambio._id.month]}</p>
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


            <div className= "reporte-listo row" id="repEtiquetas" style={{display: 'none'}}>
                <h2 className= "reporte-nombre">Reporte Etiquetas</h2>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Etiqueta</h3>
                    {etiquetas.map((etiqueta) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{etiqueta.etiqueta[0].nombre}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Uso</h3>
                    {etiquetas.map((etiqueta) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{etiqueta.cantidad}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className= "reporte-listo row" id="repComents" style={{display: 'none'}}>
                <h2 className= "reporte-nombre">Reporte Comentarios</h2>
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
                        <p className= "datos-reporte">{meses[comentario._id.month]}</p>
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


            <div className= "reporte-listo row" id="repResenas" style={{display: 'none'}}>
                <h2 className= "reporte-nombre">Reporte Reseñas</h2>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Usuario</h3>
                    {resenas.map((resena) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{resena.usuario[0].nombre}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Cantidad</h3>
                    {resenas.map((resena) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{resena.cantidad}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="reporte-name col-sm-4">
                    <h3 className= "info-v">Promedio</h3>
                    {resenas.map((resena) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{resena.promedio}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className= "reporte-listo row" id="repLikes" style={{display: 'none'}}>
                <h2 className= "reporte-nombre">Reporte Likes</h2>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Artículo</h3>
                    {likes.map((like) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{like.articulo[0].titulo}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="reporte-name col-sm-6">
                    <h3 className= "info-v">Likes</h3>
                    {likes.map((like) => {
                        return(
                            <div className= "datos row" >
                                <p className= "datos-reporte">{like.cantidad}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
    </div>
    )
}

export default ReportsPage