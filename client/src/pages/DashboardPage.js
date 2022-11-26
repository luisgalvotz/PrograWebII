import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import taylor1 from '../img/taylor1.jpg'
import Carousel from 'react-bootstrap/Carousel';
import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import heart from "../img/heart.png";
import './Styles/Dashboard.css';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

import { useEffect, useState } from "react";
import {articulo_getAll} from '../services/ArticuloService';

const DashboardPage =()=>{

    const { user } = useAuth0();

    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await articulo_getAll();
            setArticulos(res.data); //TENEMOS QUE AGREGAR EL DATA PARA QUE SEPA DE DONDE SACAR LA INFO
        }
    fetchData();
    }, [])
    
    return(
        
    <div className= "container-dash">
    <Carousel fade>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={truefanlogo}
            alt="First slide"
            />  
            <Carousel.Caption>
                <h3>MERCANCIA NUEVA</h3>
                <p>VEN Y ENCUENTRA TU MERCANCIA FAVORITA</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={truefanlogo}
            alt="Second slide"
            />
            <Carousel.Caption>
                <h3>BUSCA A TUS ARTISTAS FAVORITOS</h3>
                <p>ENCONTRARAS TODO LO QUE BUSCAS</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={truefanlogo}
            alt="Third slide"
            />
            <Carousel.Caption>
                <h3>INTERCAMBIA INCREIBLES ARTICULOS</h3>
                <p>
                    BUSCA LO QUE TANTO DESEAS Y LO ENCONTRARAS JUSTO AQUI
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    {/* <div className= "container-newmerch">
        <p className= "titulo-merch">MERCANCIA NUEVA</p>
        <div className= "row" >
            <div className="dashcardsrow col-sm-3">
                <Card className="dashcards">
                <Link className="linkNavBar" to="/DetalleProductoVenta">
                    <Card.Img variant="top" src={taylor1} />
                    </Link>
                    <Card.Body >
                        <Card.Title>Playera</Card.Title>
                            <Card.Text>
                                #TaylorSwift
                            </Card.Text>
                            <Card.Text>
                                Producto en venta
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="dashcardsrow col-sm-3">
                <Card className="dashcards">
                <Link className="linkNavBar" to="/DetalleProductoVenta">
                    <Card.Img variant="top" src={taylor1} />
                    </Link>                        <Card.Body >
                        <Card.Title>Playera</Card.Title>
                            <Card.Text>
                                #TaylorSwift
                            </Card.Text>
                            <Card.Text>
                                Producto en venta
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="dashcardsrow col-sm-3">
                <Card className="dashcardsInter">
                <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                    <Card.Img variant="top" src={taylor1} />
                    </Link>                           <Card.Body >
                        <Card.Title>Playera</Card.Title>
                            <Card.Text>
                                #TaylorSwift
                            </Card.Text>
                            <Card.Text>
                            Producto para intercambio
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="dashcardsrow col-sm-3">
                <Card className="dashcardsInter">
                <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                    <Card.Img variant="top" src={taylor1} />
                    </Link>                           <Card.Body >
                        <Card.Title>Playera</Card.Title>
                            <Card.Text>
                                #TaylorSwift
                            </Card.Text>
                            <Card.Text>
                                Producto para intercambio
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div> */}
    <div className= "container-newmerch">
    <p className= "titulo-merch">TODOS LOS ARTICULOS</p>
    <div className= "row" >
        {articulos.map((articulo) => {
            return (
            <div className="dashcardsrow col-sm-3">
            {(() => {
                if (articulo.tipo === "venta"){
                    return(
                        <Card className="dashcards">
                        <Link className="linkNavBar" to={`/DetalleProductoVenta/${articulo._id}`}>
                            <Card.Img variant="top" src={articulo.imagenes} />
                        </Link>
                        <Card.Body >
                            <Card.Title>{articulo.titulo}</Card.Title>
                            <Card.Text>#{articulo.etiquetas.nombre}</Card.Text>
                            <Card.Text>Producto en venta</Card.Text>
                        </Card.Body>
                        </Card>
                    )}
                    if(articulo.tipo === "inter"){
                    return (
                        <Card className="dashcardsInter">
                        <Link className="linkNavBar" to={`/DetalleProductoIntercambio/${articulo._id}`}>
                            <Card.Img variant="top" src={articulo.imagenes} />
                        </Link>
                        <Card.Body >
                            <Card.Title>{articulo.titulo}</Card.Title>
                            <Card.Text>#{articulo.etiquetas.nombre}</Card.Text>
                            <Card.Text>Producto para intercambio</Card.Text>
                        </Card.Body>
                        </Card>
                    )}    
            })()}
            </div>
            )
        })}
    </div>
    </div>
    {/* <div className= "container-newmerch">
    <p className= "titulo-merch">¡NO ESPERES MAS!</p>
        <div className= "row" >
            <div className="dashcardsrow col-sm-6">
                <Card className="dashcards">
                    <Card.Body >
                        <Card.Title>ENCUENTRA A TUS ARTISTAS FAVORITOS </Card.Title>
                        <Button className="dash-btn">Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="dashcardsrow col-sm-6">
                <Card className="dashcards">
                    <Card.Body >
                        <Card.Title>¡ARTISTA DEL MES!</Card.Title>
                        <Button className="dash-btn">#TaylorSwift</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div> */}
</div>    
    )
}

export default DashboardPage
/* export default withAuthenticationRequired(DashboardPage, {
    onRedirecting: () => <Loading/>,
}); */