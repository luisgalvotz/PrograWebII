import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import markUwu from '../img/markUwu.jpg'
import './Styles/ProductosAdquridos.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import { usuario_getByEmail } from '../services/UsuarioService';
import { wishlist_ver, wishlist_eliminar } from '../services/WishlistService';

const ProductosDeseadosPage =()=>{

  const { user, getAccessTokenSilently } = useAuth0();

  const [usuario, setUsuario] = useState([]);
  const [deseos, setDeseos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const token = await getAccessTokenSilently();
            const us = await usuario_getByEmail(user.email, token);
            setUsuario(us);

            const res = await wishlist_ver(us._id);
            setDeseos(res.articulos);
        }
    fetchData();
    }, [])

    const [datos, setDatos] = useState({
      id_usuario: '',
      id_articulo: ''
    });

    const handleChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
    };

    const enviarDatos = async (event) => {
      event.preventDefault();
      datos.id_usuario = usuario._id;
      const res = await wishlist_eliminar(datos);
      window.location.href = "http://localhost:3000/ProductosDeseados";
    };
   
    return(
        <div className= "main-wrapperThree">
        <div className= "productosAdquiridosContainer">
          <h3 className="tituloListaAdquiridos">Productos deseados:</h3>
          <div className= "productAdquirid-div quitarBackgroundProductoAdquirido">

            {deseos.map((deseo) => {
              return(
                <>
                {(() => {
                  if (deseo.tipo === "venta" && deseo.estatus === "activo") {
                    return(
                      <div className="parrafo cartaExtr">
                        <div className="">
                          <div className="row">
                            {/* Column1 */}
                            <div className="col columna1">
                              <img className= "imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                              <ui className="list-unstyled">
                                <h4 className="tituloListaProductoAdquirido">{deseo.titulo}</h4>
                                <li className="notaListaProductoAdquirido">Producto para vender</li>
                              </ui>
                            </div>
                            {/* Column2 */}
                            <div className="col columna1">
                              <img className= "imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                              <ui className="list-unstyled">
                                <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                                <li className="notaListaProductoAdquirido">{deseo.id_usuario.nombre}</li>
                              </ui> 
                            </div> 
                            {/* Column3 */}
                            <div className="col columna1">
                              <h4 className="tituloListaProductoAdquirido">Producto disponible</h4>
                              <ui className="list-unstyled">
                                <Link className="linkNavBar" to={`/DetalleProductoVenta/${deseo._id}`}>
                                  <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
                                </Link>
                                <Form onSubmit={enviarDatos}>
                                  <Button className="btnProdResena" variant="dark" type="Submit" value={deseo._id} name="id_articulo" id="id_articulo" onClick={handleChange}>
                                    Eliminar de lista
                                  </Button>  
                                </Form>
                              </ui> 
                            </div> 
                          </div>
                        </div>
                      </div>
                    )}
                  else if (deseo.tipo === "inter" && deseo.estatus === "activo") { 
                    return(
                      <div className="parrafo cartaExtr cartaListaProductoIntercambioAdquirido">
                        <div className="">
                          <div className="row">
                            {/* Column1 */}
                            <div className="col columna1">
                              <img className= "imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                              <ui className="list-unstyled">
                                <h4 className="tituloListaProductoAdquirido">{deseo.titulo}</h4>
                                <li className="notaListaProductoAdquirido">Producto para intercambio</li>
                              </ui>
                            </div>
                            {/* Column2 */}
                            <div className="col columna1">
                              <img className= "imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                              <ui className="list-unstyled">
                                <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                                <li className="notaListaProductoAdquirido">{deseo.id_usuario.nombre}</li>
                              </ui> 
                            </div> 
                            {/* Column3 */}
                            <div className="col columna1">
                              <h4 className="tituloListaProductoAdquirido">Producto disponible</h4>
                              <ui className="list-unstyled">
                                <Link className="linkNavBar" to={`/DetalleProductoIntercambio/${deseo._id}`}>
                                  <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
                                </Link>
                                <Form onSubmit={enviarDatos}>
                                  <Button className="btnProdResena" variant="dark" type="Submit" value={deseo._id} name="id_articulo" id="id_articulo" onClick={handleChange}>
                                    Eliminar de lista
                                  </Button>  
                                </Form>
                              </ui> 
                            </div> 
                          </div>
                        </div>
                      </div>
                    )}
                })()}
                </>
              )
            })}

          </div>
        </div>
        </div> 
    )
}

export default ProductosDeseadosPage