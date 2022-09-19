const express = require('express');
const router = express.Router();

const comentarios_controller = require('../controllers/comentariosController');

//COMENTARIOS RUTAS
router.post("/crear", comentarios_controller.comentarios_crear); //CREAR COMENTARIO
router.get("/ver", comentarios_controller.comentarios_ver); //VER COMENTARIOS PENDIENTES
router.put("/revisar", comentarios_controller.comentarios_revisar); //ACTUALIZAR COMENTARIO DE PENDIENTE A REVISADO
router.get("/reporte", comentarios_controller.comentarios_reporte); //VER MES-AÑO EN QUÉ SE RECIBIERON MÁS COMENTARIOS

module.exports = router;