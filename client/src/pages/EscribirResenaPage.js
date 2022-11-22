
import "./Styles/ProductosAdquridos.css";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

//PARA DAR DE BAJA EL ARTICULO POR SER COMPRADO Y ENVIAR TAMBIEN UN COMENTARIO AL PERFIL DE USUARIO
import React, { useState } from "react";
import {articulo_baja,articuloVenta_getById} from '../services/ArticuloService';
import {resenas_crear} from '../services/RenenasService';

const EscribirResenaPage =()=>{
  let {id} = useParams();
  const [datos,setDatos] = useState ( {
    contenido: '',
    estrellas: 0,
    id_vendedor: '',
    id_usuario: '',
    id_articulo : id
  })

  

  const handleChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
  };

  const enviarDatos = async (event) =>{
    event.preventDefault();
    
  
     //SACAR ID DEL VENDEDOR DEL ARTICULO
     const us = await articuloVenta_getById (id);
    //DAR DE BAJA ARTICULO POR HABERLO COMPRADO
    const art = await articulo_baja(datos); //YA LO DA DE BAJA
    //ENVIAR UNA RESEÑA PARA EL USUARIO 
    datos.id_vendedor = us.id_articulo.id_usuario;
    datos.id_usuario = '6328ad04cbbbf05941a81c58';
    const art2 = await resenas_crear(datos); //YA LO DA DE BAJA

  }



    return(
        <div className="main-wrapperThree">
        <div className="productosAdquiridosContainer">
          <div className="productAdquirid-div quitarBackgroundProductoAdquirido">
          <h3 className="tituloListaAdquiridos">
          Escriba una reseña del usuario
          </h3>  <br></br>  <br></br>
          <Form onSubmit={enviarDatos}>
            <div className="contendorCAS2">
              <InputGroup>
                <Form.Control className="inputArticuloSugeridoTexto" as="textarea" placeholder="Yo pienso que..." aria-label="With textarea" name="contenido" onChange={handleChange}/>
              </InputGroup>
              <br></br>
              <h5 className="letraFooter alinearIzquier">¿Cómo calificaría al usuario?</h5>
                <p className="clasificacion" >
                  <input enabled id="radio1" type="radio" className="estrellasInput"value="5" onChange={handleChange} name = "estrellas"/>
                  <label className="labelEstrella" htmlFor="radio1">★</label>
                  <input enabled id="radio2" type="radio" className="estrellasInput" value="4" onChange={handleChange} name = "estrellas"/>
                  <label className="labelEstrella" htmlFor="radio2">★</label>
                  <input enabled id="radio3" type="radio" className="estrellasInput" value="3" onChange={handleChange} name = "estrellas"/>
                  <label className="labelEstrella" htmlFor="radio3">★</label>
                  <input enabled id="radio4" type="radio" className="estrellasInput" value="2" onChange={handleChange} name = "estrellas"/>
                  <label className="labelEstrella" htmlFor="radio4">★</label>
                  <input enabled id="radio5" type="radio" className="estrellasInput" value="1" onChange={handleChange} name = "estrellas"/>
                  <label className="labelEstrella" htmlFor="radio5">★</label>
                </p>
              
              <Button className="btnConfirmarResena" variant="dark" type="submit">Enviar reseña</Button>
              
            </div>
            </Form>


          </div>
        </div>
      </div>  
    )
}

export default EscribirResenaPage