import React, { Component } from 'react'
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

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container fluid>
        <Navbar.Brand href="#">  
        <Link className="navbar-brand" to="/">
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
            <NavDropdown title="Productos"  id="navbarScrollingDropdown">
            <Link className="linkNavBar" to="/ProductosVenta">
              <NavDropdown.Item className="textoNavBarDrop" href="#CreateNote">En venta</NavDropdown.Item>
              </Link>
              <NavDropdown.Item className="textoNavBarDrop" href="#action4">En intercambio</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Usuario"  id="navbarScrollingDropdown">
            <NavDropdown.Item className="textoNavBarDrop" href="#action2">Editar perfil</NavDropdown.Item>
              <NavDropdown.Item className="textoNavBarDrop" href="#action3">Wishlist</NavDropdown.Item>
              <NavDropdown.Item className="textoNavBarDrop" href="#action4">Articulos adquiridos</NavDropdown.Item>
              <NavDropdown.Item className="textoNavBarDrop" href="#action4">Artículos publicados</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Administrador"  id="navbarScrollingDropdown">
              <NavDropdown.Item className="textoNavBarDrop" href="#action3">Reportes</NavDropdown.Item>
              <NavDropdown.Item className="textoNavBarDrop" href="#action4">Sugerencias de usuarios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2"  className="textoNavBar">Registrarse</Nav.Link>
            <Nav.Link href="#action2"  className="textoNavBar">Iniciar sesión</Nav.Link>
            <Nav.Link href="#action2"  className="textoNavBar">Salir</Nav.Link>
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
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="btnBuscarOutside">  
            <img src={Lupa} alt="Bootstrap" className='btnBuscar'/> </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  );
}

export default NavScrollExample;