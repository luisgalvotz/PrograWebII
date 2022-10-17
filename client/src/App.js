import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import DetalleProductoVenta from './components/DetalleProductoVenta'
import DetalleProductoIntercambio from './components/DetalleProductoIntercambio.js'
import ProductosVenta from './components/ProductosVenta'


function App() {

  return (
    <Router>
      
      <Navigation/>
      <div className="page-container">
      <div className="content-wrap">
      <Routes>
      <Route exact path="/" element={<NotesList/>} />
      <Route exact path="/DetalleProductoVenta" element={<DetalleProductoVenta/>} />
      <Route exact path="/DetalleProductoIntercambio" element={<DetalleProductoIntercambio/>} />
      <Route exact path="/edit/:id" element={<NotesList/>} />
      <Route exact path="/create" element={<CreateNote/>} />
      <Route exact path="/ProductosVenta" element={<ProductosVenta/>} />
      <Route exact path="/user" element={<CreateUser/>} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  )
}

export default App

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