import React, { Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ListaProductosVenta.css'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {busqueda2} from '../services/ArticuloService';
import Card from 'react-bootstrap/Card';
import './Styles/Dashboard.css';

const ListaProductosBusquedaPage =()=>{
    let {busqueda} = useParams();
    //console.log(busqueda);
    const [articulos, setArticulos] = useState([]);

    
    useEffect(() => {
        async function fetchData() {
            const res = await busqueda2(busqueda);
            setArticulos(res.data);
        }
    fetchData();
    }, [])


    return(
        <div className= "main-wrapperTwo">
        <div className= "listaVentaContainer">
        <h3 className="tituloListaVenta">Resultados de búsqueda:</h3>
           <div className= "productVenta-div quitarBackgroundProductoVenta">
           {articulos.map((articulo) => {
            return (
                
           <div>
             {(() => {
                if (articulo.tipo === "venta"){
                    return(
                        <Card className="dashcards">
                        <Link className="linkNavBar" to={`/DetalleProductoVenta/${articulo._id}`}>
                            <Card.Img variant="top" src={taylor1} />
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
                            <Card.Img variant="top" src={taylor1} />
                        </Link>
                        <Card.Body >
                            <Card.Title>{articulo.titulo}</Card.Title>
                            <Card.Text>#TaylorSwift</Card.Text>
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
       </div>
    )
}

export default ListaProductosBusquedaPage