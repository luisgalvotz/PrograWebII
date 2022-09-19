const express = require('express');
const router = express.Router();

const likes_controller = require('../controllers/likesController');

//LIKES RUTAS
router.put("/actualizar", likes_controller.likes_actualizar); //DAR O QUITAR LIKE A ARTICULO
router.get("/ver/:id", likes_controller.likes_ver); //VER CANTIDAD DE LIKES
router.get("/estatus/:id_usuario/:id_articulo", likes_controller.likes_estatus); //VER ESTATUS DE USUARIO-ARTICULO
router.get("/reporte", likes_controller.likes_reporte); //VER ARTICULOS CON MAS LIKES

module.exports = router;