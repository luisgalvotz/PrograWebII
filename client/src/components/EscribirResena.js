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
          <h3 className="tituloListaAdquiridos">
            Escriba una reseña de acuerdo a la experiencia con el usuario que realizó su adquisición:
          </h3>
          
          <div className="productAdquirid-div quitarBackgroundProductoAdquirido">
         
            <div className="contendorCAS2">
              <h5 className="letraFooter alinearIzquier">Escriba su reseña</h5>
              <InputGroup>
                <Form.Control className="inputArticuloSugeridoTexto" as="textarea" placeholder="Yo pienso que..." aria-label="With textarea"/>
              </InputGroup>
              <br></br>
              <h5 className="letraFooter alinearIzquier">¿Cómo calificaría al usuario?</h5>
              <form className="estrellasInput">
                <p className="clasificacion">
                  <input enabled id="radio1" type="radio" className="estrellasInput"value="5"/>
                  <label htmlFor="radio1">★</label>
                  <input enabled id="radio2" type="radio" className="estrellasInput" value="4"/>
                  <label htmlFor="radio2">★</label>
                  <input enabled id="radio3" type="radio" className="estrellasInput" value="3"/>
                  <label htmlFor="radio3">★</label>
                  <input enabled id="radio4" type="radio" className="estrellasInput" value="2"/>
                  <label htmlFor="radio4">★</label>
                  <input enabled id="radio5" type="radio" className="estrellasInput" value="1"/>
                  <label htmlFor="radio5">★</label>
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
