import React, { Component } from "react";
import "./Styles/Etiquetas.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import {etiquetas_ver} from '../services/EtiquetasService';

const ListaEtiquetasPage =()=>{

  const [etiquetas, setEtiquetas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await etiquetas_ver();
            setEtiquetas(res); 
        }
    fetchData();
    }, [])

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
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>
            )
        })}

          </div>
        </div>
      </div> 
    )
}

export default ListaEtiquetasPage