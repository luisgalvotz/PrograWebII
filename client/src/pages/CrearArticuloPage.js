
import {Link} from 'react-router-dom'

import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import React, { useState } from "react";
import {articulo_crear} from '../services/ArticuloService';

import './Styles/CrearArticulo.css'


const CrearArticuloPage =()=>{
/*
    const articuloInit = {
        titulo: "",
        descripcion: "",
        notas: "",
        imagenes: [],
        etiquetas: []
      };

    const [articulo, setArticulo] = useState(articuloInit);
    const guardar = async (event) => {
    event.preventDefault();

    const res = await articulo_crear(articulo);
    console.log(res);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setArticulo({
      ...articulo,
      [name]: value,
    });
  };

*/
    return(
        
    <div className= "container-publicar">
    <div className= "container-titulo-publicaciones">
    <h2 className="texto-ph2">Publicaciones de tus artículos</h2>
    </div>
    <div className= "container-tipo">
        <Form.Select className= "sel-etiqueta" aria-label="Default select example" >
            <option value="1">Publicar artículo en forma de venta</option>
            <option value="2">Publicar artículo en forma de intercambio</option>
        </Form.Select>
    </div>
    <div className= "row" >
        <div className="publicar-venta col-sm-6">
        <h2 className="texto-ph2">Venta de tu artículo</h2>
        <Form >
            <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                <Form.Control type="text" placeholder="Título"  />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese el precio del artículo en pesos" className="mb-3">
                <Form.Control type="number" placeholder="Number"  />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Descripción"  />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese notas del artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Notas"  />
            </FloatingLabel>
            <p className="texto-p">Selecciona la etiqueta del artículo</p>
            <Form.Select className= "sel-etiqueta" aria-label="Default select example"  >
            <option value="1">#TaylorSwift</option>
            <option value="2">#HarryStyles</option>
            <option value="3">#OliviaRodrigo</option>
            <option value="4">#5SecondsOfSummer</option>
            </Form.Select>
            <FloatingLabel  label="Ingresa tu etiqueta si no existe" className="mb-3">
                <Form.Control type="text" placeholder="Título"  />
            </FloatingLabel>
            <Link className="registro-login" to="/CrearArticulo">
            <Button className= "btn-publicar" type="submit">
                Ingresar Etiqueta
            </Button>
            </Link>
            <Form.Group className="mb-3">
                <p className="texto-p">Ingresa las fotos de tu artículo</p>
                <Form.Control type="file" multiple  />
            </Form.Group>
            <Link className="registro-login" to="/CrearArticulo">
            <Button className= "btn-publicar" type="submit">
                Publicar
            </Button>
            </Link>
        </Form>
        </div>
        <div className="publicar-inter col-sm-6">
        <h2 className="texto-ph2">Intercambio de tu artículo</h2>
            <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                <Form.Control type="text" placeholder="Título" />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Descripción" />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese notas del artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Notas" />
            </FloatingLabel>
            <FloatingLabel  label="Ingrese el artículo que espera a cambio" className="mb-3">
                    <Form.Control type="text" placeholder="artículo" />
            </FloatingLabel>
                <p className="texto-p">Selecciona la etiqueta del artículo</p>
            <Form.Select className= "sel-etiqueta" aria-label="Default select example" >
                <option value="1">#TaylorSwift</option>
                <option value="2">#HarryStyles</option>
                <option value="3">#OliviaRodrigo</option>
                <option value="4">#5SecondsOfSummer</option>
            </Form.Select>
            <FloatingLabel  label="Ingresa tu etiqueta si no existe" className="mb-3">
                <Form.Control type="text" placeholder="Título" />
            </FloatingLabel>
            <Link className="registro-login" to="/CrearArticulo">
            <Button className= "btn-publicar" type="submit">
                Ingresar Etiqueta
            </Button>
            </Link>
            <Form.Group className="mb-3">
                <p className="texto-p">Ingresa las fotos de tu artículo</p>
                <Form.Control type="file" multiple/>
            </Form.Group>
            <Link className="registro-login" to="/CrearArticulo">
                <Button className= "btn-publicar" type="submit">
                    Publicar
                </Button>
            </Link>
        </div>
    </div>
</div>   
    )
}

export default CrearArticuloPage