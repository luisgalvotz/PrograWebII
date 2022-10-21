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




export default class ProductosAdquiridos extends Component {
  render() {

    return (
     
      <div className= "main-wrapperThree">
         <div className= "productosAdquiridosContainer">
         <h3 className="tituloListaAdquiridos">Productos adquiridos:</h3>
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
              <li className="notaListaProductoAdquirido">Entregado</li>
              <Link className="linkNavBar" to="/DetalleProductoVenta">
              <Button className="btnProdAdqVer" variant="dark">Ver detalle</Button>&nbsp;&nbsp;&nbsp;
              </Link>
              <Button className="btnProdResena" variant="dark">Dar reseña</Button>  
            </ui> 
          </div> 
          </div>
        </div>
      </div>


      <div className="contendorCAS2">
            <h5 className="letraFooter alinearIzquier">Escriba su reseña</h5>
            <InputGroup>
            <Form.Control className="inputArticuloSugeridoTexto" as="textarea"  placeholder="Reseña" aria-label="With textarea" />
            </InputGroup>
            <br></br>
            <h5 className="letraFooter alinearIzquier">¿Qué tan buena considera su experiencia?</h5>

        <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
        <ToggleButton id="tbg-radio-1" className="calificacionResena" value={2}>
        <img className= "imgRadioResena" src={face1} alt="Imagen"/>
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={4}>
        <img className= "imgRadioResena" src={face2} alt="Imagen"/>
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={6}>
        <img className= "imgRadioResena" src={face3} alt="Imagen"/>
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" value={8}>
        <img className= "imgRadioResena" src={face4} alt="Imagen"/>
        </ToggleButton>
        <ToggleButton id="tbg-radio-5" value={10}>
        <img className= "imgRadioResena" src={face5} alt="Imagen"/>
        </ToggleButton>
      </ToggleButtonGroup>
            <Button className="btnConfirmarResena" variant="dark">Enviar reseña</Button>  
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
              <li className="notaListaProductoAdquirido">Entregado</li>
              <Link className="linkNavBar" to="/DetalleProductoIntercambio">
              <Button className="btnProdAdqVer" variant="dark">Ver detalle</Button>&nbsp;&nbsp;&nbsp;
              </Link>            
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
              <li className="notaListaProductoAdquirido">Sugerencia en revisión</li>
              <Link className="linkNavBar" to="/DetalleProductoIntercambio">
              <Button className="btnProdAdqVer" variant="dark">Ver detalle</Button>&nbsp;&nbsp;&nbsp;
              </Link>             
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