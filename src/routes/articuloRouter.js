const express = require('express');
const router = express.Router();

const articulo_controller = require('../controllers/articuloController');

//USUARIO RUTAS
router.post("/crearArticulo", articulo_controller.articulo_crear); //CREAR ARTICULO
router.get("/articulos", articulo_controller.articulo_getAll); //TRAER TODOS LOS ARTICULOS EN GENERAL
router.get("/:id", articulo_controller.articulo_getById); //TRAER UN SOLO ARTICULO
router.post("/busqueda", articulo_controller.busqueda); //BUSCA EL ARTICULO SEGUN LOS PARAMETROS


module.exports = router;

