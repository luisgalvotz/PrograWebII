const express = require('express');
const router = express.Router();

const comentarios_controller = require('../controllers/comentariosController');

//COMENTARIOS RUTAS
router.post("/crear", comentarios_controller.comentarios_crear); //CREAR COMENTARIO -SERVICE
router.get("/ver", comentarios_controller.comentarios_ver); //VER COMENTARIOS PENDIENTES -SERVICE
router.post("/revisar", comentarios_controller.comentarios_revisar); //ACTUALIZAR COMENTARIO DE PENDIENTE A REVISADO - SERVICE
router.get("/reporte", comentarios_controller.comentarios_reporte); //VER MES-AÑO EN QUÉ SE RECIBIERON MÁS COMENTARIOS -SERVICE

module.exports = router;
