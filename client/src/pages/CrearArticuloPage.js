
import {Link} from 'react-router-dom'

import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import {articulo_crear, articuloVenta_agregar, articuloIntercambio_agregar} from '../services/ArticuloService';
import { usuario_getByEmail } from '../services/UsuarioService';
import './Styles/CrearArticulo.css'


const CrearArticuloPage =()=>{

const [datos,setDatos] = useState ( {
    id_articulo: '',
    titulo: '',
    precio: '',
    sugerencias: '',
    descripcion: '',
    notas: '',
    imagenes: [],
    etiquetas: [],
    id_usuario: '',
    tipo: ''
  })
  const { user, getAccessTokenSilently} = useAuth0();
 
  const handleChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
  };

  const enviarDatosVenta = async (event) =>{
    
    event.preventDefault();
    const token = await getAccessTokenSilently();
    const us = await usuario_getByEmail(user.email, token);
    datos.id_usuario = us._id;
    datos.tipo = "venta"
    const art = await articulo_crear(datos);
    datos.id_articulo = art.data._id;
    const artv = await articuloVenta_agregar(datos);
    window.location.href = `http://localhost:3000/DetalleProductoVenta/${artv.data.id_articulo}`;
  }

  const enviarDatosInter = async (event) =>{
    event.preventDefault();
    const token = await getAccessTokenSilently();
    const us = await usuario_getByEmail(user.email, token);
    datos.id_usuario = us._id;
    datos.tipo = "inter"
    const art = await articulo_crear(datos);
    datos.id_articulo = art.data._id;
    const artv = await articuloIntercambio_agregar(datos);
    window.location.href = `http://localhost:3000/DetalleProductoIntercambio/${artv.data.id_articulo}`;
  }

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
        <Form onSubmit={enviarDatosVenta}>
            <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                <Form.Control type="text" placeholder="Título" name="titulo" onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese el precio del artículo en pesos" className="mb-3">
                <Form.Control type="number" placeholder="Number" name="precio" onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Descripción" name="descripcion" onChange={handleChange}/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese notas del artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Notas"  name="notas" onChange={handleChange}/>
            </FloatingLabel>
            <p className="texto-p">Selecciona la etiqueta del artículo</p>
            <Form.Select className= "sel-etiqueta" aria-label="Default select example"  name="etiquetas" onChange={handleChange}>
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
                <Form.Control type="file" multiple  name="imagenes" onChange={handleChange}/>
            </Form.Group>
            <Button className= "btn-publicar" type="submit">
                Publicar
            </Button>
        </Form>
        
        </div>
        <div className="publicar-inter col-sm-6">
        <h2 className="texto-ph2">Intercambio de tu artículo</h2>
        <Form onSubmit={enviarDatosInter}>
            <FloatingLabel  label="Ingrese el título de artículo" className="mb-3">
                <Form.Control type="text" placeholder="Título" onChange={handleChange} name="titulo"/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese la descripción de artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Descripción" onChange={handleChange} name="descripcion"/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese notas del artículo" className="mb-3">
                <Form.Control as="textarea" placeholder="Notas" onChange={handleChange} name="notas"/>
            </FloatingLabel>
            <FloatingLabel  label="Ingrese el artículo que espera a cambio" className="mb-3">
                    <Form.Control type="text" placeholder="artículo" onChange={handleChange} name="sugerencias"/>
            </FloatingLabel>
                <p className="texto-p">Selecciona la etiqueta del artículo</p>
            <Form.Select className= "sel-etiqueta" aria-label="Default select example" onChange={handleChange} name="etiquetas">
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
                <Form.Control type="file" multiple onChange={handleChange} name="imagenes"/>
            </Form.Group>
            
                <Button className= "btn-publicar" type="submit">
                    Publicar
                </Button>
            
            </Form>

        </div>
    </div>
</div>   
    )
}

export default CrearArticuloPage