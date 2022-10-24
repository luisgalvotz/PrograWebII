import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import DetalleProductoVentaPage from "./pages/DetalleProductoVentaPage";
import DetalleProductoIntercambioPage from "./pages/DetalleProductoIntercambioPage.js";
import ListaProductosVentaPage from "./pages/ListaProductosVentaPage";
import ListaProductosIntercambioPage from "./pages/ListaProductosIntercambioPage";
import ListaProductosBusquedaPage from "./pages/ListaProductosBusquedaPage";
import ProductosAdquiridosPage from "./pages/ProductosAdquiridosPage";
import ProductosDeseadosPage from "./pages/ProductosDeseadosPage";
import ProductosPublicadosPage from "./pages/ProductosPublicadosPage";
import DetalleProductoSugeridoPage from "./pages/DetalleProductoSugeridoPage";
import ListaEtiquetasPage from "./pages/ListaEtiquetasPage";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route exact path="/DetalleProductoVenta" element={<DetalleProductoVentaPage />}/>
            <Route exact path="/DetalleProductoIntercambio" element={<DetalleProductoIntercambioPage />}/>
            <Route exact path="/DetalleProductoSugerido" element={<DetalleProductoSugeridoPage />}/>
            {/* <Route exact path="/edit/:id" element={<NotesList/>} /> */}
            <Route exact path="/ListaProductosVenta" element={<ListaProductosVentaPage />}/>
            <Route exact path="/ListaProductosIntercambio" element={<ListaProductosIntercambioPage />}/>
            <Route exact path="/ListaProductosBusqueda" element={<ListaProductosBusquedaPage />}/>
            <Route exact path="/ProductosAdquiridos" element={<ProductosAdquiridosPage />}/>
            <Route exact path="/ProductosDeseados" element={<ProductosDeseadosPage />}/>
            <Route exact path="AdministrarIntercambios" element={<ProductosPublicadosPage />}/>
            <Route exact path="/ListaEtiquetas" element={<ListaEtiquetasPage />}/>
          </Routes>
        </div>
        <Footer />
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
