
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
import {resenas_crear} from '../services/ResenasService';
import { useAuth0 } from "@auth0/auth0-react";
import { usuario_getByEmail } from '../services/UsuarioService';
import {oferta_getById,oferta_aceptar} from '../services/OfertasService';

const EscribirResena2Page =()=>{
  let {id} = useParams();
  const [datos,setDatos] = useState ( {
    contenido: '',
    estrellas: 0,
    id_vendedor: '',
    id_usuario: '',
    id_articulo : '',
    _id : ''
  })
  const { user, getAccessTokenSilently} = useAuth0();
  

  const handleChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
  };
  const [ofertas, setOfertas] = useState([]);
  const enviarDatos = async (event) =>{
    event.preventDefault();
    //SACAR QUIEN ES EL USUARIO EN ESTE CASO QUE HACE LA RESEÑA
    const token = await getAccessTokenSilently();
    const us2 = await usuario_getByEmail(user.email, token);
    datos.id_usuario = us2._id; //ESTE ES QUIEN HACE LA RESEÑA

        //AQUI SACARE EL ID DEL OFERTANTE 
        const res = await oferta_getById(id);
        datos.id_vendedor = res.id_ofertante;
        console.log(datos.id_vendedor)

        //ARTICULO QUE SE DARA DE BAJA
        datos._id =res.id_articulo;
        console.log (datos._id)

        //DAR DE BAJA LA OFERTA 
        await resenas_crear(datos) 
        await oferta_aceptar(res)
        window.location.href = "http://localhost:3000/AdministrarIntercambios";
        //YA LO DA DE BAJA

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

export default EscribirResena2Page