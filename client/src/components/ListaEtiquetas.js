import React, { Component } from "react";
import "./Styles/Etiquetas.css";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class ListaResena extends Component {
  render() {
    return (
      <div className="main-wrapperFour">
        <div className="pEtiquetasContainer">
          <h3 className="tituloListaEtiquetas">
            Estas son las etiquetas existentes:
          </h3>
          <div className="pEtiquetas-div quitarBackgroundProductoAdquirido">

          <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">TaylorSwift</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">TS</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">BTR</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">cool</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">5SOS</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">RS</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">arianaGrande</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

            <div className="contendorCAS3">
              <h5 className="letraFooter alinearIzquier">Juan</h5>
              <Button className="btnProdResena3" variant="dark">Eliminar etiqueta</Button>  
            </div>

          </div>
        </div>
      </div>
    );
  }
}