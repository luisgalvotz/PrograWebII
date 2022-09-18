const express = require('express');
const router = express.Router();

const resenas_controller = require('../controllers/resenasController');

//RESEÑAS RUTAS
router.post("/crear", resenas_controller.resenas_crear); //CREAR RESEÑA
router.get("/ver/:id", resenas_controller.resenas_ver); //VER RESEÑAS DEL VENDEDOR
router.get("/promedio/:id", resenas_controller.resenas_promedio); //VER PROMEDIO DEL VENDEDOR
router.get("/reporte", resenas_controller.resenas_reporte); //VER USUARIOS CON MEJORES RESEÑAS

module.exports = router;