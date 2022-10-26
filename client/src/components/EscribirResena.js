import React, { Component } from "react";
import "./Styles/ProductosAdquridos.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default class EscribirResena extends Component {
  render() {
    return (
      <div className="main-wrapperThree">
        <div className="productosAdquiridosContainer">
          <div className="productAdquirid-div quitarBackgroundProductoAdquirido">
          <h3 className="tituloListaAdquiridos">
          Escriba una reseña del usuario
          </h3>  <br></br>  <br></br>
            <div className="contendorCAS2">
              
              <InputGroup>
                <Form.Control className="inputArticuloSugeridoTexto" as="textarea" placeholder="Yo pienso que..." aria-label="With textarea"/>
              </InputGroup>
              <br></br>
              <h5 className="letraFooter alinearIzquier">¿Cómo calificaría al usuario?</h5>
              <form className="estrellasInput">
                <p className="clasificacion">
                  <input enabled id="radio1" type="radio" className="estrellasInput"value="5"/>
                  <label className="labelEstrella" htmlFor="radio1">★</label>
                  <input enabled id="radio2" type="radio" className="estrellasInput" value="4"/>
                  <label className="labelEstrella" htmlFor="radio2">★</label>
                  <input enabled id="radio3" type="radio" className="estrellasInput" value="3"/>
                  <label className="labelEstrella" htmlFor="radio3">★</label>
                  <input enabled id="radio4" type="radio" className="estrellasInput" value="2"/>
                  <label className="labelEstrella" htmlFor="radio4">★</label>
                  <input enabled id="radio5" type="radio" className="estrellasInput" value="1"/>
                  <label className="labelEstrella" htmlFor="radio5">★</label>
                </p>
              </form>
              <Link className="linkNavBar" to="/">
              <Button className="btnConfirmarResena" variant="dark">Enviar reseña</Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
