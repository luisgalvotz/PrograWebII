const express = require('express');
const router = express.Router();

const etiquetas_controller = require('../controllers/etiquetasController');

//ETIQUETAS RUTAS
router.post("/crear", etiquetas_controller.etiquetas_crear); //CREAR ETIQUETA -SERVICE
router.get("/ver", etiquetas_controller.etiquetas_ver); //VER ETIQUETAS -SERVICE
router.post("/eliminar", etiquetas_controller.etiquetas_eliminar); //ELIMINAR UNA ETIQUETA (BAJA LOGICA) -SERVICE
router.get("/reporte", etiquetas_controller.etiquetas_reporte); //VER ETIQUETAS MAS UTILIZADAS

module.exports = router;