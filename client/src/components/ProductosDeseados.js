import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import markUwu from '../img/markUwu.jpg'
import './Styles/ProductosAdquridos.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';




export default class ProductosDeseados extends Component {
  render() {

    return (
     
      <div className= "main-wrapperThree">
         <div className= "productosAdquiridosContainer">
         <h3 className="tituloListaAdquiridos">Productos deseados:</h3>
            <div className= "productAdquirid-div quitarBackgroundProductoAdquirido">

            <div className="parrafo cartaExtr">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna1">
          <img className= "imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
            <li className="notaListaProductoAdquirido">Producto para vender</li>
            </ui>
          </div>
          {/* Column2 */}
           <div className="col columna1">
           <img className= "imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
              <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
            </ui> 
          </div> 
          {/* Column3 */}
          <div className="col columna1">
          <h4 className="tituloListaProductoAdquirido">Producto disponible</h4>
            <ui className="list-unstyled">
              <Link className="linkNavBar" to="/DetalleProductoVenta">
              <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena" variant="dark">Eliminar de lista</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>





      <div className="parrafo cartaExtr cartaListaProductoIntercambioAdquirido">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna1">
          <img className= "imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
            <li className="notaListaProductoAdquirido">Producto para intercambio</li>
            </ui>
          </div>
          {/* Column2 */}
           <div className="col columna1">
           <img className= "imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
              <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
            </ui> 
          </div> 
          {/* Column3 */}
          <div className="col columna1">
          <h4 className="tituloListaProductoAdquirido">Producto disponible</h4>
            <ui className="list-unstyled">
              <Link className="linkNavBar" to="/DetalleProductoIntercambio">
              <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena" variant="dark">Eliminar de lista</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>


    </div>
    </div>
    </div>
    )
  }
}