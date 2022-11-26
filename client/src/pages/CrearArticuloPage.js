
import {Link} from 'react-router-dom'

import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import {articulo_crear, articuloVenta_agregar, articuloIntercambio_agregar} from '../services/ArticuloService';
import { usuario_getByEmail } from '../services/UsuarioService';
import { etiquetas_crear, etiquetas_ver } from '../services/EtiquetasService';
import './Styles/CrearArticulo.css'


const CrearArticuloPage =()=>{

    const [etiquetas, setEtiquetas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await etiquetas_ver();
            setEtiquetas(res); 
        }
    fetchData();
    }, [])

    const handleOpc = (event) => {
        var opc = event.target.value;

        var cuadroVenta = document.getElementById('cuadroVenta');
        var cuadroInter = document.getElementById('cuadroInter');

        if (opc == "1") {
            cuadroVenta.style.display = '';
            cuadroInter.style.display = 'none';
        }
        else if (opc == "2") {
            cuadroVenta.style.display = 'none';
            cuadroInter.style.display = '';
        }
    };

    const [etqNueva, setEtqNueva] = useState({
        nombre: ''
    });

    const handleChangeEtq = (event) => {
        setEtqNueva({
            ...etqNueva,
            [event.target.name] : event.target.value
        })
    };

    const enviarEtqNueva = async (event) => {
        event.preventDefault();
        const res = await etiquetas_crear(etqNueva);

        var comboV = document.querySelector('#etiquetasV');
        var nuevaV = document.createElement('option');
        nuevaV.text = `#${res.data.nombre}`;
        nuevaV.value = res.data._id;
        comboV.options.add(nuevaV);
        var inputVenta = document.getElementById('inputVenta');
        inputVenta.value = '';

        var comboI = document.querySelector('#etiquetasI');
        var nuevaI = document.createElement('option');
        nuevaI.text = `#${res.data.nombre}`;
        nuevaI.value = res.data._id;
        comboI.options.add(nuevaI);
        var inputInter = document.getElementById('inputInter');
        inputInter.value = '';
    };

    const [datos,setDatos] = useState ( {
        id_articulo: '',
        titulo: '',
        precio: '',
        sugerencias: '',
        descripcion: '',
        notas: '',
        imagenes: '',
        etiquetas: '',
        id_usuario: '',
        tipo: ''
    });

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
        console.log(art)
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
        <Form.Select className= "sel-etiqueta" aria-label="Default select example" onChange={handleOpc}>
            <option value="1">Publicar artículo en forma de venta</option>
            <option value="2">Publicar artículo en forma de intercambio</option>
        </Form.Select>
    </div>

    <div className= "row">

        <div className="publicar-venta col-sm-12" id="cuadroVenta">
        <h2 className="texto-ph2">Venta de tu artículo</h2>
        <Form enctype="multipart/form-data" onSubmit={enviarDatosVenta}>
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
            <Form.Select className= "sel-etiqueta" aria-label="Default select example" id="etiquetasV" name="etiquetas" onChange={handleChange}>
                <option value="null">-- Selecciona una etiqueta --</option>
                {etiquetas.map((etiqueta) => {
                    return (
                        <option value={etiqueta._id}>#{etiqueta.nombre}</option>
                    )
                })}
            </Form.Select>

            <FloatingLabel  label="Ingresa tu etiqueta si no existe" className="mb-3">
                <Form.Control type="text" placeholder="Título" id="inputVenta" name="nombre" onChange={handleChangeEtq}/>
            </FloatingLabel>
            <Button className= "btn-publicar" type="button" onClick={enviarEtqNueva}>
                Ingresar Etiqueta
            </Button>

            <Form.Group className="mb-3">
                <p className="texto-p">Ingresa las fotos de tu artículo</p>
                <Form.Control type="file" name="imagenes" id="inputImg" onChange={handleChange}/>
            </Form.Group>

            <Button className= "btn-publicar" type="submit">
                Publicar
            </Button>
        </Form>
        </div>

        <div className="publicar-inter col-sm-12" id="cuadroInter" style={{display: 'none'}}>
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
            <Form.Select className= "sel-etiqueta" aria-label="Default select example" onChange={handleChange} id="etiquetasI" name="etiquetas">
                <option value="null">-- Selecciona una etiqueta --</option>
                {etiquetas.map((etiqueta) => {
                    return (
                        <option value={etiqueta._id}>#{etiqueta.nombre}</option>
                    )
                })}
            </Form.Select>

            <FloatingLabel  label="Ingresa tu etiqueta si no existe" className="mb-3">
                <Form.Control type="text" placeholder="Título" id="inputInter" name="nombre" onChange={handleChangeEtq}/>
            </FloatingLabel>
            <Button className= "btn-publicar" type="button" onClick={enviarEtqNueva}>
                Ingresar Etiqueta
            </Button>

            <Form.Group className="mb-3">
                <p className="texto-p">Ingresa las fotos de tu artículo</p>
                <input class="form-control" type="file" onChange={handleChange} id="input-img" name="imagenes"/>
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