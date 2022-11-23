import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logincaja from '../img/logincaja.jpg'
import truefanlogo from '../img/truefanlogo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import mujerPosando from '../img/mujerPosando.jpg'
import './Styles/Sugerencia.css'

import { useEffect, useState } from "react";
import {comentarios_ver,comentarios_revisar} from '../services/ComentariosService';

const SugerenciasPage =()=>{

    //REVISAR UNA SUGERENCIA
    const [datos,setDatos] = useState ( {
        id:''
      })

      const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
          })
      };

      const enviarDatos = async (event) =>{
    
        event.preventDefault();
        //const inputDOM =document.getElementById('id');
        //setDatos.id = inputDOM.value;
        await comentarios_revisar(datos);
      }

    const [sugerencias, setSugerencias] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await comentarios_ver();
            setSugerencias(res.data); 
        }
    fetchData();
    }, [])


    return(
        <div className= "container-sug">
        <h2 className= "texto-sug-t">Sugerencias de los usuarios hacia TrueFan</h2>
        
        <div className= "container-com">
            {sugerencias.map((comentario) => {
            if (comentario.estatus ==="revisado"){
                return (
                    <div className= "cardsug row" >
                    <div className="comentario-usuario col-sm-2">
                        <img className= "img_com img-fluid" src={mujerPosando} alt="Usuario"/>
                    </div>
                    <div className="comentario-usuario col-sm-10">
                        <p className= "texto-sug">{comentario.contenido}</p>
                        <p className= "texto-sug-rev">Sugerencia Revisada</p>
                    </div>
                </div>
                )
            }else{
                  return (
            <div className= "cardsug row" >
                <div className="comentario-usuario col-sm-2">
                    <img className= "img_com img-fluid" src={mujerPosando} alt="Usuario"/>
                </div>
                <div className="comentario-usuario col-sm-10">
                    <p className= "texto-sug">{comentario.contenido}</p>
                    <Form onSubmit={enviarDatos}>
                    <Button className= "btn-Revisado" type="Submit" value={comentario._id} name="id" id="id" onClick={handleChange}>
                        Revisar Sugerencia
                    </Button>
                    </Form>
                </div>
            </div>
                  )
            }

                  
        })}

    
        </div>
    </div>
    )
}

export default SugerenciasPage