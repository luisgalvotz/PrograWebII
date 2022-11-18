import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";
import DetalleProductoVentaPage from "./pages/DetalleProductoVentaPage";
import DetalleProductoIntercambioPage from "./pages/DetalleProductoIntercambioPage.js";
import ListaProductosVentaPage from "./pages/ListaProductosVentaPage";
import ListaProductosIntercambioPage from "./pages/ListaProductosIntercambioPage";
import ListaProductosBusquedaPage from "./pages/ListaProductosBusquedaPage";
// import ProductosAdquiridosPage from "./pages/ProductosAdquiridosPage";
import ProductosDeseadosPage from "./pages/ProductosDeseadosPage";
import AdministrarIntercambiosPage from "./pages/AdministrarIntercambiosPage.js";
import DetalleProductoSugeridoPage from "./pages/DetalleProductoSugeridoPage";
import ListaEtiquetasPage from "./pages/ListaEtiquetasPage";
import EscribirResenaPage from "./pages/EscribirResenaPage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PerfilPage from './pages/PerfilPage'
import ReportsPage from './pages/ReportsPage'
import DashboardPage from './pages/DashboardPage'
import SugerenciasPage from './pages/SugerenciasPage'
import CrearArticuloPage from './pages/CrearArticuloPage'
import PerfilResenasPage from './pages/PerfilResenasPage'

function App() {
  return (
    <Router>
      {/* INFORMACION ----------------------------------------------------------------------------------
      Debajo de la ruta de cada página se mencionan acciones de http que contiene */}
      <Navigation />
      {/* La barra de navegacion contiene un input para hacer busquedas por etiquetas */}
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route exact path="/ListaProductosVenta" element={<ListaProductosVentaPage />}/>
            {/* Se trae la lista de todos los artículos disponibles que esten a la venta */}
            <Route exact path="/ListaProductosIntercambio" element={<ListaProductosIntercambioPage />}/>
            {/* Se trae la lista de todos los artículos disponibles para ser intercambiados */}
            <Route exact path="/ListaProductosBusqueda" element={<ListaProductosBusquedaPage />}/>
            {/* Se trae el resultado de las etiquetas ingresadas en el navbar, busqueda por etiquetas */}
            <Route exact path="/DetalleProductoVenta" element={<DetalleProductoVentaPage />}/>
            {/* Se muestra la información de un producto en venta especifico
            Se da de baja un producto si es que se compra  
            Se actualiza el estado de un like
            Se puede ver la cantidad de likes del producto
            Internamente en la página se hace uso del estatus del like
            Se puede ver el promedio de calificación de reseñas del usuario que está ofreciendo el producto
            Se crea una wishlist del usuario en caso de que este sea su primer producto agregado a su lista
            Se puede añadir un producto a la wishlist del usuario
            */}
            <Route exact path="/DetalleProductoIntercambio" element={<DetalleProductoIntercambioPage />}/>
            {/* Se muestra la información de un Producto para intercambio en especifico 
            Se puede agregar una oferta para intercambiar el artículo
            Se actualiza el estado de un like
            Se puede ver la cantidad de likes del producto
            Internamente en la página se hace uso del estatus del like
            Se puede ver el promedio de calificación de reseñas del usuario que está ofreciendo el producto
            Se crea una wishlist del usuario en caso de que este sea su primer producto agregado a su lista
            Se puede añadir un producto a la wishlist del usuario
            */}


            <Route exact path="/ProductosDeseados" element={<ProductosDeseadosPage />}/>
            {/* Se puede ver la lista completa de los productos disponibles agregados a la wishlist del usuario 
            Se pueden eliminar de la lista los productos que sigan disponibles en su wishlist
            */}
            <Route exact path="AdministrarIntercambios" element={<AdministrarIntercambiosPage />}/>
            {/* Se ve una lista de todas las ofertas que haya recibido el usuario especifico */}
            <Route exact path="/DetalleProductoSugerido" element={<DetalleProductoSugeridoPage />}/>
            {/* Se puede ver la información del producto ofrecido para intercambiar en especifico
            Se puede ver el promedio de calificación de reseñas del usuario que está ofreciendo la oferta
            Se puede aceptar la oferta
            Se puede negar la oferta */}
            <Route exact path="/ListaEtiquetas" element={<ListaEtiquetasPage />}/>
            {/* El administrador puede visualizar todas las etiquetas activas 
            Se puede eliminar cada etiqueta que siga activa*/}
            <Route exact path="/EscribirResena" element={<EscribirResenaPage />}/>
            {/* Se puede crear una reseña hecha de acuerdo al usuario con el que se haya comprado o intercambiado */}
            <Route exact path="/Login" element={<LoginPage/>} />
            {/* El usuario puede ingresar a la pagina con su cuenta */}
            <Route exact path="/Register" element={<RegisterPage/>} />
            {/* El usuario puede registrarse con un nombre de usuario, su correo y su contraseña */}
            <Route exact path="/Perfil" element={<PerfilPage/>} />
            {/* Se ve la información personal del usuario, su foto de perfil, se pueden editar todos sus datos
            y aparece su calificación en estrellas como vendedor */}
            <Route exact path="/Reports" element={<ReportsPage/>} />
            {/* Aparecen los filtros del reporte que se requiera y se genera el reporte con los datos que se solicitan */}
            <Route exact path="/Dashboard" element={<DashboardPage/>} />
            {/* Pagina principal de TrueFan, aparecen los articulos mas solicitados, los mas nuevos e informacion 
            que puede ser util para el usuario */}
            <Route exact path="/" element={<DashboardPage/>} />
            <Route exact path="/Sugerencias" element={<SugerenciasPage/>} />
            {/* Aqui el administrador puede ver todas las sugerencias de los usuarios, puede ver los que ya reviso y los que
            aun no revisa */}
            <Route exact path="/CrearArticulo" element={<CrearArticuloPage/>} />
            {/* Se crea el articulo con toda la información y fotos necesarias para su venta o intercambio */}
            <Route exact path="/PerfilResenas" element={<PerfilResenasPage/>} />
            {/* Aqui el administrador puede ver todas las sugerencias de los usuarios, puede ver los que ya reviso y los que
            aun no revisa */}
          </Routes>
        </div>
        <Footer />
        {/* Contiene un input en el que los usuarios pueden enviar un comentario al administrador */}
      </div>
    </Router>
  );
}

export default App;

// import React, {useEffect, useState} from 'react'

// function App() {

//   const [backendData, setBackendData]= useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response=>response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>
// {(typeof backendData.users === 'undefined')? (
//   <p>Loading...</p>
// ):(
//   backendData.users.map((user,i)=>(
//     <p key={i}>{user}</p>
//   ))
// )}
//     </div>
//   )
// }

// export default App
