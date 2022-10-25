import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import './Styles/CrearArticulo.css'


export default class CrearArticulo extends Component {

    render() {

    return (

    <div className= "container-publicar">
        <div className= "row" >
            <div className="publicar-fotos col-sm-6">
            <p className="texto-p">Ingresa las fotos de tu artículo</p>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 1 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 2 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 3 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 4 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 5 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Selecciona la foto 6 de tu artículo</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </div>
            <div className="publicar-info col-sm-6">
            <p className="texto-p">Artículo a publicar</p>
            <Form>
                <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                    <Form.Control type="text" placeholder="Título" />
                </FloatingLabel>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                        <FloatingLabel  label="Ingrese el precio del artículo" className="mb-3">
                            <Form.Control type="number" placeholder="Number" />
                        </FloatingLabel>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                    <Form.Control as="textarea" placeholder="Descripción" />
                </FloatingLabel>
                <FloatingLabel  label="Ingrese notas del artículo" className="mb-3">
                    <Form.Control as="textarea" placeholder="Notas" />
                </FloatingLabel>

                <div className="intercambio-info">
                    <p className="texto-p">Agregar artículo a sugerir para intercambio +</p>
                    <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                        <Form.Control type="text" placeholder="Título" />
                    </FloatingLabel>
                    <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                        <Form.Control as="textarea" placeholder="Descripción" />
                    </FloatingLabel>
                    <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                        <FloatingLabel  label="Ingrese el precio del artículo" className="mb-3">
                            <Form.Control type="number" placeholder="Number" />
                        </FloatingLabel>
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <Form.Group className="mb-3">
                        <Form.Label>Ingresa la foto del artículo querido</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Button className= "btn-publicar" type="submit">
                    Publicar
                    </Button>
                </div>
            </Form>
            </div>
            
        </div>
    </div>
        )
    }
}