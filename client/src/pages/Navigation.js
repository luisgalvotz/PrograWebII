// import React, { Component } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import TrueFanLogo from '../img/truefanlogo.png'
import Lupa from '../img/lupa.png'
import './Styles/Navbar.css'
import './Styles/RootStyle.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import { usuario_getByEmail } from '../services/UsuarioService';

function NavScrollExample() {

  //VALOR DEL INPUT DE BUSQUEDA
  const [input,setInput] = useState ( {
    busqueda: ''
  })

  const handleChange = (event) => {
    setInput({
        ...input,
        [event.target.name] : event.target.value
      })
  };

  const limpiarBusqueda = async (event) => {
    var input = document.getElementById('busqueda');
    input.value = '';
  };

  const { user, getAccessTokenSilently, logout } = useAuth0();
  
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
      async function fetchData() {
        if (user) {
          const token = await getAccessTokenSilently();
          const us = await usuario_getByEmail(user.email, token);
          setUsuario(us);
        }
      }
  fetchData();
  }, [])
  
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Navbar expand="lg" className="navBar">
      <Container fluid>
        <Navbar.Brand href="#">  
          <Link className="navbar-brand" to="/Dashboard">
            <img src={TrueFanLogo} alt="Bootstrap" className='imgNavBarLogo'/> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="textoNavBar" id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 textoNavBar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {(() => {
              if (user){
                return(
                  <Link className="linkNavBar" to="/CrearArticulo">
                    <Nav.Link href="#action2"  className="textoNavBar">Publicar</Nav.Link>
                  </Link>
                )
              }
            })()}

            <NavDropdown title="Productos"  id="navbarScrollingDropdown">
              <Link className="linkNavBar" to="/ListaProductosVenta">
                <NavDropdown.Item className="textoNavBarDrop" href="#CreateNote">En venta</NavDropdown.Item>
              </Link>
              <Link className="linkNavBar" to="/ListaProductosIntercambio">
                <NavDropdown.Item className="textoNavBarDrop" href="#action4">En intercambio</NavDropdown.Item>
              </Link>
            </NavDropdown>

            {(() => {
              if (user){
                return(
                  <NavDropdown title="Usuario"  id="navbarScrollingDropdown">
                    <Link className="linkNavBar" to={`/PerfilResenas/${usuario._id}`}>
                      <NavDropdown.Item className="textoNavBarDrop" href="#action2">Perfil</NavDropdown.Item>
                    </Link>
                    <Link className="linkNavBar" to="/ProductosDeseados">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action3">Wishlist</NavDropdown.Item>
                    </Link>
                    {/* <Link className="linkNavBar" to="/ProductosAdquiridos">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action4">Tus compras e intercambios</NavDropdown.Item>
                    </Link> */}
                    <Link className="linkNavBar" to="/AdministrarIntercambios">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action4">Administrar intercambios</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                )
              }
            })()}

            {(() => {
              if (user && usuario.tipo == "A"){
                return(
                  <NavDropdown title="Administrador"  id="navbarScrollingDropdown">
                    <Link className="linkNavBar" to="/Reports">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action3">Reportes</NavDropdown.Item>
                    </Link>
                    <Link className="linkNavBar" to="/Sugerencias">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action4">Sugerencias de usuarios</NavDropdown.Item>
                    </Link>
                    <Link className="linkNavBar" to="/ListaEtiquetas">
                      <NavDropdown.Item className="textoNavBarDrop" href="#action4">Administrar etiquetas</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                )
              }
            })()}

            {/* <Link className="linkNavBar" to="/Register">
              <Nav.Link href="#action2"  className="textoNavBar">Registrarse</Nav.Link>
            </Link> */}

            {(() => {
              if (!user){
                return(
                  <Link className="linkNavBar" to="/Login">
                  <Nav.Link href="#action1"  className="textoNavBar">Iniciar sesión</Nav.Link>
                </Link>
                )
              }
            })()}

            {(() => {
              if (user){
                return(
                  <Nav.Link href="#action2" className="textoNavBar" onClick={logoutWithRedirect}>Cerrar sesión</Nav.Link>
                )
              }
            })()}
            
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> 
            
            <Link className="navbar-brand" to="/">
                <img src={TrueFanLogo} alt="Bootstrap" className='imgNavBarLogo'/> 
            </Link>
            
            */}
          </Nav>
          <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Buscar producto"
              className="me-2 inputNavBar"
              aria-label="Search"
              name="busqueda"
              id ="busqueda"
              onChange={handleChange}
            />            
            <Link className="linkNavBar" to={`/ListaProductosBusqueda/${input.busqueda}`}>
              <Button variant="outline-success" className="btnBuscarOutside" onClick={limpiarBusqueda}>  
                <img src={Lupa} alt="Bootstrap" className='btnBuscar'/> 
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  );
}

export default NavScrollExample;