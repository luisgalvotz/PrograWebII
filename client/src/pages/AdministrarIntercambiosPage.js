import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ProductosAdquridos.css'
import './Styles/ProductosPublicados.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import {usuario_getById,usuario_getByEmail} from '../services/UsuarioService';
import {articuloIntercambio_getById} from '../services/ArticuloService';
import { useEffect, useState } from "react";
import {oferta_getAll} from '../services/OfertasService';

const AdministrarIntercambiosPage =()=>{
  // TRAER TODAS LAS OFERTAS HECHAS POR LOS USUARIOS
  const { user, getAccessTokenSilently} = useAuth0();
  const [ofertas, setOfertas] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const token = await getAccessTokenSilently();
          const us2 = await usuario_getByEmail(user.email, token);
        //  ofertas.id_usuario = us2._id;
            const res = await oferta_getAll(us2);
            setOfertas (res.data);

        }
    fetchData();
    }, [])




    return(
        <div className= "main-wrapperFour">
        <div className= "productosPublicadosContainer">
        <h3 className="tituloListaAdquiridos">Ofertas que tienes pendientes:</h3>
           <div className= "productPublicad-div quitarBackgroundProductoPublicado">
            {/* DESDE AQUI EMPEZAR A IMPRIMIR EL PRODUCTO QUE TIENE EN OFERTA Y LOS PRODUCTOS QUE OFRECEN POR ELLA */}
     {/* <div className="parrafo cartaExtr2 cartaListaProductoIntercambioPublicado">
           <div className="">
       <div className="row">
         
         <div className="col columna2">
         <img className= "imgVendedorDetallePublicado" src={taylor1} alt="Imagen"/>
           <ui className="list-unstyled">
           <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
           <li className="notaListaProductoPublicado">Producto para intercambio</li>
           </ui>
         </div>

         
         <div className="col columna2">
         <h4 className="tituloListaProductoPublicado">Producto disponible</h4>
           <ui className="list-unstyled">
             <Link className="linkNavBar" to="/DetalleProductoIntercambio">
             <Button className="btnProdPublicadoVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
             </Link>
             {/* <Button className="btnProdResena2" variant="dark">Eliminar producto</Button>   
           </ui> 
         </div> 
         </div>
       </div>
     </div> */}


     {ofertas.map((oferta) => {
      
            return (  
     <div className="contendorCAS">
           <h5 className="letraFooter alinearIzquier">¡OFERTA!</h5>
            
           <img className= "imgProductoSugerido" src={oferta.imagenes} alt="Imagen"/>
           <ui className="list-unstyled">
           <h4 className="tituloListaProductoAdquirido">{oferta.titulo}</h4>
           </ui>
           <Link className="linkNavBar" to={`/DetalleProductoSugerido/${oferta._id}`}>
           <Button className="btnProdPublicadoVer btnVerSugerencia" variant="dark">Ver producto</Button>  
           </Link>


     </div>
     )
    })}


   </div>
   </div>
   </div>   
    )
}

export default AdministrarIntercambiosPage

