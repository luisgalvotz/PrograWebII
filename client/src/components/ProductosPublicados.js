import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import './Styles/ProductosAdquridos.css'
import './Styles/ProductosPublicados.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';




export default class ProductosPublicados extends Component {
  render() {

    return (
     
      <div className= "main-wrapperFour">
         <div className= "productosPublicadosContainer">
         <h3 className="tituloListaAdquiridos">Tus productos publicados:</h3>
            <div className= "productPublicad-div quitarBackgroundProductoPublicado">

    


      <div className="parrafo cartaExtr2 cartaListaProductoIntercambioPublicado">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna2">
          <img className= "imgVendedorDetallePublicado" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
            <li className="notaListaProductoPublicado">Producto para intercambiar</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col columna2">
          <h4 className="tituloListaProductoPublicado">12/03/2022</h4>
            <ui className="list-unstyled">
              <Link className="linkNavBar" to="/DetalleProductoIntercambio">
              <Button className="btnProdPublicadoVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              {/* <Button className="btnProdResena2" variant="dark">Eliminar producto</Button>   */}
            </ui> 
          </div> 
          </div>
        </div>
      </div>

      <div className="contendorCAS2 contExtra">
            <h5 className="letraFooter alinearIzquier">Producto sugerido para intercambio</h5>
            <img className= "imgProductoSugerido" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
            </ui>
            <Link className="linkNavBar" to="/DetalleProductoSugerido">
            <Button className="btnProdPublicadoVer btnVerSugerencia" variant="dark">Ver producto</Button>  
            </Link>
      </div>



    </div>
    </div>
    </div>
    )
  }
}