import React, { Component } from "react";
import taylor1 from "../img/taylor1.jpg";
import markUwu from "../img/markUwu.jpg";
import "./Styles/ProductosAdquridos.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default class ProductosAdquiridos extends Component {
  render() {
    return (
      <div className="main-wrapperThree">
        <div className="productosAdquiridosContainer">
          <h3 className="tituloListaAdquiridos">
            Estas son tus compras e intercambios:
          </h3>
          <Button className="btnProdAdqVer claseExt" variant="dark">Escribir reseña</Button>&nbsp;&nbsp;&nbsp;

          <div className="productAdquirid-div quitarBackgroundProductoAdquirido">

          <div className="contendorCAS2">
          <img className="imgResena" src={markUwu} alt="Imagen"/>
              <h5 className="letraFooter alinearIzquier">Juancho Barbosa Fuentes</h5>
              <p className="notaListaProductoAdquirido">Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae animi ad minima veritatis dolore.
                Architecto facere dignissimos voluptate fugit ratione molestias
                quis quidem exercitationem voluptas.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae animi ad minima veritatis dolore.
                Architecto facere dignissimos voluptate fugit ratione molestias
                quis quidem exercitationem voluptas.</p>

              <h6 className="letraFooter alinearIzquier">Calificación :</h6>
              <form className="estrellasResena">
                <p className="clasificacion">
                  <input disabled id="radio1" type="radio" className="estrellasResena"value="5"/>
                  <label htmlFor="radio1" className="estIndividualOff">★</label>
                  <input disabled id="radio2" type="radio" className="estrellasResena" value="4"/>
                  <label htmlFor="radio2" className="estIndividualOff">★</label>
                  <input disabled id="radio3" type="radio" className="estrellasResena" value="3"/>
                  <label htmlFor="radio3" className="estIndividualOff">★</label>
                  <input disabled id="radio4" type="radio" className="estrellasResena" value="2"/>
                  <label htmlFor="radio4" className="estIndividual">★</label>
                  <input disabled id="radio5" type="radio" className="estrellasResena" value="1"/>
                  <label htmlFor="radio5" className="estIndividual">★</label>
                </p>
              </form>
            </div>

         
            <div className="contendorCAS2">
              <h5 className="letraFooter alinearIzquier">Escriba su reseña</h5>
              <InputGroup>
                <Form.Control className="inputArticuloSugeridoTexto" as="textarea" placeholder="Reseña" aria-label="With textarea"/>
              </InputGroup>
              <br></br>
              <h5 className="letraFooter alinearIzquier">¿Cómo calificaría al usuario?</h5>
              <form className="estrellasInput">
                <p className="clasificacion">
                  <input enabled id="radio1" type="radio" className="estrellasInput"value="5"/>
                  <label htmlFor="radio1">★</label>
                  <input enabled id="radio2" type="radio" className="estrellasInput" value="4"/>
                  <label htmlFor="radio2">★</label>
                  <input enabled id="radio3" type="radio" className="estrellasInput" value="3"/>
                  <label htmlFor="radio3">★</label>
                  <input enabled id="radio4" type="radio" className="estrellasInput" value="2"/>
                  <label htmlFor="radio4">★</label>
                  <input enabled id="radio5" type="radio" className="estrellasInput" value="1"/>
                  <label htmlFor="radio5">★</label>
                </p>
              </form>
              <Button className="btnConfirmarResena" variant="dark">Enviar reseña</Button>
            </div>




            <div className="parrafo cartaExtr">
              <div className="">
                <div className="row">
                  {/* Column1 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
                      <li className="notaListaProductoAdquirido">Producto para vender</li>
                    </ui>
                  </div>
                  {/* Column2 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                      <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
                    </ui>
                  </div>
                  {/* Column3 */}
                  <div className="col columna1">
                    <h4 className="tituloListaProductoAdquirido">Producto entregado</h4>
                    <ui className="list-unstyled">
                      <Link className="linkNavBar" to="/DetalleProductoVenta">
                        <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
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
                <Form.Control className="inputArticuloSugeridoTexto" as="textarea" placeholder="Reseña" aria-label="With textarea"/>
              </InputGroup>
              <br></br>
              <h5 className="letraFooter alinearIzquier">¿Qué tan buena considera su experiencia?</h5>
              <form className="estrellasInput">
                <p className="clasificacion">
                  <input id="radio1" type="radio" className="estrellasInput"value="5"/>
                  <label htmlFor="radio1">★</label>
                  <input id="radio2" type="radio" className="estrellasInput" value="4"/>
                  <label htmlFor="radio2">★</label>
                  <input id="radio3" type="radio" className="estrellasInput" value="3"/>
                  <label htmlFor="radio3">★</label>
                  <input id="radio4" type="radio" className="estrellasInput" value="2"/>
                  <label htmlFor="radio4">★</label>
                  <input id="radio5" type="radio" className="estrellasInput" value="1"/>
                  <label htmlFor="radio5">★</label>
                </p>
              </form>
              <Button className="btnConfirmarResena" variant="dark">Enviar reseña</Button>
            </div>

            <div className="parrafo cartaExtr cartaListaProductoIntercambioAdquirido">
              <div className="">
                <div className="row">
                  {/* Column1 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
                      <li className="notaListaProductoAdquirido">Producto para intercambiar</li>
                    </ui>
                  </div>
                  {/* Column2 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                      <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
                    </ui>
                  </div>
                  {/* Column3 */}
                  <div className="col columna1">
                    <h4 className="tituloListaProductoAdquirido">Producto entregado</h4>
                    <ui className="list-unstyled">
                      <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                        <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
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
                    <img className="imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
                      <li className="notaListaProductoAdquirido">Producto para intercambiar</li>
                    </ui>
                  </div>
                  {/* Column2 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                      <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
                    </ui>
                  </div>
                  {/* Column3 */}
                  <div className="col columna1">
                    <h4 className="tituloListaProductoAdquirido">Intercambio en revisión</h4>
                    <ui className="list-unstyled">
                      <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                        <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
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
                    <img className="imgVendedorDetalleAdquirido" src={taylor1} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Sudadera de Taylor Swift</h4>
                      <li className="notaListaProductoAdquirido">Producto para intercambiar</li>
                    </ui>
                  </div>
                  {/* Column2 */}
                  <div className="col columna1">
                    <img className="imgVendedorDetalleAdquirido" src={markUwu} alt="Imagen"/>
                    <ui className="list-unstyled">
                      <h4 className="tituloListaProductoAdquirido">Ofrecido por</h4>
                      <li className="notaListaProductoAdquirido">Juancho Barbosa Fuentes</li>
                    </ui>
                  </div>
                  {/* Column3 */}
                  <div className="col columna1">
                    <h4 className="tituloListaProductoAdquirido">
                      Intercambio rechazado
                    </h4>
                    <ui className="list-unstyled">
                      <Link className="linkNavBar" to="/DetalleProductoIntercambio">
                        <Button className="btnProdAdqVer" variant="dark">Ver producto</Button>&nbsp;&nbsp;&nbsp;
                      </Link>
                    </ui>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
