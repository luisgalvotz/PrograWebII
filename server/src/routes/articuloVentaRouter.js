const express = require('express');
const router = express.Router();

const articuloVenta_controller = require('../controllers/articuloController');

//VENTA RUTAS
router.post("/agregarArticuloVenta", articuloVenta_controller.articuloVenta_agregar); //AGREGAR ARTICULO A LISTA DE VENTAS -LISTO -SERVICE
router.get("/articulosVenta", articuloVenta_controller.articuloVenta_getAll); //TRAER TODOS LOS ARTICULOS DE VENTA -LISTO -SERVICE
router.get("/articuloVentaId/:id", articuloVenta_controller.articuloVenta_getById); //TRAER ARTICULO INDIVIDUAL -LISTO -SERVICE
//REPORTE DE ARTICULOS VENDIDOS POR MES Y AÑO
router.get("/reporteVentas", articuloVenta_controller.articuloVenta_reporte);

module.exports = router;
