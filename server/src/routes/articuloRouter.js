const express = require('express');
const router = express.Router();

const articulo_controller = require('../controllers/articuloController');

//ARTICULO RUTAS
router.post("/crearArticulo", articulo_controller.articulo_crear); //CREAR ARTICULO -LISTO -SERVICE
router.get("/articulos", articulo_controller.articulo_getAll); //TRAER TODOS LOS ARTICULOS EN GENERAL - LISTO -SERVICE
//router.get("/:id", articulo_controller.articulo_getById); //TRAER UN SOLO ARTICULO
router.get("/busqueda/:etiquetas", articulo_controller.busqueda); //BUSCA EL ARTICULO POR ETIQUETAS -LISTO -SERVICE
router.post("/baja", articulo_controller.articulo_baja); //DAR DE BAJA ARTICULO -LISTO -SERVICE


module.exports = router;

 