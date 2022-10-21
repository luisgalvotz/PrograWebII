import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import markUwu from '../img/markUwu.jpg'
import face1 from '../img/face1.png'
import face2 from '../img/face2.png'
import face3 from '../img/face3.png'
import face4 from '../img/face4.png'
import face5 from '../img/face5.png'
import './Styles/ProductosAdquridos.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';





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
            <h4 className="tituloListaProductoAdquirido">Titulo del producto</h4>
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
          <h4 className="tituloListaProductoAdquirido">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoAdquirido">Disponible</li>
              <Link className="linkNavBar" to="/DetalleProductoVenta">
              <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena" variant="dark">Eliminar de lista</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>



      <div className="parrafo cartaExtr">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna1">
          <img className= "imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoAdquirido">Titulo del producto</h4>
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
          <h4 className="tituloListaProductoAdquirido">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoAdquirido">No disponible</li>
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
            <h4 className="tituloListaProductoAdquirido">Titulo del producto</h4>
            <li className="notaListaProductoAdquirido">Producto para intercambiar</li>
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
          <h4 className="tituloListaProductoAdquirido">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoAdquirido">Disponible</li>
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