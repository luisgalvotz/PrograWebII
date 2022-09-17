const express = require('express');
const router = express.Router();

const articuloIntercambio_controller = require('../controllers/articuloController');

//USUARIO RUTAS

//router.post("/agregarArticuloIntercambio", articuloIntercambio_controller.articuloIntercambio_agregar); //AGREGAR ARTICULO A LISTA DE INTERCAMBIOS
//router.get("/articulosIntercambio", articuloIntercambio_controller.articuloIntercambio_getAll); //TRAER TODOS LOS ARTICULOS DE INTERCAMBIO
//router.post("/reporteIntercambios", articuloIntercambio_controller.articuloIntercambio_reporte); //REPORTE DE INTERCAMBIOS


module.exports = router;