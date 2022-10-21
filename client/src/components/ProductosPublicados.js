import React, {Component } from 'react'
import taylor1 from '../img/taylor1.jpg'
import markUwu from '../img/markUwu.jpg'
import face1 from '../img/face1.png'
import face2 from '../img/face2.png'
import face3 from '../img/face3.png'
import face4 from '../img/face4.png'
import face5 from '../img/face5.png'
import './Styles/ProductosAdquridos.css'
import './Styles/ProductosPublicados.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';





export default class ProductosPublicados extends Component {
  render() {

    return (
     
      <div className= "main-wrapperFour">
         <div className= "productosPublicadosContainer">
         <h3 className="tituloListaAdquiridos">Tus productos publicados:</h3>
            <div className= "productPublicad-div quitarBackgroundProductoPublicado">

            <div className="parrafo cartaExtr2">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna2">
          <img className= "imgVendedorDetallePublicado" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoPublicado">Titulo del producto</h4>
            <li className="notaListaProductoPublicado">Producto para vender</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col columna2">
          <h4 className="tituloListaProductoPublicado">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoPublicado">Publicado</li>
              <Link className="linkNavBar" to="/DetalleProductoVenta">
              <Button className="btnProdPublicadoVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena2" variant="dark">Eliminar producto</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>


      <div className="parrafo cartaExtr2 cartaListaProductoIntercambioPublicado">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna2">
          <img className= "imgVendedorDetallePublicado" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoPublicado">Titulo del producto</h4>
            <li className="notaListaProductoPublicado">Producto para intercambiar</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col columna2">
          <h4 className="tituloListaProductoPublicado">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoPublicado">Publicado</li>
              <Link className="linkNavBar" to="/DetalleProductoIntercambio">
              <Button className="btnProdPublicadoVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena2" variant="dark">Eliminar producto</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>

      <div className="contendorCAS2">
            <h5 className="letraFooter alinearIzquier">Producto sugerido para intercambio</h5>
            <img className= "imgProductoSugerido" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <li className="notaListaProductoPublicado">Titulo del producto</li>
            </ui>
            <Link className="linkNavBar" to="/DetalleProductoSugerido">
            <Button className="btnProdPublicadoVer btnVerSugerencia" variant="dark">Ver a detalle</Button>  
            </Link>
      </div>


      <div className="parrafo cartaExtr2">
            <div className="">
        <div className="row">
          {/* Column1 */}
          <div className="col columna2">
          <img className= "imgVendedorDetallePublicado" src={taylor1} alt="Imagen"/>
            <ui className="list-unstyled">
            <h4 className="tituloListaProductoPublicado">Titulo del producto</h4>
            <li className="notaListaProductoPublicado">Producto para vender</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col columna2">
          <h4 className="tituloListaProductoPublicado">Estado del producto</h4>
            <ui className="list-unstyled">
              <li className="notaListaProductoPublicado">Entregado</li>
              <Link className="linkNavBar" to="/DetalleProductoVenta">
              <Button className="btnProdPublicadoVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena2" variant="dark">Eliminar producto</Button>  
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