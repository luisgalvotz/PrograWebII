import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import {Link} from 'react-router-dom'
/*
import markUwu from '../img/markUwu.jpg'
import taylor2 from '../img/taylor2.png'*/
import taylor1 from '../img/taylor1.jpg'

import Carousel from 'react-bootstrap/Carousel';
import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Styles/Dashboard.css'

  

export default class Dashboard extends Component {

    render() {
        
    return (

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
        <div className= "container-newmerch">
            <p className= "titulo-merch">MERCANCIA NUEVA</p>
            <div className= "row" >
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        <div className= "container-newmerch">
        <p className= "titulo-merch">MERCANCIA MAS PEDIDA</p>
            <div className= "row" >
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="dashcardsrow col-sm-3">
                    <Card className="dashcards">
                        <Card.Img variant="top" src={taylor1} />
                        <Card.Body >
                            <Card.Title>Playera</Card.Title>
                                <Card.Text>
                                    Taylor Swift
                                </Card.Text>
                                <Card.Text>
                                    $500
                                </Card.Text>
                            <Button className="dash-btn">Ver más</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        <div className= "container-newmerch">
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
                            <Button className="dash-btn">TAYLOR SWIFT</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
        )
    }
}