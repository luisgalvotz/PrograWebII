import React from 'react'
// import React, { Component } from 'react'
import "./Styles/Footer.css";
// import TrueFanLogo from '../img/truefanlogo.png'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <h4 className="letraFooter">¿Tienes alguna sugerencia?</h4>
            <ui className="list-unstyled">
            <InputGroup className="mb-3 inputFooter">
        <Form.Control className="inputFooterTexto"
          placeholder="Escriba su sugerencia aqui"
          aria-label="Escriba su sugerencia aqui"
          aria-describedby="basic-addon2"
        />
        <Button className="letraFooter" variant="outline-secondary" id="button-addon2">
          Enviar
        </Button>
      </InputGroup>
              {/* <li>OTHER STUFF</li>
              <li>GUD STUFF</li> */}
            </ui>
          {/* <img src={TrueFanLogo} alt="Bootstrap" className='imgFooter'/> */}
            {/* <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1> */}
          </div>
          {/* Column2 */}
          {/* <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui> 
          </div> */}
          {/* Column3 */}
          <div className="col">
        
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TRUE FAN | All rights reserved |
            Terms Of Service | Conditions of Use
          </p>
        </div>
      </div>
    </div>

    
  );
}

export default Footer;

