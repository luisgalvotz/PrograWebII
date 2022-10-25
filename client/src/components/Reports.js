import React, { Component } from 'react'
import {Link} from 'react-router-dom'
/*
import markUwu from '../img/markUwu.jpg'
*/
import mujerPosando from '../img/mujerPosando.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Styles/Reportes.css'

export default class Reports extends Component {

    render() {

    return (

    <div className= "container-perfil">
        <div className="reporte-filtrado row">
            <Form>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" className="formRadios" column sm={2}>
                            ELIGE TU REPORTE
                        </Form.Label>
                        <Col sm={1}>
                            <Form.Check
                            type="radio"
                            label="Ventas"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                        </Col>
                        <Col sm={1}>
                            <Form.Check
                            type="radio"
                            label="Top Usuarios Ventas"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                        </Col>
                        <Col sm={2}>
                            <Form.Check
                            type="radio"
                            label="Top Usuarios Intercambios"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                        </Col>
                        <Col sm={1}>
                            <Form.Check
                            type="radio"
                            label="Etiquetas"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            />
                        </Col>
                        <Col sm={2}>
                            <Form.Check
                            type="radio"
                            label="Comentarios"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            />
                        </Col>
                        <Col sm={2}>
                            <Form.Check
                            type="radio"
                            label="Mejores reseñas"
                            className="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            />
                        </Col>
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
                            <Button type="submit">Generar</Button>
                        </Col>
                    </Form.Group>
                </fieldset>
            </Form>
            </div>
            <div className= "reporte-listo row" >
                <h2 className= "reporte-nombre">Reporte Ventas</h2>
                <div className="reporte-name col-sm-3">
                    <h3 className= "info-v">Usuario</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">Pam</p>
                        <p className= "datos-reporte">Astrid</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-3">
                    <h3 className= "info-v">Venta</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">Playera</p>
                        <p className= "datos-reporte">Disco</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-3">
                    <h3 className= "info-v">Desde</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">fecha uno</p>
                        <p className= "datos-reporte">fecha uno</p>
                    </div>
                </div>
                <div className="reporte-name col-sm-3">
                    <h3 className= "info-v">Hasta</h3>
                    <div className= "datos row" >
                        <p className= "datos-reporte">fecha dos</p>
                        <p className= "datos-reporte">fecha dos</p>
                    </div>
                </div>
            </div>

        
    </div>
        )
    }
}