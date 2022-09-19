const express = require('express');
const router = express.Router();

const articuloVenta_controller = require('../controllers/articuloController');

//VENTA RUTAS
router.post("/agregarArticuloVenta", articuloVenta_controller.articuloVenta_agregar); //AGREGAR ARTICULO A LISTA DE VENTAS
router.get("/articulosVenta/:id", articuloVenta_controller.articuloVenta_getAll); //TRAER TODOS LOS ARTICULOS DE VENTA
router.get("/:id", articuloVenta_controller.articuloVenta_getById); //TRAER ARTICULO INDIVIDUAL
//router.post("/reporteVentas", articuloVenta_controller.articuloVenta_reporte); //REPORTE DE CUANTAS VENTAS HAN HABIDO POR MESES DEL AÑO


module.exports = router;
