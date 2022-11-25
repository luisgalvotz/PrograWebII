import React, { Component } from "react";
import "./Styles/Etiquetas.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import { useEffect, useState } from "react";
import { etiquetas_ver, etiquetas_eliminar } from '../services/EtiquetasService';

const ListaEtiquetasPage =()=>{

  const [etiquetas, setEtiquetas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await etiquetas_ver();
            setEtiquetas(res); 
        }
    fetchData();
    }, [])

    const [datos, setDatos] = useState({
      _id: ''
    });

    const handleChange = (event) => {
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    };

    const enviarDatos = async (event) => {
      event.preventDefault();
      const res = await etiquetas_eliminar(datos);
      window.location.href = "http://localhost:3000/ListaEtiquetas";
    };

    return(
        <div className="main-wrapperFour">
        <div className="pEtiquetasContainer">
          <h3 className="tituloListaEtiquetas">
            Estas son las etiquetas existentes:
          </h3>
          <div className="pEtiquetas-div quitarBackgroundProductoAdquirido">
          {etiquetas.map((etiqueta) => {
            return (
              <div className="contendorCAS3">
                <h5 className="letraFooter alinearIzquier">{etiqueta.nombre}</h5>
                <Form onSubmit={enviarDatos}>
                  <Button className="btnProdResena3" variant="dark" type="Submit" value={etiqueta._id} name="_id" id="_id" onClick={handleChange}>
                    Eliminar etiqueta
                  </Button> 
                </Form>
              </div>
            )
          })}

          </div>
        </div>
      </div> 
    )
}

export default ListaEtiquetasPage