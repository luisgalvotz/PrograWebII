const express = require('express');
const router = express.Router();

const articuloIntercambio_controller = require('../controllers/articuloController');

//ARTICULO INTERCAMBIO RUTAS


router.post("/agregarArticuloIntercambio", articuloIntercambio_controller.articuloIntercambio_agregar); //AGREGAR ARTICULO A LISTA DE INTERCAMBIOS -LISTO
router.get("/articulosIntercambio", articuloIntercambio_controller.articuloIntercambio_getAll); //TRAER TODOS LOS ARTICULOS DE INTERCAMBIO -
//router.post("/reporteIntercambios", articuloIntercambio_controller.articuloIntercambio_reporte); //REPORTE DE INTERCAMBIOS - 
router.get("/:id", articuloIntercambio_controller.articuloIntercambio_getById); // OBTENER ARTICULO INDIVIDUAL -LISTO

module.exports = router;