const express = require('express');
const router = express.Router();

const likes_controller = require('../controllers/likesController');

//LIKES RUTAS
router.post("/actualizar", likes_controller.likes_actualizar); //DAR O QUITAR LIKE A ARTICULO -SERVICE
router.get("/ver/:id", likes_controller.likes_ver); //VER CANTIDAD DE LIKES -SERVICE
router.get("/estatus/:id_usuario/:id_articulo", likes_controller.likes_estatus); //VER ESTATUS DE USUARIO-ARTICULO -SERVICE
router.get("/reporte", likes_controller.likes_reporte); //VER ARTICULOS CON MAS LIKES

module.exports = router; 